"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import "@fontsource/russo-one";

export default function Intro() {
  const theme = useTheme();

  return (
    <Box
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
          pt: "20vh",
          zIndex: 2,
        }}
      >
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
  );
}
