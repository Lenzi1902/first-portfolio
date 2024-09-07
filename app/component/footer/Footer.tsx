"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";
import anim from "./anim";
import GsapMagnetic from "@/app/common/GsapMagnetic";

const Footer = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      anim(ref.current);
    }
  }, []);
  return (
    <div className=" w-screen h-screen text-white flex flex-col items-center font-[eczar] gap-[300px] mt-[218px] overflow-x-hidden" ref={ref}>
      <h1 className=" text-[55px] text-center w-[925px]">Wrestling with code late into the night,weaving solutions until the break of dawn</h1>
      <div className=" relative bottom-component">
        <div className="  w-[1309px] ">
          <div className=" flex justify-between mb-[20px]">
            <GsapMagnetic>
              <a href="#" className=" border border-white rounded-full w-[458px] h-[43px] flex justify-center items-center text-[24px]">
                contact@agungwicaksana.com
              </a>
            </GsapMagnetic>
            <div className=" flex gap-[33px]">
              <GsapMagnetic>
                <a href={"#"}>
                  <svg width="56" height="51" viewBox="0 0 56 51" fill="none">
                    <g filter="url(#filter0_d_29_116)">
                      <rect x="4.72742" y="0.88562" width="46.5455" height="41.1429" rx="20.5714" fill="white" />
                      <path
                        d="M36.4058 11.3664C35.8653 11.1785 35.0794 10.9688 33.6677 10.913L39.8741 26.4776C39.9413 25.1618 39.9579 24.7647 39.9579 21.4636C39.9579 18.1625 39.9413 17.7654 39.8741 16.4496C39.8098 15.1787 39.5612 14.4685 39.3515 13.9833L38.8933 14.181L39.3514 13.983C39.3514 13.9831 39.3514 13.9831 39.3515 13.9832C39.071 13.3332 38.7207 12.8624 38.1813 12.3856C37.6403 11.9074 37.1162 11.6112 36.4058 11.3664ZM36.4058 11.3664C36.4061 11.3665 36.4063 11.3665 36.4065 11.3666L36.2424 11.8389L36.4053 11.3662C36.4054 11.3662 36.4056 11.3663 36.4058 11.3664ZM28.0039 10.839C31.7374 10.839 32.1831 10.8538 33.6675 10.9129L28.0039 10.839ZM28.0039 10.839C24.2781 10.839 23.8248 10.8488 22.3394 10.913M28.0039 10.839L22.3394 10.913M39.3495 28.9484C39.0652 29.5928 38.7226 30.0631 38.1813 30.5416C37.6419 31.0184 37.1175 31.3209 36.4023 31.562L39.3495 28.9484ZM39.3495 28.9484C39.568 28.4573 39.81 27.7454 39.8741 26.4778L39.3495 28.9484ZM16.6582 13.9788C16.4398 14.47 16.1978 15.1819 16.1337 16.4493L16.6582 13.9788ZM16.6582 13.9788C16.9425 13.3344 17.2851 12.8641 17.8265 12.3856C18.3659 11.9088 18.8902 11.6063 19.6054 11.3652L16.6582 13.9788ZM22.3394 10.913C20.9253 10.969 20.1411 11.1843 19.6057 11.3651L22.3394 10.913ZM19.0182 10.2341L19.0175 10.2343C18.1545 10.5284 17.4373 10.923 16.7147 11.5618C15.995 12.1979 15.56 12.8293 15.2275 13.5749C14.9106 14.2984 14.6846 15.1348 14.6209 16.3971L14.6209 16.3972C14.555 17.698 14.5384 18.1097 14.5384 21.4587C14.5384 24.8076 14.555 25.2194 14.6209 26.5251L19.0182 10.2341ZM19.0182 10.2341C19.8541 9.94778 20.8201 9.74444 22.2633 9.68732L19.0182 10.2341ZM15.2285 29.3496C15.5538 30.0955 15.9925 30.7221 16.7147 31.3605C17.4354 31.9975 18.1579 32.3885 19.0195 32.6886C19.855 32.9747 20.8207 33.1779 22.2688 33.235C23.7505 33.2934 24.2141 33.3081 28.0094 33.3081C31.8048 33.3081 32.2684 33.2934 33.75 33.235M15.2285 29.3496L37.0014 32.6879C36.1593 32.9746 35.1929 33.1778 33.75 33.235M15.2285 29.3496C14.9107 28.6201 14.6846 27.783 14.6209 26.5252L15.2285 29.3496ZM33.75 33.235L33.7697 33.7346L33.7499 33.235C33.75 33.235 33.75 33.235 33.75 33.235ZM33.6278 11.9122L33.628 11.9122C34.9432 11.9642 35.6319 12.156 36.0782 12.3112L36.0795 12.3116C36.6772 12.5176 37.0844 12.7507 37.519 13.1348C37.9553 13.5205 38.2148 13.8729 38.4333 14.3794L38.4335 14.3797C38.6007 14.7668 38.8177 15.3601 38.8754 16.5001L38.8754 16.5003C38.9413 17.7914 38.9579 18.1688 38.9579 21.4636C38.9579 24.7584 38.9413 25.1358 38.8754 26.4269L38.8754 26.4271C38.8176 27.5699 38.6051 28.1615 38.4356 28.5426L38.4349 28.5441C38.2093 29.0558 37.9532 29.4086 37.519 29.7923C37.0827 30.178 36.6757 30.4145 36.0826 30.6145L36.0824 30.6146C35.631 30.767 34.9408 30.9631 33.628 31.015L33.6278 31.015C32.1629 31.0734 31.7325 31.0881 28.0039 31.0881C24.2753 31.0881 23.8449 31.0734 22.38 31.015L22.3798 31.015C21.0645 30.963 20.3759 30.7711 19.9296 30.616L19.9283 30.6156C19.3306 30.4096 18.9234 30.1765 18.4888 29.7923C18.0525 29.4067 17.793 29.0543 17.5744 28.5477L17.5743 28.5474C17.407 28.1604 17.19 27.5671 17.1324 26.4271L17.1324 26.4269C17.0665 25.1358 17.0499 24.7584 17.0499 21.4636C17.0499 18.1688 17.0665 17.7914 17.1324 16.5003L17.1324 16.5001C17.1902 15.3572 17.4026 14.7657 17.5722 14.3846L17.5728 14.3831C17.7985 13.8714 18.0546 13.5186 18.4888 13.1348C18.9251 12.7492 19.332 12.5126 19.9251 12.3127L19.9254 12.3126C20.3767 12.1602 21.0669 11.9641 22.3798 11.9122L22.3816 11.9121C23.8448 11.8489 24.2792 11.839 28.0039 11.839C31.7325 11.839 32.1629 11.8537 33.6278 11.9122ZM16.0499 21.4636C16.0499 24.7647 16.0665 25.1618 16.1337 26.4776V16.4496C16.0665 17.7654 16.0499 18.1625 16.0499 21.4636ZM22.2634 9.68731C23.7449 9.62889 24.2141 9.6142 28.0039 9.6142C31.7928 9.6142 32.2633 9.62888 33.7509 9.68245C35.1986 9.7396 36.1641 9.94277 36.9995 10.2288C37.861 10.5289 38.5835 10.9198 39.3042 11.5569C40.0264 12.1952 40.465 12.8219 40.7903 13.5678C41.1082 14.2973 41.3342 15.1345 41.3979 16.3923C41.4638 17.698 41.4805 18.1049 41.4805 21.4587C41.4805 24.8126 41.4638 25.2194 41.3979 26.5252C41.3342 27.7874 41.1083 28.6238 40.7914 29.3472C40.4589 30.0929 40.024 30.7243 39.3042 31.3605C38.5816 31.9993 37.8644 32.3938 37.0016 32.6879L22.2634 9.68731Z"
                        fill="white"
                        stroke="black"
                      />
                      <path
                        d="M28.0038 15.1223C24.0454 15.1223 20.8298 17.9597 20.8298 21.4636C20.8298 24.9675 24.0398 27.8049 28.0038 27.8049C31.9678 27.8049 35.1779 24.9675 35.1779 21.4636C35.1779 17.9597 31.9678 15.1223 28.0038 15.1223ZM28.0038 25.5751C25.4314 25.5751 23.3468 23.7325 23.3468 21.4587C23.3468 19.1848 25.4314 17.3422 28.0038 17.3422C30.5763 17.3422 32.6609 19.1848 32.6609 21.4587C32.6609 23.7325 30.5763 25.5751 28.0038 25.5751Z"
                        fill="black"
                      />
                      <path d="M35.4606 16.3474C36.3853 16.3474 37.1349 15.6848 37.1349 14.8674C37.1349 14.0501 36.3853 13.3875 35.4606 13.3875C34.5359 13.3875 33.7863 14.0501 33.7863 14.8674C33.7863 15.6848 34.5359 16.3474 35.4606 16.3474Z" fill="black" />
                    </g>
                    <defs>
                      <filter id="filter0_d_29_116" x="0.727417" y="0.88562" width="54.5455" height="49.1429" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_29_116" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_29_116" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </a>
              </GsapMagnetic>
              <GsapMagnetic>
                <a href={"#"}>
                  <svg width="48" height="43" viewBox="0 0 48 43" fill="none">
                    <rect x="0.854919" y="0.885773" width="46.5455" height="41.1429" rx="20.5714" fill="white" />
                    <path
                      d="M35.0379 10.1429H13.2174C12.7162 10.1429 12.2355 10.3189 11.8811 10.6322C11.5267 10.9455 11.3276 11.3703 11.3276 11.8134V31.1011C11.3276 31.5441 11.5267 31.969 11.8811 32.2823C12.2355 32.5955 12.7162 32.7715 13.2174 32.7715H35.0379C35.5391 32.7715 36.0197 32.5955 36.3741 32.2823C36.7285 31.969 36.9276 31.5441 36.9276 31.1011V11.8134C36.9276 11.3703 36.7285 10.9455 36.3741 10.6322C36.0197 10.3189 35.5391 10.1429 35.0379 10.1429ZM18.9579 29.4197H15.109V18.6129H18.9579V29.4197ZM17.0307 17.1154C16.5942 17.1132 16.1681 16.9968 15.8063 16.7807C15.4445 16.5647 15.1632 16.2588 14.9979 15.9016C14.8326 15.5444 14.7907 15.152 14.8775 14.7737C14.9643 14.3955 15.176 14.0485 15.4857 13.7765C15.7954 13.5045 16.1893 13.3197 16.6177 13.2454C17.0462 13.1711 17.4899 13.2106 17.8929 13.359C18.2959 13.5074 18.6402 13.758 18.8823 14.0792C19.1243 14.4004 19.2533 14.7777 19.253 15.1637C19.2571 15.422 19.2023 15.6785 19.0919 15.9178C18.9815 16.157 18.8178 16.3742 18.6104 16.5563C18.403 16.7385 18.1563 16.8818 17.8849 16.9779C17.6135 17.0739 17.323 17.1207 17.0307 17.1154ZM33.1445 29.4291H29.2974V23.5252C29.2974 21.7841 28.4601 21.2467 27.3792 21.2467C26.2379 21.2467 25.1179 22.0072 25.1179 23.5692V29.4291H21.269V18.6208H24.9703V20.1184H25.0201C25.3916 19.4537 26.693 18.3175 28.6787 18.3175C30.8263 18.3175 33.1463 19.4442 33.1463 22.7442L33.1445 29.4291Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </GsapMagnetic>
              <GsapMagnetic>
                <a href={"#"}>
                  <svg width="56" height="51" viewBox="0 0 56 51" fill="none">
                    <g filter="url(#filter0_d_29_118)">
                      <rect x="4.98175" y="0.885773" width="46.5455" height="41.1429" rx="20.5714" fill="white" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M28.249 8.08575C24.4676 8.08749 20.8102 9.27132 17.9308 11.4256C15.0514 13.5798 13.1378 16.564 12.532 19.8445C11.9263 23.1251 12.6679 26.488 14.6244 29.332C16.5808 32.176 19.6245 34.3157 23.2112 35.3684C24.0025 35.4982 24.3005 35.0647 24.3005 34.6961C24.3005 34.3275 24.2847 33.2588 24.2794 32.0905C19.8483 32.9366 18.9119 30.4376 18.9119 30.4376C18.1892 28.8149 17.1447 28.3883 17.1447 28.3883C15.6993 27.5214 17.2529 27.5376 17.2529 27.5376C18.8539 27.6373 19.6953 28.9818 19.6953 28.9818C21.1143 31.1215 23.4222 30.5025 24.3295 30.1409C24.4719 29.2345 24.886 28.6179 25.3424 28.2678C21.8027 27.9154 18.0837 26.7146 18.0837 21.3504C18.0618 19.9592 18.6491 18.6138 19.7243 17.5926C19.5608 17.2402 19.0148 15.8169 19.8799 13.8835C19.8799 13.8835 21.2172 13.508 24.2609 15.3185C26.8717 14.691 29.6262 14.691 32.237 15.3185C35.2781 13.508 36.6128 13.8835 36.6128 13.8835C37.4805 15.8122 36.9345 17.2356 36.771 17.5926C37.8496 18.614 38.4382 19.9617 38.4142 21.355C38.4142 26.7309 34.6873 27.9154 31.1424 28.2609C31.7121 28.6967 32.2212 29.5474 32.2212 30.8549C32.2212 32.728 32.2027 34.2348 32.2027 34.6961C32.2027 35.0693 32.4902 35.5052 33.2973 35.3684C36.8844 34.3156 39.9284 32.1755 41.8848 29.331C43.8412 26.4865 44.5825 23.1231 43.9761 19.8422C43.3696 16.5614 41.455 13.5772 38.5746 11.4233C35.6943 9.26944 32.0361 8.08639 28.2542 8.08575H28.249Z"
                        fill="black"
                      />
                      <path d="M18.3524 28.1866C18.3182 28.2562 18.1916 28.2771 18.0887 28.2284C17.9858 28.1797 17.9093 28.0893 17.9463 28.0174C17.9832 27.9456 18.1072 27.927 18.21 27.9757C18.3129 28.0244 18.392 28.1171 18.3524 28.1866Z" fill="white" />
                      <path d="M18.9985 28.8195C18.9439 28.8437 18.8814 28.8504 18.8217 28.8386C18.7621 28.8268 18.7089 28.7971 18.6715 28.7546C18.5686 28.6572 18.5475 28.5228 18.6266 28.4625C18.7057 28.4022 18.8482 28.43 18.951 28.5274C19.0539 28.6248 19.0776 28.7592 18.9985 28.8195Z" fill="white" />
                      <path
                        d="M19.6264 29.6239C19.5288 29.6842 19.3627 29.6239 19.2704 29.5034C19.2448 29.4817 19.2245 29.4558 19.2107 29.4271C19.1968 29.3985 19.1896 29.3676 19.1896 29.3365C19.1896 29.3053 19.1968 29.2744 19.2107 29.2458C19.2245 29.2171 19.2448 29.1912 19.2704 29.1695C19.3679 29.1116 19.5341 29.1695 19.6264 29.2878C19.7188 29.406 19.7214 29.5636 19.6264 29.6239Z"
                        fill="white"
                      />
                      <path d="M20.4783 30.4028C20.3913 30.4886 20.2146 30.4654 20.0695 30.3495C19.9245 30.2336 19.8902 30.076 19.9772 29.9925C20.0642 29.9091 20.241 29.9322 20.3913 30.0458C20.5416 30.1594 20.5707 30.3194 20.4783 30.4028Z" fill="white" />
                      <path d="M21.6731 30.8572C21.6335 30.9661 21.4541 31.0148 21.2748 30.9684C21.0954 30.9221 20.9767 30.7922 21.011 30.681C21.0453 30.5697 21.2273 30.5187 21.4093 30.5697C21.5913 30.6207 21.7074 30.7436 21.6731 30.8572Z" fill="white" />
                      <path d="M22.9762 30.936C22.9762 31.0496 22.8285 31.1469 22.6386 31.1492C22.4486 31.1516 22.293 31.0588 22.293 30.9452C22.293 30.8317 22.4407 30.7343 22.6306 30.732C22.8205 30.7297 22.9762 30.8201 22.9762 30.936Z" fill="white" />
                      <path d="M24.1894 30.7575C24.2131 30.8711 24.0812 30.9893 23.8913 31.0171C23.7014 31.045 23.5353 30.9777 23.5115 30.8665C23.4878 30.7552 23.6249 30.6346 23.8096 30.6045C23.9942 30.5744 24.1656 30.6439 24.1894 30.7575Z" fill="white" />
                    </g>
                    <defs>
                      <filter id="filter0_d_29_118" x="0.98175" y="0.885773" width="54.5455" height="49.1429" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_29_118" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_29_118" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                </a>
              </GsapMagnetic>
              <GsapMagnetic>
                <a href={"#"}>
                  <svg width="47" height="43" viewBox="0 0 47 43" fill="none">
                    <rect x="0.109314" y="0.885773" width="46.5455" height="41.1429" rx="20.5714" fill="white" />
                    <path
                      d="M19.1231 32.3086C29.4446 32.3086 35.0882 24.7486 35.0882 18.1966C35.0882 17.9806 35.0882 17.7646 35.0766 17.5589C36.1704 16.8595 37.1246 15.9852 37.8809 14.9875C36.8802 15.3783 35.798 15.6458 34.6577 15.7692C35.8213 15.152 36.7057 14.1852 37.1246 13.0229C36.0424 13.5886 34.8438 14 33.5638 14.2263C32.5398 13.2595 31.0853 12.6629 29.4678 12.6629C26.3726 12.6629 23.8591 14.8846 23.8591 17.6206C23.8591 18.0115 23.9057 18.392 24.0104 18.752C19.3442 18.5463 15.2133 16.5715 12.4438 13.568C11.9668 14.2983 11.6875 15.152 11.6875 16.0572C11.6875 17.7749 12.6766 19.2972 14.1893 20.1818C13.27 20.1612 12.4089 19.9349 11.6526 19.5646C11.6526 19.5852 11.6526 19.6058 11.6526 19.6263C11.6526 22.0332 13.5842 24.0286 16.1558 24.4915C15.6904 24.6046 15.19 24.6663 14.678 24.6663C14.3173 24.6663 13.9682 24.6355 13.6191 24.5738C14.3289 26.5486 16.4002 27.9783 18.8555 28.0195C16.9355 29.3463 14.5151 30.1383 11.8853 30.1383C11.4315 30.1383 10.9893 30.1178 10.5471 30.0663C13.0024 31.4858 15.958 32.3086 19.1231 32.3086Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </GsapMagnetic>
              <GsapMagnetic>
                <a href={"#"}>
                  <svg width="47" height="43" viewBox="0 0 47 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_29_119)">
                      <rect x="0.236145" y="0.885773" width="46.5455" height="41.1429" rx="20.5714" fill="white" />
                      <path
                        d="M32.568 27.4037L33.5998 21.4572H27.1453V17.6001C27.1453 15.9728 28.0453 14.3858 30.9362 14.3858H33.8725V9.32329C33.8725 9.32329 31.2089 8.92151 28.6634 8.92151C23.3453 8.92151 19.8725 11.7702 19.8725 16.9251V21.4572H13.9634V27.4037H19.8725V41.7795C21.0589 41.9443 22.2725 42.0287 23.5089 42.0287C24.7453 42.0287 25.9589 41.9443 27.1453 41.7795V27.4037H32.568Z"
                        fill="black"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_29_119">
                        <rect x="0.236145" y="0.885773" width="46.5455" height="41.1429" rx="20.5714" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </GsapMagnetic>
            </div>
          </div>
          <div className=" border-bottom-footer border-b-2"></div>
          <GsapMagnetic>
            <Link href={"/contact"} className=" button-contact-me absolute border border-white rounded-full h-[43px] flex justify-center items-center text-[24px] w-[228px] left-[43%] bg-[#000000] z-[2] translate-y-[-45%]">
              contact me
            </Link>
          </GsapMagnetic>
        </div>
      </div>
    </div>
  );
};

export default Footer;
