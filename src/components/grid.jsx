"use client";
//? importing packages and files
import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import { staggerGridAnimation } from "../animations/gridAnimations";

export default function Grid() {
  const gridRef = useRef(null); // Ref for the grid container

  useEffect(() => {
    const gridItems = gridRef.current.children; // Get all grid items
    // staggerGridAnimation(gridItems); // Trigger the staggered animation
  }, []);

  return (
    <Box
      ref={gridRef}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(1px, 1fr))", // Responsive grid
        columnGap: "50px",
        rowGap: "50px",
        width: "100vw",
        height: "100vh",
        posititon: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      {/* Grid Items */}
      {Array.from({ length: 500 }).map((_, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#00BFA6",
            width: "10px",
            height: "10px",
            borderRadius: "50%",
          }}
        >
        </Box>
      ))}
    </Box>
  );
}