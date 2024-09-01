/* eslint-disable @next/next/no-img-element */
"use client";

import { SkillStack } from "@/app/config/Skills-Stack-config";
import { useEffect, useRef } from "react";
import { marqueeSkillStack } from "./anim";

const About = () => {
  const skillStack = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (skillStack.current) {
      marqueeSkillStack(skillStack.current);
    }
  }, []);
  return (
    //! semuanya belum di isi hover about background
    <div className=" h-screen w-screen text-black px-[119px] py-[52px]">
      <div className=" h-full w-full grid grid-cols-10 grid-rows-12 gap-4">
        <div className="bg-[#232323] rounded-xl col-span-3 row-span-8 p-[30px] flex flex-col justify-between relative group ">
          <video src="./wavelinebackground.mp4" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-[1] transition-all duration-1000" />
          <div className=" z-[1]">
            <img src="./fotoprofileportfolio.svg" alt="" className=" w-[85px] h-[85px]" />
            <p className=" font-[eczar] text-white font-bold text-[25px]">My name is Agung, I’m a Fullstack Web Developer and living in Indonesia</p>
          </div>
        </div>
        <div className="bg-[#232323] rounded-xl col-span-2 row-span-4 group relative">
          <video src="./wavelinebackground.mp4" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-[1] transition-all duration-1000" />
        </div>
        <div className="bg-[#232323] rounded-xl col-span-2 row-span-4 group relative">
          <video src="./wavelinebackground.mp4" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-[1] transition-all duration-1000" />
        </div>
        <div className="bg-[#232323] rounded-xl col-span-3 row-span-10 group relative">
          <video src="./wavelinebackground.mp4" autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover rounded-xl opacity-0 group-hover:opacity-[1] transition-all duration-1000" />
        </div>
        <div className="bg-[#232323] rounded-xl col-span-4 row-span-6 flex flex-col justify-between px-[30px] py-[19px]">
          <h1 className=" text-white font-bold font-[eczar] text-[25px] mb-[10px]">Stack I Use</h1>
          <div className="w-full h-[100px] relative z-[3] overflow-x-hidden ">
            <div className=" z-[2] absolute h-full w-[50px] bg-gradient-to-r from-[#232323] from-[27%] to-[rgba(36,34,34,84%)]"></div>
            <div className="flex h-full gap-[8px] absolute z-[1] container-stack" ref={skillStack}>
              {SkillStack.map((data, index) => (
                <div
                  className="h-full w-[100px] bg-white rounded-xl flex justify-center items-center 
                skillItem"
                  key={index}
                >
                  <img src={data.sources} alt={data.alt} className=" w-[80%] h-[80%]" />
                </div>
              ))}
            </div>
            <div className="z-[2] right-0 absolute h-full w-[50px] bg-gradient-to-l from-[#232323] from-[27%] to-[rgba(36,34,34,84%)]"></div>
          </div>
        </div>
        <div className="bg-[#232323] rounded-xl col-span-3 row-span-6">6</div>
        <div className="bg-[#232323] rounded-xl col-span-3 row-span-4">7</div>
        <div className="bg-[#232323] rounded-xl col-span-4 row-span-4">8</div>
      </div>
    </div>
  );
};

export default About;
