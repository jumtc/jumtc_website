"use client";

import React, { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { capsuleScrollEffect } from "../../animations/scrollEffect.js";

const projects = [
	{
		title: "Project 1",
		description: "This is a description of Project 1. It showcases our work.",
		image: "/testing2.jpg",
		link: "/project1",
	},
	{
		title: "Project 2",
		description: "This is a description of Project 2. It highlights our skills.",
		image: "/testing2.jpg",
		link: "/project2",
	},
];

export default function Projects() {
	const theme = useTheme();

	const capsuleTriggerRef = useRef(null);
	const capsuleRef = useRef(null);
	const innerScrollRef = useRef(null);

	useEffect(() => {
		capsuleScrollEffect({
			capsuleTriggerRef,
			capsuleRef,
			innerScrollRef,
		});
	}, []);

	return (
		<Box sx={{ height: "auto", width: "100vw" }}>
			{/* Capsule Trigger Section */}
			<Box
				ref={capsuleTriggerRef}
				sx={{
					width: "100vw",
					height: "100vh", // ensures enough scroll space for both animations
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{/* Capsule Container */}
				<Box
					ref={capsuleRef}
					sx={{
						width: "30vw",
						height: "20vh",
						borderRadius: "999px",
						backgroundColor: theme.palette.primary.main,
						position: "sticky",
						top: "10vh",
						zIndex: 10,
						overflow: "hidden",
						display: "flex",
						flexDirection: "column",
					}}
				>
					{/* Inner Scroll Content */}
					<Box
						ref={innerScrollRef}
						sx={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
						}}
					>
						{projects.map((project, index) => (
							<Box
								key={index}
								sx={{
									display: "flex",
									flexDirection: "row",
									width: "100%",
									height: "80vh",
									color: theme.palette.text.primary,
								}}
							>
								{/* Left: Image */}
								<Box
									sx={{
										width: "100%",
										height: "100%",
										backgroundImage: `url(${project.image})`,
										backgroundSize: "cover",
										backgroundPosition: "center",
									}}
								/>
								{/* Right: Text */}
								<Box
									sx={{
										width: "0",
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
		</Box>
	);
}
