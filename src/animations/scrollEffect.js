import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollEffect = ({ triggerRef, introRef, orbRef, aboutRef }) => {};

export const horizontalAboutScrollEffect = ({ triggerRef, horizontalRef }) => {
  if (!horizontalRef?.current) return;

  const element = horizontalRef.current;

  const totalWidth = element.scrollWidth;
  const viewportWidth = element.clientWidth;
  const scrollDistance = totalWidth - viewportWidth;

  gsap.to(element, {
    x: () => `-${scrollDistance}px`,
    ease: "none",
    scrollTrigger: {
      trigger: triggerRef.current,
      start: "top top",
      end: () => `+=${totalWidth}px`,
      scrub: 0.25,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });
};

export const capsuleScrollEffect = ({
  capsuleTriggerRef,
  capsuleRef,
  innerScrollRef,
}) => {
  if (
    !capsuleTriggerRef?.current ||
    !capsuleRef?.current ||
    !innerScrollRef?.current
  )
    return;

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: capsuleTriggerRef.current,
      start: "top top",
      end: () => `+=${innerScrollRef.current.scrollHeight + 1000}px`, // total scroll distance
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
    },
  });

  // Step 1: Capsule expands
  timeline.to(capsuleRef.current, {
    width: "100vw",
    height: "80vh",
    borderRadius: "50px",
    ease: "power2.inOut",
    duration: 1, // proportional inside timeline
  });

  // Step 2: Scroll inner content (vertical)
  timeline.to(innerScrollRef.current, {
    y: () => `-${innerScrollRef.current.scrollHeight - window.innerHeight}px`,
    ease: "none",
    duration: 2, // proportional in timeline
  });
};
