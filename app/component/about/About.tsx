/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef } from "react";
import { marqueeSkillStack } from "./anim";
import MarqueeText from "./MarqueeText";
import LandingPageAbout from "./LandingPageAbout";
import SkillsStack from "./SkillsStack";

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
        <LandingPageAbout />
        <MarqueeText />
        <SkillsStack />
      </div>
    </div>
  );
};

export default About;
