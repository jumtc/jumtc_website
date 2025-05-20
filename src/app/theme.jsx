//? This file is responsible for setting up the theme for the application using Material-UI.
//? It imports necessary components from Material-UI, creates a theme with specific colors and typography settings, and applies it to the children components.
"use client";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import "@fontsource/orbitron"; // Importing Orbitron font
import "@fontsource/roboto"; // Importing Roboto font

const theme = createTheme({
  palette: {
    background: {
      default: "#0D1117",
    },
    primary: {
      main: "#00BFA6",
      transparent: "rgba(0, 191, 166, 0.4)",
    },
    secondary: {
      main: "#FF8F00",
    },
    surface: {
      main: "#161B22",
    },
    text: {
      primary: "#EDEDED",
      secondary: "#9CA3AF",
      tertiary: "#6C757D",
      quaternary: "#ADB5BD",
      softRed: "#BF616A",
    },
    border: {
      main: "#2D333B",
    },
  },
  typography: {
    fontFamily: "Orbitron, Roboto, sans-serif",
    fontFamily2: "Roboto, sans-serif",
    fontSize: 14,
    home: {
      fontSize: "5rem",
      fontWeight: 700,
    },
    h1: {
      fontSize: "2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  glaze: {
    textShadow1: `
      0 0 3px rgba(255, 255, 255, 0.4),
      0 0 6px rgba(255, 255, 255, 0.3),
      0 0 12px rgba(255, 255, 255, 0.2)
    `,
  },
  breakpoints: {
    values: {
      xs: 0, // Extra small devices (phones)
      sm: 600, // Small devices (tablets)
      md: 960, // Medium devices (desktops)
      lg: 1280, // Large devices (larger desktops)
      xl: 1920, // Extra large devices
    },
  },
});

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
