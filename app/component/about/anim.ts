import gsap from "gsap";

export const marqueeSkillStack = (element: HTMLElement) => {
  //   const skillItem = document.querySelector(".skillItem");
  //   const skills = gsap.utils.toArray(".skillItem");

  gsap.to(".skillItem", {
    duration: 90,
    ease: "none",
    x: "-=1300",
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % 1300),
    },
    repeat: -1,
    repeatRefresh: true,
  });
};
