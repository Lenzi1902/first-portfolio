/* eslint-disable @next/next/no-img-element */
import { SkillStack } from "@/app/config/Skills-Stack-config";
import VideoBackgroundHover from "./VideoBackgroundHover";

const SkillsStack = () => {
  return (
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
  );
};

export default SkillsStack;
