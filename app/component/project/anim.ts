import gsap from "gsap";
const anim = (element: HTMLElement) => {
  gsap.to(".wrapper-stack", {
    repeat: -1,
    duration: 500,
    x: "-=500",
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % 500),
    },
    repeatRefresh: true,
  });
};

export default anim;
