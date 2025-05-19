"use client";
import { Box } from "@react-three/drei";
import ParticleImageCanvas from "@/components/particles";

export default function TestingPage() {
  return (
    <main style={{ position: "relative", overflow: "hidden" }}>
      <Box>
        <ParticleImageCanvas />
      </Box>
    </main>
  );
}
