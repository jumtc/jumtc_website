"use client";
import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

//? Importing components
import Intro from "@/components/text";

export default function Home() {
  //* using themes
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        height: "auto",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* The introduction component of mechatronics club */}
      <Intro />
    </Box>
  );
}
