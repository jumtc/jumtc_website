"use client";
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//?importing the scroll animation
import {
  scrollEffect,
  horizontalAboutScrollEffect,
} from "../animations/scrollEffect";

//? Importing components
import Intro from "../components/text";
import WhatWeDo from "../components/essence";

export default function Home() {
  //& References for gsap animations
  const theme = useTheme();
  const triggerRef = useRef(null);
  const startingTextRef = useRef(null);
  const orbRef = useRef(null);
  //* References for the horizontal scroll effect of about section
  const aboutRef = useRef(null);
  const horizontalRef = useRef(null);


  //* Effect hook for gsap animations
  useEffect(() => {
    scrollEffect({
      triggerRef: triggerRef,
      introRef: startingTextRef,
      orbRef: orbRef,
      aboutRef: aboutRef,
    });
    horizontalAboutScrollEffect({
      triggerRef: aboutRef,
      horizontalRef: horizontalRef,
    });
  });

  return (
    <main>
        <Intro
          triggerRef={triggerRef}
          startingTextRef={startingTextRef}
          orbRef={orbRef}
        />
      {/* Scrolling WhatWeDo Section */}
      <WhatWeDo aboutRef={aboutRef} horizontalRef={horizontalRef} />
    </main>
  );
}
