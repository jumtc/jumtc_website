// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export const scrollEffect = ({ triggerRef, introRef, orbRef, aboutRef }) => {
//   // Reset all
//   gsap.set([introRef.current, orbRef?.current, aboutRef.current], {
//     clearProps: "all",
//   });

//   // 1. Zoom in Mechatronics Club text
//   gsap.to(introRef.current, {
//     scale: 2.5,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: triggerRef.current,
//       start: "top top",
//       end: "+=60%",
//       scrub: 0.25,
//       pin: true,
//     },
//   });

//   gsap.fromTo(
//     aboutRef.current,
//     {
//       opacity: 0,
//       scale: 0,
//       pointerEvents: "none",
//     },
//     {
//       opacity: 1,
//       scale: 1,
//       pointerEvents: "auto",
//       scrollTrigger: {
//         trigger: aboutRef.current,
//         start: "top top",
//         end: "+=100%",
//         scrub: true,
//       },
//     }
//   );
// };
