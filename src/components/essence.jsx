"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Grid, useTheme } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import MemoryIcon from "@mui/icons-material/Memory";
import CodeIcon from "@mui/icons-material/Code";
import SimCardIcon from "@mui/icons-material/SimCard";
import { motion } from "framer-motion";

const services = [
  {
    icon: <DesignServicesIcon fontSize="large" color="primary" />,
    label: "Design",
  },
  {
    icon: <MemoryIcon fontSize="large" color="primary" />,
    label: "Electronics",
  },
  { icon: <CodeIcon fontSize="large" color="primary" />, label: "Software" },
  {
    icon: <SimCardIcon fontSize="large" color="primary" />,
    label: "Simulation",
  },
];

const carouselImages = [
  "/images/project1.jpg",
  "/images/project2.jpg",
  "/images/project3.jpg",
];

const rotateAnimation = {
  animate: { rotate: 360 },
  transition: { repeat: Infinity, duration: 15, ease: "linear" },
};

export default function WhatWeDo() {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
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
      <Typography variant="h3" gutterBottom fontWeight="bold">
        What We Do?
      </Typography>

      <Grid
        container
        spacing={4}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: 900, flexGrow: 1 }}
      >
        {/* Left side: services */}
        <Grid item xs={12} md={5}>
          <Grid container spacing={4}>
            {services.map(({ icon, label }, i) => (
              <Grid
                key={i}
                item
                xs={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {icon}
                <Typography mt={1} variant="h6" align="center">
                  {label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Right side: rotating gear with carousel */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{ position: "relative", width: 300, height: 300 }}
        >
          {/* Rotating gear */}
          <motion.div
            {...rotateAnimation}
            style={{ position: "absolute", inset: 0 }}
          >
            <img
              src="/gear.svg"
              alt="Rotating Gear"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </motion.div>

          {/* Carousel image inside gear */}
          <Box
            sx={{
              position: "absolute",
              top: "22%",
              left: "22%",
              width: "56%",
              height: "56%",
              borderRadius: "50%",
              overflow: "hidden",
              boxShadow: theme.shadows[4],
              border: `3px solid ${theme.palette.primary.main}`,
              backgroundColor: theme.palette.background.paper,
              zIndex: 1,
            }}
          >
            <motion.img
              key={currentImage}
              src={carouselImages[currentImage]}
              alt={`Slide ${currentImage + 1}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
