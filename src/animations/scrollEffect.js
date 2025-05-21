import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollEffect = ({ triggerRef, introRef, orbRef, aboutRef }) => {
 
};

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
        }
    })
}
