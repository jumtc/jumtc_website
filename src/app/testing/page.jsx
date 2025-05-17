"use client"
import { Box } from "@react-three/drei";
import ParticlesAnimation from "@/components/particles";

export default function HomePage() {
  return (
    <Box
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <ParticlesAnimation />
    </Box>
  );
}