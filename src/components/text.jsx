"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// Material Icons
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import BuildIcon from "@mui/icons-material/Build";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import "@fontsource/russo-one";

export default function Intro() {
  const theme = useTheme();

  const items = [
    { icon: <DesignServicesIcon fontSize="large" />, label: "Design" },
    { icon: <BuildIcon fontSize="large" />, label: "Create" },
    { icon: <AutorenewIcon fontSize="large" />, label: "Revolutionize" },
  ];

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
      {/* Background Logo */}
      <Box
        component="img"
        src="/jumtclogo.png"
        alt="Logo"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "60%", sm: "40%", md: "30%" },
          opacity: 0.3,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Foreground content */}
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
            textShadow: `
      0 0 3px #00e6e6,
      0 0 6px #00cccc
    `,
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
            textShadow: `
      0 0 3px #00e6e6,
      0 0 6px #00cccc
    `,
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
          {items.map(({ icon, label }) => (
            <Box
              key={label}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                color: theme.palette.text.secondary,
              }}
            >
              {icon}
              <Typography
                variant="subtitle1"
                sx={{
                  mt: 1,
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  fontFamily: "'Orbitron', sans-serif",
                }}
              >
                {label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
