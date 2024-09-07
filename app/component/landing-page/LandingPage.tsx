"use client";
import { useEffect, useRef } from "react";
import anim from "./anim";
import Link from "next/link";

const LandingPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      anim(ref.current);
    }
  }, []);
  return (
    <div ref={ref} className="flex flex-col items-center font-[eczar]  text-white h-screen w-screen bg-[url('/backgroundcolorlandingpage.png')] bg-cover bg-center bg-no-repeat overflow-y-hidden">
      <svg width="358" height="150" viewBox="0 0 358 150" fill="none" xmlns="http://www.w3.org/2000/svg" className=" mt-[120px] frame-7  opacity-0">
        <line y1="0.5" x2="358" y2="0.5" stroke="white" />
        <line x1="178.5" x2="178.5" y2="150" stroke="white" />
      </svg>
      <div className=" text-[16px] p-[20px] font-bold mt-[34px] ">FULLSTACK WEB DEVELOPER</div>
      <svg width="455" height="157" viewBox="0 0 455 157" fill="none" xmlns="http://www.w3.org/2000/svg" className=" w-[454] mb-[10px]">
        <path
          className="text-agung-svg"
          d="M0.0820312 155.531H42.2489C42.2489 155.531 35.2211 149.906 35.2211 144.281C35.2211 138.656 39.4378 121.781 39.4378 121.781H65.7499L70.3602 144.281C70.3602 144.281 66.8463 154.125 62.981 155.531C59.1157 156.937 106.905 155.531 106.905 155.531C106.905 155.531 98.4715 151.312 94.2548 130.219C90.0381 109.125 70.3602 19.125 70.3602 19.125C70.3602 19.125 68.9547 13.5 71.7658 9.28125C74.5769 5.0625 78.7936 0.84375 78.7936 0.84375H28.5869C28.5869 0.84375 39.4378 6.46875 36.6267 19.125C33.8156 31.7812 12.7321 137.25 12.7321 137.25C12.7321 137.25 7.10985 151.312 0.0820312 155.531Z"
          fill="url(#paint0_linear_35_37)"
        />
        <path d="M53.4934 55.8L45.06 96.4688H62.6296L53.4934 55.8Z" fill="black" />
        <path
          className="text-agung-svg"
          d="M101.283 28.9688V126C101.283 126 108.31 158.344 142.044 156.938C175.777 155.531 179.994 134.438 179.994 134.438V79.9453L185.616 72.5625V69.75H179.994V71.1562H140.638L133.611 68.3438V69.75C133.611 69.75 139.233 73.9688 139.233 83.8125C139.233 93.6562 139.233 92.25 139.233 92.25L133.611 102.094L149.072 96.4688H154.694V120.375C154.694 120.375 153.288 130.219 140.638 130.219C127.988 130.219 126.583 120.375 126.583 120.375V36C126.583 36 130.799 27.5625 140.638 27.5625C150.477 27.5625 154.694 36 154.694 36V47.25L147.666 58.5L157.505 54.2812H177.183L182.805 55.6875L179.994 51.4688V28.9688C179.994 28.9688 174.372 0.84375 140.638 0.84375C106.905 0.84375 101.283 28.9688 101.283 28.9688Z"
          fill="url(#paint1_linear_35_37)"
        />
        <path
          className="text-agung-svg"
          d="M180.655 0.84375C180.655 0.84375 189.833 7.875 189.833 20.5313C189.833 33.1875 189.833 128.813 189.833 128.813C189.833 128.813 195.287 157.022 229.807 156.98C264.328 156.938 268.545 128.813 268.545 128.813C268.545 89.9016 268.545 51.0047 268.545 12.0938C270.414 9.74531 272.297 7.41094 274.167 5.0625V0.492188H235.865L243.244 12.0938V121.781C243.244 121.781 240.433 130.219 229.189 130.219C217.944 130.219 215.133 121.781 215.133 121.781V12.0938L224.269 0.492188L180.655 0.84375Z"
          fill="url(#paint2_linear_35_37)"
        />
        <path
          className="text-agung-svg"
          d="M271.356 155.531L279.789 141.469V12.0937L274.87 4.4437V1.01245H304.921L305.089 5.06246L334.606 85.2187V10.6875L325.737 1.01245H370.799C370.799 1.01245 358.585 11.8265 358.543 18.2812L358.501 141.469C358.501 141.469 364.123 154.125 369.745 155.531C375.368 156.937 334.606 155.531 334.606 155.531V149.906L305.089 73.9687H303.684V144.281L310.712 155.531H271.356Z"
          fill="url(#paint3_linear_35_37)"
        />
        <path
          className="text-agung-svg"
          d="M369.745 28.9688V126C369.745 126 376.773 158.344 410.507 156.938C444.24 155.531 448.457 134.438 448.457 134.438V79.9453L454.079 72.5625V69.75H448.457V71.1562H409.101L402.073 68.3438V69.75C402.073 69.75 407.695 73.9688 407.695 83.8125C407.695 93.6562 407.695 92.25 407.695 92.25L402.073 102.094L417.534 96.4688H423.157V120.375C423.157 120.375 421.751 130.219 409.101 130.219C396.451 130.219 395.045 120.375 395.045 120.375V36C395.045 36 399.262 27.5625 409.101 27.5625C418.94 27.5625 423.157 36 423.157 36V47.25L416.129 58.5L425.968 54.2812H445.646L451.268 55.6875L448.457 51.4688V28.9688C448.457 28.9688 442.835 0.84375 409.101 0.84375C375.367 0.84375 369.745 28.9688 369.745 28.9688Z"
          fill="url(#paint4_linear_35_37)"
        />
        <defs>
          <linearGradient id="paint0_linear_35_37" x1="53.4935" y1="0.84375" x2="53.4935" y2="156.156" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8C8C8" />
            <stop offset="0.815" stopColor="#383838" />
          </linearGradient>
          <linearGradient id="paint1_linear_35_37" x1="143.45" y1="0.84375" x2="143.45" y2="156.982" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8C8C8" />
            <stop offset="0.815" stopColor="#383838" />
          </linearGradient>
          <linearGradient id="paint2_linear_35_37" x1="227.411" y1="0.492187" x2="227.411" y2="156.98" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8C8C8" />
            <stop offset="0.815" stopColor="#383838" />
          </linearGradient>
          <linearGradient id="paint3_linear_35_37" x1="321.078" y1="1.01245" x2="321.078" y2="156.156" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8C8C8" />
            <stop offset="0.815" stopColor="#383838" />
          </linearGradient>
          <linearGradient id="paint4_linear_35_37" x1="411.912" y1="0.84375" x2="411.912" y2="156.982" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8C8C8" />
            <stop offset="0.815" stopColor="#383838" />
          </linearGradient>
        </defs>
      </svg>
      <p className=" text-[17px] w-[390px] text-center mb-[57px] text-[#585858]">I’m an Indonesian Fullstack web developer, helping brands stand out in the digital era. Together, we’ll set new standards. No nonsense, always at the forefront of innovation.</p>
      <Link href={"/about"} className="w-[194px] h-[54px] flex items-center justify-center rounded-full bg-gradient-to-t from-[#181818] to-[#333333] text-[#a19f94] text-[20px] font-bold">
        About me
      </Link>
      <svg width="358" height="108" viewBox="0 0 358 108" fill="none" xmlns="http://www.w3.org/2000/svg" className=" mt-[30px] frame-9 opacity-0">
        <line x1="357.996" y1="107.503" x2="-0.00402832" y2="107.503" stroke="white" />
        <line x1="178.5" y1="94" x2="178.5" stroke="white" />
      </svg>
    </div>
  );
};

export default LandingPage;
