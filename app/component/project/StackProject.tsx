import { useEffect, useRef } from "react";
import anim from "./anim";

/* eslint-disable @next/next/no-img-element */
type Props = {
  projectDescription: string;
  projectStack: [{ sources: string; alt: string }];
};

const StackProject = ({ projectDescription, projectStack }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      anim(ref.current);
    }
  }, []);
  return (
    <div className=" w-[500px] flex flex-col gap-5">
      <p>{projectDescription}</p>
      <div className=" w-[500px] h-[80px] overflow-hidden relative z-[10]" ref={ref}>
        <div className=" bg-gradient-to-r from-black from-[25%] absolute w-[30px] h-full  z-[2]"></div>
        <div className=" flex items-center  absolute z-[1] gap-2 h-[80px] wrapper-stack">
          {projectStack.map((stack, index) => (
            <div key={index} className=" bg-white h-[50px] w-[40px] flex justify-center items-center rounded-xl">
              <img src={stack.sources} alt={stack.alt} className="w-[60%]" />
            </div>
          ))}
        </div>
        <div className=" bg-gradient-to-l from-black from-[25%] absolute w-[30px] h-full  right-0  z-[2]"></div>
      </div>
    </div>
  );
};

export default StackProject;
