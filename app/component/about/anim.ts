import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export const marqueeSkillStack = (element: HTMLElement) => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.to(".skillItem", {
    duration: 90,
    ease: "none",
    x: "-=2500",
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % 2500),
    },
    repeat: -1,
    repeatRefresh: true,
  });
  let marquee = gsap.timeline({
    scrollTrigger: {
      trigger: ".marquee",
      start: "-40% bottom",
      scrub: 10,
    },
  });

  marquee.to(".marquee_inner", {
    duration: 5,
    xPercent: -20,
  });

  let myImage = gsap.timeline({
    defaults: { ease: "power4.inOut" },
    scrollTrigger: {
      trigger: ".my-image",
      start: "90%, bottom",
      scrub: 2,
    },
  });
  myImage.to(".my-image", {
    duration: 5,
    yPercent: 15,
  });
};
