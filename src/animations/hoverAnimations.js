import gsap from "gsap";

//? Hover Animation for the 3d tilt on cards on mouse hover 
export const cardHoverAnimation = ({cardRef , e}) => {
    const card = cardRef;
    const rect = card.getBoundingClientRect();

    //* Calculating the mouse position inside the card relative the card co ordinate
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    //* Calculating the centre of the card
    const centreX = rect.width / 2;
    const centreY = rect.height / 2;

    const maxRotation = 20; // maximum rotation in degrees

    //* Calculating the rotation values of the card
    const rotateX = ((y - centreY) / centreY) * maxRotation;
    const rotateY = ((x - centreX) / centreX) * -maxRotation;

    //* Applying the rotation to the card using gsap
    gsap.to(card, {
        rotateX,
        rotateY,
        scale: 1.04,
        ease: "power2.out",
        duration: 0.3,
        transformPerspective: 1000,
    })
}