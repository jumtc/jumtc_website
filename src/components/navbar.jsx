"use client";
import React, { useEffect,useRef } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu"; // For mobile menu icon
import Image from "next/image";
import { registerNavbarSlidingHoverAnimation } from "@/animations/navbarAnimations";

export default function Navbar({ title }) {
  //* Accessing the theme
  const theme = useTheme();
  const buttonRefs = useRef([]);

  //* Navbar options
  const options = [
    { label: "Home", path: "/" },
    { label: "Members", path: "/members" },
    { label: "Projects", path: "/projects" },
    { label: "Events", path: "/events" },
    { label: "Blogs", path: "/blogs" },
    { label: "Sponsors", path: "/sponsors" },
  ];

  //* Effect hook for navbar animation
  useEffect(() => {
    registerNavbarSlidingHoverAnimation(buttonRefs.current);
  }, []);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.primary.transparent,
        color: theme.palette.text.primary,
        width: {
          xs: "100%", // Full width on small screens
          sm: "90%",  // 90% width on small devices
          md: "80%",  // 80% width on medium and larger screens
        },
        margin: "0 auto",
        borderRadius: {
          xs: "0", // No border radius on small screens
          sm: "15px", // Rounded corners on larger screens
        },
        marginTop: "10px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between", // Space between title and menu icon
          alignItems: "center", // Align items vertically
          flexDirection: {
            xs: "row", // Align items horizontally on all screens
          },
        }}
      >
        {/* Logo and Title */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              marginLeft: 1, // Add spacing between logo and title
            }}
          >
            {title}
          </Typography>
        </Box>
        {/* Navigation Options */}
        <Box
          sx={{
            display: {
              xs: "none", // Hide buttons on small screens
              sm: "flex", // Show buttons on larger screens
            },
          }}
        >
          {options.map((option,index) => (
            <Button
              key={option.label}
              color="inherit"
              ref ={(el) => (buttonRefs.current[index] = el)} // Store button reference
              sx={{
                marginRight: 2,
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.text.primary,
                },
              }}
              onClick={() => (window.location.href = option.path)}
            >
              {option.label}
            </Button>
          ))}
        </Box>
        {/* Mobile Menu Icon */}
        <IconButton
          sx={{
            display: {
              xs: "flex", // Show menu icon on small screens
              sm: "none", // Hide menu icon on larger screens
            },
          }}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}