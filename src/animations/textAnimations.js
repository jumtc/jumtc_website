import { Scale } from "@mui/icons-material";
import gsap from "gsap";

/**
 * Applies a join text animation to elements using GSAP timeline.
 * @param {string | string[]} target - The class or ID of the target element(s) (e.g., ".className" or "#idName").
 * @param {Object} options - Animation options (e.g., duration, delay, etc.).
 */

//? This function provides a sliding animation for the text elements.
export const slidingTextAnimation = (target, options) => {
	//* Default animation options
	const defaultOptions = {
		duration: 1,
		delay: 0.5,
		stagger: 0.2,
		ease: "power2.out",
		direction: "left",
		...options,
	};

	//* determining initial position
	const initialPostition = {
		left: { x: -100, y: 0 },
		right: { x: 100, y: 0 },
		top: { x: 0, y: -100 },
		bottom: { x: 0, y: 100 },
	}[defaultOptions.direction];

	//* Applying animation to each target
	gsap.fromTo(
		target,
		{ opacity: 0, ...initialPostition },
		{
			opacity: 1,
			x: 0,
			y: 0,
			duration: defaultOptions.duration,
			delay: defaultOptions.delay,
			stagger: defaultOptions.stagger,
			ease: defaultOptions.ease,
		},
	);
};

//? This function provides a typing text animation for the text elements.
export const typingTextAnimation = (target, options) => {
	//* Default animation options
	const defaultOptions = {
		duration: 1,
		delay: 0.5,
		stagger: 0.1,
		ease: "power2.out",
		...options,
	};

	//* Selecting text from the document
	const text = document.querySelector(target).textContent;
	const letters = text.split("");
	document.querySelector(target).textContent = "";

	//* Setting child with details and default visibility
	letters.forEach((char, i) => {
		const span = document.createElement("span");
		span.textContent = char;
		span.style.opacity = 0;
		document.querySelector(target).appendChild(span);
	});

	//* gsap animation
	gsap.to(`${target} span`, {
		opacity: 1,
		duration: defaultOptions.duration,
		delay: defaultOptions.delay,
		stagger: defaultOptions.stagger,
		ease: defaultOptions.ease,
	});
};

//? This function provides a dropping text animation
export const droppingTextAnimation = (target, options) => {
	//* Default animation options
	const defaultOptions = {
		duration: 1, // Duration of the animation
		delay: 0.5, // Delay before the animation starts
		stagger: 0.2, // Stagger between multiple elements
		scale: 2, // Initial scale of the text
		ease: "power2.out", // Easing function
		...options,
	};

	//* Apply GSAP animation
	gsap.fromTo(
		target,
		{
			opacity: 0, // Start with invisible text
			scale: defaultOptions.scale, // Start with smaller scale
			y: -50, // Start slightly above
		},
		{
			opacity: 1, // Fade in
			scale: 1, // Scale to normal size
			y: 0, // Drop to its original position
			duration: defaultOptions.duration,
			delay: defaultOptions.delay,
			stagger: defaultOptions.stagger,
			ease: defaultOptions.ease,
		},
	);
};
