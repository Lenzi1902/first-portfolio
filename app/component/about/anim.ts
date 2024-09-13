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

  // * ======================================== marqueee ==================================================
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

  //* ================================= location animation ===============================================
  gsap.set(".background-location", {
    scaleX: 0,
  });
  gsap.set(".text-location", {
    opacity: 0,
    y: 20,
  });
  gsap.set(".location-globe", {
    x: -170,
  });

  const locatedAnimation = gsap.timeline({
    defaults: { ease: "power4.inOut" },
    scrollTrigger: {
      trigger: ".wrapper-location",
      start: "10% bottom",
      end: "20% top",
      toggleActions: "play reverse play reverse",
    },
  });
  locatedAnimation
    .to(".location-globe", {
      duration: 1,
      x: 0,
    })
    .to(
      ".background-location",
      {
        duration: 1,
        scaleX: 1,
        transformOrigin: "left",
      },
      "-=1"
    )
    .to(
      ".text-location",
      {
        opacity: 1,
        y: 0,
        stagger: {
          amount: 1,
        },
      },
      "-=0.5"
    );
};
