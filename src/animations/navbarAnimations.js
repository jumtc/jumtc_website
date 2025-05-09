//? This file is for animations that are used in the navbar
import gsap from "gsap";


//* Adding hover animations to navbar buttons
export const registerNavbarSlidingHoverAnimation = (buttonRefs) => {
  buttonRefs.forEach((button) => {
    const hoverAnimation = gsap.to(button, {
      x: 5,
      duration: 0.3,
      ease: "power2.out",
      paused: true,
    });

    button.addEventListener("mouseenter", () => {
      hoverAnimation.play();
    });
    button.addEventListener("mouseleave", () => {
      hoverAnimation.reverse();
    });
  });
};

//todo To add active animations to navbar buttons
