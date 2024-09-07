import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const anim = (element: HTMLElement) => {
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline({
    defaults: {
      ease: "power4.inOut",
      duration: 3,
      scrollTrigger: {
        trigger: ".bottom-component",
        start: "top, 90%",
        end: "top, 80%",
        scrub: 7,
      },
    },
  });
  gsap.set(".border-bottom-footer", {
    scaleX: 0,
  });
  gsap.set(".button-contact-me", {
    yPercent: 200,
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
      yPercent: -10,
    },
    "-=2"
  );
};

export default anim;
