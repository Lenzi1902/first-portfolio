import gsap from "gsap";

const preloadAnimation = (element: HTMLElement) => {
  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 0.7 } });
  tl.to(".svg-container #Layer_3_start", {
    scale: 1,
    opacity: 1,
    duration: 0.5,
  })
    .to(".svg-container #Layer_3_start", {
      opacity: 0,
      duration: 0.5,
    })
    .to(".svg-container #Layer_4_start", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    })
    .to(".svg-container #Layer_4_start", {
      opacity: 0,
      duration: 0.5,
    })
    .to(".svg-container #Layer_5_start", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    })
    .to(".svg-container #Layer_5_start", {
      opacity: 0,
      duration: 0.5,
    })
    .to(".svg-container #Layer_6_start", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    })
    .to(".svg-container #Layer_6_start", {
      opacity: 0,
      duration: 0.5,
    })
    .to(".svg-container #Layer_7_start", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
    })
    .to(".svg-container #Layer_7_start", {
      opacity: 0,
      duration: 0.5,
    })
    .to(".svg-container", {
      position: "absolute",
      duration: 0.8,
    })
    //svg2
    .to(".svg-container-2 ", {
      opacity: 1,
      duration: 1.2,
    })
    .to(".svg-container-2 #Layer_11_ending", {
      opacity: 1,
      duration: 0.5,
    })
    .to(".svg-container-2 #Layer_8_ending", {
      opacity: 1,
      duration: 0.5,
    })
    .to(".svg-container-2 #Layer_9_ending", {
      opacity: 1,
      duration: 0.5,
    })
    .to(".svg-container-2 #Layer_10_ending", {
      opacity: 1,
      duration: 0.5,
    })
    .to(".svg-container-2 #Layer_12_ending", {
      opacity: 1,
      x: 480,
      duration: 1,
    })
    //skew ending
    .to(
      ".svg-container-2 #Layer_11_ending,#Layer_10_ending,#Layer_9_ending,#Layer_8_ending",
      {
        opacity: 0,
        duration: 0.3,
        x: 50,
      },
      "-=0.7"
    )
    .to(
      ".svg-container-2 #Layer_3_ending,#Layer_4_ending,#Layer_5_ending,#Layer_6_ending,#Layer_7_ending,#Layer_8_ending",
      {
        opacity: 0,
        skewX: 30,
        duration: 0.3,
      },
      "-=0.7"
    )
    .to(".svg-container-2 #Layer_12_ending", {
      opacity: 0,
      duration: 1,
    })
    .to(".container-all-svg", {
      scaleY: 0,
      transformOrigin: "top",
    });
};

export default preloadAnimation;
