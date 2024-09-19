/* eslint-disable @next/next/no-img-element */
import VideoBackgroundHover from "./VideoBackgroundHover";

const LandingPageAbout = () => {
  return (
    <div className=" md:rounded-xl xs:rounded-none col-span-12 row-span-8 relative group bg-[url('/backgroundcolorabout.jpg')]  h-[350px]">
      <div className=" w-[250px] h-[90px]  absolute top-[43%] z-[2] wrapper-location md:block xs:hidden">
        <div className=" w-full h-full bg-black absolute rounded-r-full background-location"></div>
        <div className=" relative flex items-center w-full h-full  rounded-r-full wrapper-inner-location overflow-hidden">
          <div className=" md:flex flex-col w-full xs:hidden">
            <div className=" overflow-hidden w-full">
              <p className=" text-white w-[60px] ml-5 text-location">Located</p>
            </div>
            <div className=" overflow-hidden  ">
              <p className=" text-white w-[60px] ml-5 text-location">in the</p>
            </div>
            <div className=" overflow-hidden  ">
              <p className=" text-white w-[60px] ml-5 text-location">Indonesia</p>
            </div>
          </div>
          <div className=" h-full w-[90px]  rounded-full absolute right-0">
            <video src="./globalanimatin1;1.mp4" suppressHydrationWarning={true} autoPlay muted loop className="  h-[90px] rounded-full location-globe" />
          </div>
        </div>
      </div>
      <div className="w-full h-full  flex flex-col justify-between overflow-y-hidden">
        <VideoBackgroundHover />
        <div className=" z-[1] h-full w-full relative flex justify-center items-center">
          <img src="./fotoport2.png" alt="" className=" absolute  bottom-[-30px]  h-[140%] z-[-1] my-image" />
        </div>
      </div>
      <div className="  text-white absolute lg:top-[26%] md:top-[22%] xs:top-[60%] lg:right-[4%] md:right-[-6%]  h-[150px] w-[340px] flex flex-col lg:justify-between md:justify-around xs:justify-around md:z-[1] xs:z-20">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="lg:size-7 md:size-6 xs:size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25" />
        </svg>
        <div className=" ml-3 lg:text-[30px] md:text-[25px] font-bold">
          <h1>Freelance</h1>
          <h1>Designer & Developer</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPageAbout;
