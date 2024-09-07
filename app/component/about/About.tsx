/* eslint-disable @next/next/no-img-element */
"use client";

import { SkillStack } from "@/app/config/Skills-Stack-config";
import { useEffect, useRef } from "react";
import { marqueeSkillStack } from "./anim";
import VideoBackgroundHover from "./VideoBackgroundHover";
import MarqueeText from "./MarqueeText";

const About = () => {
  const skillStack = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (skillStack.current) {
      marqueeSkillStack(skillStack.current);
    }
  }, []);
  return (
    <div className=" min-h-screen w-screen text-black px-[119px] py-[52px]  " ref={skillStack}>
      <div className=" h-full w-full grid grid-cols-10 grid-rows-17 gap-4">
        <div className=" rounded-xl col-span-12 row-span-8 relative group bg-[url('/backgroundcolorabout.jpg')]  h-[350px]">
          <div className=" w-[250px] h-[90px]  absolute top-[43%] z-[2]">
            <div className=" relative flex items-center w-full h-full  rounded-r-full bg-black">
              <p className=" text-white w-[60px] ml-5">Located in the Indonesia</p>
              <div className=" h-full w-[90px]  rounded-full absolute right-0">
                <video src="./globalanimatin1;1.mp4" suppressHydrationWarning={true} autoPlay muted loop className="  h-[90px] rounded-full" />
              </div>
            </div>
          </div>
          <div className="w-full h-full  flex flex-col justify-between overflow-y-hidden">
            <VideoBackgroundHover />
            <div className=" z-[1] h-full w-full relative flex justify-center items-center">
              <img src="./fotoport2.png" alt="" className=" absolute  bottom-[-30px]  h-[140%] z-[-1] my-image" />
            </div>
          </div>
          <div className="  text-white absolute top-[26%] right-[4%]  h-[150px] w-[340px] flex flex-col justify-between">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
            <div className=" ml-3 text-[30px] font-bold">
              <h1>Freelance</h1>
              <h1>Designer & Developer</h1>
            </div>
          </div>
        </div>
        <MarqueeText />
        <div className="rounded-xl col-span-12 row-span-6  relative group ba">
          <div className="  w-full h-full bg-[url('/backgroundcolorabout.jpg')]  bg-no-repeat rounded-xl flex flex-col justify-between px-[30px] py-[19px] ">
            <VideoBackgroundHover />
            <h1 className=" text-white font-bold font-[eczar] text-[25px] mb-[10px] z-10">Stack I Use</h1>
            <div className="w-full h-[100px] relative z-[3] overflow-x-hidden ">
              <div className=" z-[2] absolute h-full w-[50px] bg-gradient-to-r left-[-2px] from-[#656565] from-[27%] group-hover:opacity-0 transition-all duration-1000"></div>
              <div className="flex h-full gap-[8px] absolute z-[1] ">
                {SkillStack.map((data, index) => (
                  <div
                    className="h-full w-[100px] bg-white rounded-xl group-hover:bg-transparent flex justify-center items-center transition-all duration-1000
                skillItem"
                    key={index}
                  >
                    <img src={data.sources} alt={data.alt} className=" w-[80%] h-[80%]" />
                  </div>
                ))}
              </div>
              <div className="z-[2] right-0 absolute h-full w-[50px] bg-gradient-to-l from-[#545454] from-[27%] group-hover:opacity-0 transition-all duration-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
