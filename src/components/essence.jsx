//? this section is about the essence of the company, what we do, and how we do it
"use client";
//?importing important libraries
import { Box, Typography, Card, CardContent, CardMedia, useTheme } from "@mui/material";
import { useRef, useEffect } from "react";
import gsap from "gsap";
//? importing details
import about from "../utils/aboutdetails.js";
//? importing animation compoenent
import { cardHoverAnimation } from "../animations/hoverAnimations.js";

//? This component is to show us about the essense of our club JUMTC
export default function WhatWeDo({ aboutRef, horizontalRef }) {
	//* importing the theme
	const theme = useTheme();
	//* reference for card hover animarion
	const cardRefs = useRef([]);
	return (
		<Box
			ref={aboutRef}
			sx={{
				minHeight: "100vh",
				height: "auto",
				bgcolor: theme.palette.background.default,
				color: theme.palette.text.primary,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				p: 4,
			}}
		>
			<Typography variant="h3" gutterBottom fontWeight="bold" sx={{ mt: 5, position: "relative" }}>
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
				{about.map((item, index) => {
					return (
						<Card
							key={index}
							ref={(el) => (cardRefs.current[index] = el)}
							onMouseMove={(e) => {
								cardHoverAnimation({
									cardRef: cardRefs.current[index],
									e,
								});
							}}
							onMouseLeave={() => {
								gsap.to(cardRefs.current[index], {
									rotateX: 0,
									rotateY: 0,
									scale: 1,
									ease: "power3.out",
									duration: 0.4,
								});
							}}
							sx={{
								width: "30vw",
								flexShrink: 0,
								mt: 4,
								bgcolor: theme.palette.surface.main,
								color: theme.palette.text.primary,
								borderRadius: "24px 0",
								mx: 3,
								transformStyle: "preserve-3d",
								perspective: "1000px",
								transition: "transform 0.2s ease",
								// transform: `rotateY(${rotateY}deg)`,
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
					);
				})}
			</Box>
		</Box>
	);
}
