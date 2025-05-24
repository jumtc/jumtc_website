"use client";
import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { createNoise4D } from "simplex-noise";

export default function OrbEffect() {
	const mountRef = useRef();
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (event) => {
			setMousePos({
				x: (event.clientX / window.innerWidth) * 2 - 1,
				y: -(event.clientY / window.innerHeight) * 2 + 1,
			});
		};

		window.addEventListener("mousemove", handleMouseMove);

		// Setup scene, camera, renderer
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000,
		);

		const renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setSize(window.innerWidth, window.innerHeight);
		mountRef.current.appendChild(renderer.domElement);

		// Lighting
		const ambientLight = new THREE.AmbientLight(0xffffff, 2.5);
		ambientLight.position.set(10, 10, 10);
		scene.add(ambientLight);

		const plight1 = new THREE.PointLight(0x3a5a9a, 1, 100);
		plight1.position.set(0, 0, 10);
		plight1.castShadow = true;
		scene.add(plight1);

		const plight2 = new THREE.PointLight(0x1a3a7a, 1, 100);
		plight2.position.set(12, 0, -2);
		plight2.castShadow = true;
		scene.add(plight2);

		const plight3 = new THREE.PointLight(0x5a7aba, 1, 100);
		plight3.position.set(-12, 0, -2);
		plight3.castShadow = true;
		scene.add(plight3);

		const mlight = new THREE.PointLight(0xffffff, 1, 0.3);
		mlight.position.set(0, 0, 0);
		mlight.castShadow = true;
		scene.add(mlight);

		// Create geometries
		const geometries = [
			new THREE.TorusGeometry(8, 2, 40, 150),
			new THREE.TorusGeometry(8, 2, 40, 150),
			new THREE.TorusGeometry(8, 2, 40, 150),
		];
		let colors = [];

		// Add color attributes
		geometries.forEach((geometry) =>
			colors.push(new Float32Array(geometry.attributes.position.count * 3)),
		);

		colors.forEach((color, i) =>
			geometries[i].setAttribute("color", new THREE.BufferAttribute(color, 3)),
		);

		// Create materials
		const materials = [
			new THREE.MeshStandardMaterial({
				vertexColors: true,
				roughness: 0.5,
				metalness: 0.6,
			}),
			new THREE.MeshStandardMaterial({
				vertexColors: true,
				roughness: 0.5,
				metalness: 0.6,
			}),
			new THREE.MeshStandardMaterial({
				vertexColors: true,
				roughness: 0.5,
				metalness: 0.6,
			}),
		];

		// Create meshes and add to scene
		const spheres = geometries.map((geometry, i) => new THREE.Mesh(geometry, materials[i]));
		spheres.forEach((mesh) => scene.add(mesh));
		camera.position.z = 3;

		// Noise function
		const noise4D = createNoise4D();

		let time = 0;

		const colorPairs = [
			[new THREE.Color("#0a1a3a"), new THREE.Color("#2a4a7a")], // Dark blue to medium blue
			[new THREE.Color("#3a5a9a"), new THREE.Color("#5a7aba")], // Medium blue to light blue
			[new THREE.Color("#7a9ada"), new THREE.Color("#a0b0f0")], // Light blue to pale blue
		];

		// Animation loop
		function animate() {
			const maxChange = 0.1;

			geometries.forEach((geometry, index) => {
				const positions = geometry.attributes.position.array;
				const colors = geometry.attributes.color.array;
				const vertex = new THREE.Vector3();

				const [baseColor, displacedColor] = colorPairs[index];

				for (let i = 0; i < positions.length; i += 3) {
					vertex.set(positions[i], positions[i + 1], positions[i + 2]);
					const noiseValue = noise4D(vertex.x, vertex.y, vertex.z, time + i);
					const displacement = noiseValue * maxChange;
					vertex.normalize().multiplyScalar(1 + displacement);
					positions[i] = vertex.x;
					positions[i + 1] = vertex.y;
					positions[i + 2] = vertex.z;

					const color = baseColor.clone().lerp(displacedColor, Math.abs(displacement));
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

		// Handle resizing
		const onResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener("resize", onResize);

		// Cleanup function
		return () => {
			window.removeEventListener("resize", onResize);
			if (mountRef.current && renderer.domElement) {
				mountRef.current.removeChild(renderer.domElement);
			}

			// Dispose geometries and materials
			spheres.forEach((mesh) => {
				mesh.geometry.dispose();
				mesh.material.dispose();
				scene.remove(mesh);
			});

			renderer.dispose();
		};
	}, []);

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
				filter: "blur(0.5px)",
				background: "radial-gradient(circle, rgba(0,140,255,0.3), rgba(0,0,50,0))",
			}}
		/>
	);
}
