"use client";
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//?importing the scroll animation
// import { scrollEffect } from "../animations/scrollEffect";

//? Importing components
import Intro from "../components/text";
import WhatWeDo from "../components/essence";

export default function Home() {
  const theme = useTheme();
  const triggerRef = useRef(null);
  const startingTextRef = useRef(null);
  const orbRef = useRef(null);
  const aboutRef = useRef(null);

  // useEffect(() => {
  //   scrollEffect({
  //     triggerRef: triggerRef,
  //     introRef: startingTextRef,
  //     orbRef: orbRef,
  //     aboutRef: aboutRef,
  //   });
  // });

  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto", // Double height to accommodate the scroll
        backgroundColor: theme.palette.background.default,
        position: "relative",
        overflow: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Fixed Intro Section */}
      <Box
        sx={{
          width: "100%",
          height: "150vh",
          position: "relative",
        }}
      >
        <Intro
          triggerRef={triggerRef}
          startingTextRef={startingTextRef}
          orbRef={orbRef}
        />
      </Box>

      {/* Scrolling WhatWeDo Section */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "relative",
          top: "-50vh", // Position it below the intro section
          left: 0,
          zIndex: 2,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <WhatWeDo aboutRef={aboutRef} />
      </Box>
    </Box>
  );
}
