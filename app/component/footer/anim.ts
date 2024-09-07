import gsap from "gsap";

const anim = (element: HTMLElement) => {
  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 3 } });
  gsap.set(".border-bottom-footer", {
    scaleX: 0,
  });
  gsap.set(".button-contact-me", {
    opacity: 0,
  });
  tl.to(".border-bottom-footer", {
    scaleX: "100%",
  }).to(
    ".button-contact-me",
    {
      opacity: 1,
      ease: "elastic.inOut(1,0.5)",
      yoyo: true,
      yPercent: -250,
    },
    "-=2"
  );
};

export default anim;
