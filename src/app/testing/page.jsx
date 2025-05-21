//? this section is about the essence of the company, what we do, and how we do it
"use client";
//?importing important libraries
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  useTheme,
} from "@mui/material";
import { useRef, useEffect } from "react"; 
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


//? importing details
import about from "../../utils/aboutdetails.js";

export default function testing() {
  const theme = useTheme();

  const aboutRef = useRef(null);
  const horizontalRef = useRef(null);

  useEffect(() => {
    const element = horizontalRef.current;
    const totalWidth = element.scrollWidth;
    const viewportWidth = element.clientWidth;
    const scrollDistance = totalWidth - viewportWidth;

    gsap.to(element, {
      x: () => `-${scrollDistance}px`,
      ease: "none",
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top top",
        end: () => `+=${totalWidth}px`,
        scrub: 0.25,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });
  })

  return (
    <Box
      ref={aboutRef}
      sx={{
        minHeight: "100vh",
        height: "auto",
        bgcolor: theme.palette.background.default,
        // bgcolor:"red",
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

      <Box
        ref={horizontalRef}
        sx={{
          display: "flex",
          height: "auto",
          width: "100vw",
          position: "relative",
        }}
      >
        {/* Media Card */}
        {about.map((item, index) => (
          <Card
            key={index}
            sx={{
              width: "30vw",
              flexShrink: 0,
              mt: 4,
              bgcolor: theme.palette.surface.main,
              color: theme.palette.text.primary,
              borderRadius: "24px 0",
              mx: 3,
            }}
          >
            <CardMedia
              component="img"
              height="300px"
              image="/jumtclogo.png" // Replace with your image path
              alt="Card Image"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

