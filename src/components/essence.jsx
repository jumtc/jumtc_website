"use client";
import { Box, Typography, Grid, useTheme } from "@mui/material";

export default function WhatWeDo({ aboutRef }) {
  const theme = useTheme();

  return (
    <Box
      ref={aboutRef}
      sx={{
        height: "100vh",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 4,
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        fontWeight="bold"
        sx={{ mt: 5, position: "relative" }}
      >
        What We Do?
      </Typography>
    </Box>
  );
}
