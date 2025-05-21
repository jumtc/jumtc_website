"use client";

import React, { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
//? importing animations
import {capsuleScrollEffect} from "../animations/scrollEffect.js";

const projects = [
  {
    title: "Project 1",
    description: "This is a description of Project 1. It showcases our work.",
    image: "/testing.jpeg", // Replace with the actual image path
    link: "/project1", // Replace with the project link
  },
  {
    title: "Project 2",
    description:
      "This is a description of Project 2. It highlights our skills.",
    image: "/testing.jpeg", // Replace with the actual image path
    link: "/project2", // Replace with the project link
  },
  // Add more projects as needed
];

export default function Projects() {
  //* using themes for colour
  const theme = useTheme();
  //* using refs for animation
  const headingTriggerRef = useRef(null);
  const headingRef = useRef(null);
  const capsuleTriggerRef = useRef(null);
  const capsuleRef = useRef(null);
  //*using effect hook for animation
  useEffect(() => {
    // capsuleScrollEffect({
    //   capsuleTriggerRef,
    //   capsuleRef,
    // });
  })

  return (
    <Box
      sx={{
        height: "auto",
        width: "100vw",
      }}
    >
      <Box
        ref={capsuleTriggerRef}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          // bgcolor: theme.palette.background.default,
          bgcolor: "red",
          color: theme.palette.text.primary,
          padding: 4,
        }}
      >
        <Box
          ref={capsuleRef}
          sx={{
            width: "30vw",
            height: "20vh",
            borderRadius: "999px",
            backgroundColor: theme.palette.primary.main,
            position: "sticky",
            top: "10vh",
            margin: "auto",
            zIndex: 10,
            overflow: "hidden",
            transition: "all 0.5s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: "100vw",
                height: "100vh",
                bgcolor: theme.palette.background.default,
                color: theme.palette.text.primary,
              }}
            >
              {/* Left: Project Image */}
              <Box
                sx={{
                  width: "50%",
                  height: "100%",
                  backgroundImage: `url(${project.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></Box>

              {/* Right: Project Details */}
              <Box
                sx={{
                  width: "50%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  p: 4,
                }}
              >
                <Typography variant="h3" fontWeight="bold" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
