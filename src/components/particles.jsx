"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ParticleImageCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 300;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const particleSize = 2;
    const gap = 4;

    const loader = new THREE.TextureLoader();
    loader.load("/jumtclogo.png", (texture) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      canvas.width = texture.image.width;
      canvas.height = texture.image.height;
      context.drawImage(texture.image, 0, 0);

      const imageData = context.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      ).data;

      const geometry = new THREE.BufferGeometry();
      const positions = [];
      const colors = [];

      for (let y = 0; y < canvas.height; y += gap) {
        for (let x = 0; x < canvas.width; x += gap) {
          const index = (x + y * canvas.width) * 4;
          const r = imageData[index];
          const g = imageData[index + 1];
          const b = imageData[index + 2];
          const a = imageData[index + 3];

          if (a > 128) {
            const posX = x - canvas.width / 2;
            const posY = -y + canvas.height / 2;
            positions.push(posX, posY, 0);
            colors.push(r / 255, g / 255, b / 255);
          }
        }
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
      );
      geometry.setAttribute(
        "color",
        new THREE.Float32BufferAttribute(colors, 3)
      );

      const material = new THREE.PointsMaterial({
        size: particleSize,
        vertexColors: true,
      });

      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const animate = () => {
        requestAnimationFrame(animate);
        // points.rotation.y += 0.0015;
        renderer.render(scene, camera);
      };
      animate();
    });

    return () => {
      while (mount.firstChild) {
        mount.removeChild(mount.firstChild);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100vh" }} />;
}
