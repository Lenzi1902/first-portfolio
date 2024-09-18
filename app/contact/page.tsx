/* eslint-disable @next/next/no-img-element */
import FormContact from "../form/FormContact";

const page = () => {
  return (
    <div className="text-white max-w-screen min-h-screen z-[-1] px-[160px] bg-[#1c1d20]">
      <div className="flex gap-10 py-[300px]">
        <div className="">
          <div className=" flex flex-col text-[50px] font-[eczar]   text-[#a19f94] font-bold ">
            <span className=" leading-tight mb-[20px]">
              Let&apos;s build something great <br /> Create a project with us today
            </span>
          </div>
          <div className="bg-[url('/backgroundcolorabout.jpg')]  rounded-3xl">
            <FormContact />
          </div>
        </div>
        <div className="w-[40%] text-black bg-[url('/backgroundcolorabout.jpg')] mt-[10%] rounded-3xl p-[30px] flex flex-col">
          <div className="w-[100px] h-[100px] rounded-full relative bg-white overflow-hidden ">
            <img src="./fotoport2.png" className=" absolute top-[-30px]" alt="" />
          </div>
          <div className="mt-[50px] flex flex-col gap-[50px]">
            <div className=" w-full font-[eczar] font-bold text-white ">
              <span className=" text-[15px] text-gray-400">CONTACT DETAILS</span>

              <div className="group  ">
                <a href="#">info@agungwicaksana.com</a>
                <div className=" border-b scale-0 group-hover:scale-[100%] duration-500 transition-all"></div>
              </div>
              <div className="group  ">
                <a href="#">+6281 946 779 368</a>
                <div className=" border-b scale-0 group-hover:scale-[100%] duration-500 transition-all"></div>
              </div>
            </div>
            <div>
              <div className=" font-[eczar] font-bold text-white ">
                <span className=" text-[15px] text-gray-400">SOCIALS</span>
                <div className="group  ">
                  <a href="#">Instagram</a>
                  <div className=" border-b scale-0 group-hover:scale-[100%] duration-500 transition-all"></div>
                </div>
                <div className="group  ">
                  <a href="#">FaceBook</a>
                  <div className=" border-b scale-0 group-hover:scale-[1] duration-500 transition-all"></div>
                </div>
                <div className="group  ">
                  <a href="#">Twitter</a>
                  <div className=" border-b scale-0 group-hover:scale-[100%] duration-500 transition-all"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
