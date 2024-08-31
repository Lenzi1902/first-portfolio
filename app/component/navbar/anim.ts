import gsap from "gsap";

const anim = (element: HTMLElement) => {
  let logoNavbar = document.querySelector(".logo-navbar");
  const Hovertl = gsap.timeline({ defaults: { ease: "", duration: 0.7 } });
  Hovertl.pause();
  Hovertl.to(".logo-navbar", { rotateY: 180 });
  logoNavbar?.addEventListener("mouseenter", () => {
    Hovertl.play();
  });
  logoNavbar?.addEventListener("mouseleave", () => {
    Hovertl.reverse();
  });
};

export default anim;
