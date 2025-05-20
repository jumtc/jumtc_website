"use client";
import { Box } from "@react-three/drei";
import OrbEffect from "@/animations/animatedOrb";

export default function TestingPage() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <Box>
        <OrbEffect />
      </Box>
    </main>
  );
}
