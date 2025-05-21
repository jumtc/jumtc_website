"use client";
//? importing important packages
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "@fontsource/russo-one";
//?importing components
import OrbEffect from "../animations/animatedOrb"; // a 3d orb created in three js

export default function Intro({ triggerRef, startingTextRef, orbRef }) {
  const theme = useTheme(); // using themes
  return (
    <Box
      ref={triggerRef}
      sx={{
        height: "100vh",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <Box
        sx={{
          position: "relative",
          pt: "30vh",
          zIndex: 2,
        }}
      >
        {/* The bio orb */}
        <OrbEffect ref={orbRef} />
        {/* fome page texts */}
        <Box ref={startingTextRef}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "2.5rem",
                sm: "4rem",
                md: "6rem",
              },
              color: theme.palette.text.primary, // Softer cyan
              textShadow: theme.glaze.textShadow1,
              letterSpacing: "0.1em",
              fontFamily: "'Varino'",
              zIndex: 2,
              position: "relative",
            }}
          >
            MECHATRONICS
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontWeight: "900",
              fontSize: {
                xs: "3rem",
                sm: "5rem",
                md: "7rem",
              },
              color: theme.palette.text.primary,
              textShadow: theme.glaze.textShadow1,
              fontFamily: "'Varino'",
              letterSpacing: "0.1em",
              mb: 6,
              zIndex: 2,
              position: "relative",
            }}
          >
            CLUB
          </Typography>

          {/* Icon Text Row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 6,
              flexWrap: "wrap",
              zIndex: 2,
              position: "relative",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                mt: 1,
                fontSize: "1.2rem",
                fontWeight: "bold",
                fontFamily: "'Orbitron', sans-serif",
                letterSpacing: "15px",
              }}
            >
              DESIGN . CREATE . REVOLUTIONIZE
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
