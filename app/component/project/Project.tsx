import { myProjects } from "@/app/config/Projects-List-data-config";
import { useEffect, useRef } from "react";
import anim from "./anim";
import gsap from "gsap";
import StackProject from "./StackProject";

/* eslint-disable @next/next/no-img-element */
const Project = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const arrowProjects = useRef<HTMLDivElement>(null);
  const universalRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    const arrow = gsap.fromTo(
      arrowProjects.current,
      {
        rotation: 0,
      },
      {
        rotation: -180,
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
        },
      }
    );

    if (universalRef.current) {
      anim(universalRef.current);
    }
    return () => {
      pin.kill();
      arrow.kill();
    };
  }, []);

  return (
    <div className="text-white scroll-outer overflow-hidden mt-[100px] relative">
      <div ref={triggerRef}>
        <div className=" font-[eczar] text-[70px] flex items-center gap-5 text-[#a19f94] ml-[120px]">
          PROJECTS
          <div ref={arrowProjects}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-14">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
            </svg>
          </div>
        </div>
        <div className="scroll-inner h-[100vh] w-[400vw] flex flex-row relative" ref={sectionRef}>
          {myProjects.map((project, index) => (
            <section key={index} className="  section-content h-[100vh] w-[100vw] flex justify-center items-center">
              <div ref={universalRef}>
                <h1 className=" text-[50px] ml-[120px] font-[eczar]">{project.name}</h1>
                <div className=" flex items-center">
                  <img src={project.image} alt={project.name} className=" w-[500px] h-auto" />
                  <StackProject projectDescription={project.description} projectStack={project.projectStack} />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
