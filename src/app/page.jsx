"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Home() {
  //* using themes
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        backgroundColor: theme.palette.background.default,
        py: 4,
      }}
    >
      <Box
        sx={{
          height: "auto",
          textAlign: "center",
        }}
      >
        {/* Top Line: MECHATRONICS */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: {
              xs: "2.5rem",
              sm: "4rem",
              md: "6rem",
            },
            color: "#ccc",
            letterSpacing: "0.1em",
            fontFamily: "'Orbitron', sans-serif", // Use futuristic font
          }}
        >
          MECHATRONICS
        </Typography>

        {/* Bottom Line: CLUB */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: "900",
            fontSize: {
              xs: "3rem",
              sm: "5rem",
              md: "7rem",
            },
            color: "#666",
            fontFamily: "'Orbitron', sans-serif",
            letterSpacing: "0.1em",
          }}
        >
          CLUB
        </Typography>
      </Box>
    </Box>
  );
}
