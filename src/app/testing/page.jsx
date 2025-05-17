"use client"
import Earth from "@/animations/testingAnimation.js";
import { Box } from "@react-three/drei";
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
      <Earth />
    </Box>
  );
}