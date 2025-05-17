"use client";
import React, { useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
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
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        width: {
          xs: "100%",
          sm: "90%",
          md: "60%",
        },
        margin: "0 auto",
        borderRadius: {
          xs: "0",
          sm: "0 0 40px 40px",
        },
        position: "relative",
        overflow: "visible",
        borderBottom: `4px solid ${theme.palette.text.primary}`,
        "&::before, &::after": {
          content: '""',
          position: "absolute",
          top: 0,
          width: {
            xs: 0,
            sm: "calc(100%)",
          },
          height: "50%",
          backgroundColor: theme.palette.background.default,
          borderBottom: `0.1px solid ${theme.palette.text.primary}`,
        },

        "&::before": {
          left: "-100%",
        },

        "&::after": {
          right: "-100%",
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "centre", // Space between title and menu icon
          alignItems: "center", // Align items vertically
          flexDirection: {
            xs: "row", // Align items horizontally on all screens
          },
        }}
      >
        {/* Navigation Options */}
        <Box
          sx={{
            width: "100%",
            display: {
              xs: "none",
              sm: "flex",
            },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {options.map((option, index) => (
            <Button
              key={option.label}
              color="inherit"
              ref={(el) => (buttonRefs.current[index] = el)} // Store button reference
              sx={{
                marginRight: 2,
                "&:hover": {
                  border: `1px solid ${theme.palette.text.primary}`,
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
              xs: "flex", 
              sm: "none", 
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
