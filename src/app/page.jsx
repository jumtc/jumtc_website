"use client";

import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import { duration, useTheme } from "@mui/material/styles"; // Import useTheme
import { slidingTextAnimation,typingTextAnimation } from "@/animations/textAnimations";
import gsap from "gsap";
// import { animateMainText, animateRotatingWords } from "../animations/textAnimations";

export default function Home() {
  const theme = useTheme(); // Access the theme
  const mainTextRef = useRef(null); // Ref for "Mechatronics Club"
  const subTextRef = useRef(null); // Ref for "Jadavpur University"
  const rotatingWordsRef = useRef(null); // Ref for rotating words

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      .add(slidingTextAnimation("#club_name_1", {direction: "left", duration: 1}))
      .add(slidingTextAnimation("#club_name_2", {direction: "right", duration: 1}), "<")
      .add(typingTextAnimation(".thoughts", {duration: 1, delay: 0.5}), "<")
  }, []);

  return (
    <main>
      {/* Left Side Text */}
      <Box
        sx={{
          position: "relative",
          height: "88vh",
          width: "50%",
          top: "0",
          left: "0",
          // bgcolor: "red",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box>
          {/* Main Text */}
          <Typography
            className="club_name"
            id = "club_name_1"
            ref={mainTextRef}
            variant="h2"
            sx={{
              fontFamily: theme.typography.fontFamily, // Use theme font family
              fontWeight: theme.typography.home.fontWeight, // Use theme font weight
              fontSize: theme.typography.home.fontSize, // Use theme font size
              lineHeight: "1.2",
              color: theme.palette.primary.main, // Use theme primary color
            }}
          >
            Mechatronics
          </Typography>
          <Typography
            className="club_name"
            id = "club_name_2"
            ref={mainTextRef}
            variant="h2"
            sx={{
              fontFamily: theme.typography.fontFamily,
              fontWeight: theme.typography.home.fontWeight,
              fontSize: theme.typography.home.fontSize,
              lineHeight: "1.2",
              color: theme.palette.primary.main,
              display: "flex",
            }}
          >
            Club
            {/* Ideals */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "10px",
                letterSpacing: "8px",
              }}
            >
              <Box>
                <Typography
                  className="club_moto"
                  ref={mainTextRef}
                  variant="h2"
                  sx={{
                    fontFamily: theme.typography.fontFamily, // Use theme font family
                    fontWeight: theme.typography.h2.fontWeight, // Use theme font weight
                    fontSize: theme.typography.h2.fontSize, // Use theme font size
                    lineHeight: "1.2",
                    color: theme.palette.text.quaternary, // Use theme primary color
                  }}
                >
                  Build Create
                </Typography>
              </Box>
              <Typography
                className="club_moto"
                ref={mainTextRef}
                variant="h2"
                sx={{
                  fontFamily: theme.typography.fontFamily, // Use theme font family
                  fontWeight: theme.typography.h2.fontWeight, // Use theme font weight
                  fontSize: theme.typography.h2.fontSize, // Use theme font size
                  lineHeight: "1.2",
                  color: theme.palette.text.quaternary, // Use theme primary color
                }}
              >
                Revolutionize
              </Typography>
            </Box>
          </Typography>

          {/* Sub Text */}
          <Typography
            className="university"
            ref={subTextRef}
            variant="h6"
            sx={{
              fontFamily: theme.typography.fontFamily, // Use theme font family
              fontWeight: theme.typography.h1.fontWeight, // Use theme font weight
              fontSize: theme.typography.h1.fontSize, // Use theme font size
              marginTop: "10px",
              color: theme.palette.text.softRed, // Use theme primary color
            }}
          >
            Jadavpur University
          </Typography>
          <Typography
            className="thoughts"
            ref={subTextRef}
            variant="h6"
            sx={{
              fontFamily: theme.typography.fontFamily, // Use theme font family
              fontWeight: theme.typography.body1.fontWeight, // Use theme font weight
              fontSize: theme.typography.body1.fontSize, // Use theme font size
              marginTop: "10px",
              color: theme.palette.text.secondary, // Use theme secondary text color
            }}
          >
            Build anything you can imagine
          </Typography>
        </Box>
      </Box>
    </main>
  );
}
