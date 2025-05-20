"use client";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import simplexNoise from "simplex-noise";

export default function OrbEffect() {
  const mountRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight
    );
    const renderer = new THREE.WebGLRenderer({ animation: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    //*Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const plight1 = new THREE.PointLight(0xffffff, 1, 100);
    plight1.position.set(0, 0, 10);
    plight1.castShadow = true;
    scene.add(plight1);

    const plight2 = new THREE.PointLight(0x2f0000, 1, 100);
    plight2.position.set(0, 0, -2);
    plight2.castShadow = true;
    scene.add(plight2);

    const plight3 = new THREE.PointLight(0x00002f, 1, 100);
    plight3.position.set(0, 0, -2);
    plight3.castShadow = true;
    scene.add(plight3);
  });

  //* mid light
  const mlight = new THREE.PointLight(0xffffff, 1, 0.3);
  mlight.position.set(0, 0, 0);
  mlight.castShadow = true;
  scene.add(mlight);

  //* Torus Geometry
  let geometries = [
    new THREE.TorusGeometry(8, 2, 40, 150),
    new THREE.TorusGeometry(8, 2, 40, 150),
    new THREE.TorusGeometry(8, 2, 40, 150),
  ];

  //* add colour attributes to geometries
  let colors = [];
  geometries.forEach((geometry) =>
    colors.push(new Float32Array(geometry.attributes.position.count * 3))
  );
  colors.forEach((color, i) =>
    geometries[i].setAttribute("color", new THREE.BufferAttribute(color, 3))
  );

  let materials = [
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 2,
      metalness: 0.4,
    }),
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 2,
      metalness: 0.4,
    }),
    new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 2,
      metalness: 0.4,
    }),
  ];

  let spheres = [];
  geometries.forEach((geometry, i) =>
    spheres.push(new THREE.Mesh(geometry, materials[i]))
  );
  spheres.forEach((spheres) => scene.add(spheres));
  camera.position.z = 3;

  const simplex = new simplexNoise();

  let time = 0;
  let cnt = 0;
  function animate() {
    const maxChange = 0.25;
    geometries.forEach((geometry, i) => {
      const positions = geometry.attributes.position.array;
      const colors = geometry.attributes.color.array;
      const vertex = new THREE.Vector3();

      for (let i = 0; i < positions.length; i += 3) {
        vertex.set(positions[i], positions[i + 1], positions[i + 2]);
        const noiseValue = simplex.noise4D(
          vertex.x,
          vertex.y,
          vertex.z,
          time + i
        );
        const displacement = noiseValue * maxChange;
        vertex.normalize().multiplyScalar(1 + displacement);
        positions[i] = vertex.x;
        positions[i + 1] = vertex.y;
        positions[i + 2] = vertex.z;

        const baseColor = new THREE.Color("teal");
        const displacedColor = new THREE.Color("aqua");

        const color = baseColor.lerp(displacedColor, Math.abs(displacement));
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
      }
      geometry.attributes.position.needsUpdate = true;
      geometry.attributes.color.needsUpdate = true;
    });
    time += 0.015;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();

  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    />
  );
}
