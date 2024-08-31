import gsap from "gsap";

const anim = (element: HTMLElement) => {
  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 0.7 } });
  gsap.set(".frame-7", {
    yPercent: -100,
  });
  gsap.set(".frame-9", {
    yPercent: 100,
  });
  tl.to(".frame-7", {
    yPercent: 10,
    opacity: 1,
  })
    .to(".frame-9", {
      yPercent: -10,
      opacity: 1,
    })
    .from(".text-agung-svg", {
      y: -160,
    })
    .to(
      ".text-agung-svg",
      {
        y: 0,
        stagger: {
          each: 0.3,
          from: "start",
        },
        opacity: 1,
      },
      "-=0.7"
    );
};

export default anim;
