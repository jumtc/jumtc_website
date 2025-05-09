import gsap from "gsap";

//* Staggered grid animation
export const staggerGridAnimation = (gridItems) => {
  gsap.fromTo(
    gridItems,
    {
      opacity: 0,
      y: 50, // Start slightly below
    },
    {
      opacity: 1,
      y: 0, // Move to original position
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2, // Stagger each item's animation by 0.2 seconds
    }
  );
};