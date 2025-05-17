'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Earth() {
  const mountRef = useRef(null);

  useEffect(() => {
    const canvas = mountRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 10, 7.5);
    scene.add(directionalLight);

    // Load Earth Model
    const loader = new GLTFLoader();
    loader.load(
      '/models/earth.glb',
      (gltf) => {
        const earth = gltf.scene;
        earth.scale.set(1, 1, 1);
        earth.rotation.y = Math.PI;
        earth.add(mars);

        // Animate Mars
        const animate = () => {
          requestAnimationFrame(animate);
          earth.rotation.y += 0.005;
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => {
        console.error('Failed to load Mars model:', error);
      }
    );

    // Clean up on unmount
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={mountRef}
      style={{ width: '100vw', height: '100vh', display: 'block' }}
    />
  );
}
