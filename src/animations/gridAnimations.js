'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const PointsGrid = ({ count, positions }) => {
  const pointsRef = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    for (let i = 0; i < count; i++) {
      const x = positions.current[i * 3];
      const y = positions.current[i * 3 + 1];
      positions.current[i * 3 + 2] = Math.sin(x * 0.2 + time) * Math.cos(y * 0.2 + time);
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions.current}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial color="#ffffff" size={2} sizeAttenuation />
    </Points>
  );
};

const FlowingGrid = () => {
  const count = 100 * 100;
  const positions = useRef(new Float32Array(count * 3));

  // Initialize positions
  for (let i = 0; i < count; i++) {
    const x = (i % 100) - 50;
    const y = Math.floor(i / 100) - 50;
    positions.current[i * 3] = x;
    positions.current[i * 3 + 1] = y;
    positions.current[i * 3 + 2] = 0;
  }

  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 75 }} style={{ background: "#000000" }}>
      <ambientLight intensity={1} />
      <PointsGrid count={count} positions={positions} />
    </Canvas>
  );
};

export default FlowingGrid;