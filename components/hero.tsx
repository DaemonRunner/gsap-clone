import React from "react";
import Image from "next/image";

import { mori } from "@/fonts/font";

type Props = {};

const Hero = (props: Props) => {
  return (
    <>
      <div
        id="main"
        className={`${mori.className} items-center justify-center mx-auto min-h-screen  `}
      >
        <div id="page1" className="border-b-[0.0625rem] border-[#42433d]">
          <svg
            className="Mysvg"
            viewBox="0 0 137 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
          >
            <path
              d="M84.1148 67.3453H136.194C136.637 67.3453 137 67.7028 137 68.1397V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2191V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06673e-05 134.639 0.00401052 134.198C0.439379 97.2879 30.9354 67.5042 68.498 67.5002H0.806238C0.362807 67.5002 0 67.1427 0 66.7057V0.802561C0 0.361644 0.366822 0.000171863 0.814284 0.00414409C37.9778 0.429172 68.0263 30.0183 68.498 66.6263V0.794617C68.498 0.357672 68.8608 0.000171819 69.3042 0.000171819H136.186C136.633 0.000171819 137 0.361644 136.996 0.802561C136.621 32.4969 114.079 58.94 83.9334 65.7802C83.0022 65.9907 83.1594 67.3453 84.1189 67.3453H84.1148Z"
              fill="url(#paint0_linear_1655_45397)"
            ></path>
            <path
              d="M84.1148 67.3453H136.194C136.637 67.3453 137 67.7028 137 68.1397V134.043C137 134.484 136.633 134.845 136.186 134.841C99.0222 134.416 68.9737 104.827 68.502 68.2191V134.206C68.502 134.643 68.1392 135 67.6958 135H0.814284C0.366822 135 -2.06673e-05 134.639 0.00401052 134.198C0.439379 97.2879 30.9354 67.5042 68.498 67.5002H0.806238C0.362807 67.5002 0 67.1427 0 66.7057V0.802561C0 0.361644 0.366822 0.000171863 0.814284 0.00414409C37.9778 0.429172 68.0263 30.0183 68.498 66.6263V0.794617C68.498 0.357672 68.8608 0.000171819 69.3042 0.000171819H136.186C136.633 0.000171819 137 0.361644 136.996 0.802561C136.621 32.4969 114.079 58.94 83.9334 65.7802C83.0022 65.9907 83.1594 67.3453 84.1189 67.3453H84.1148Z"
              fill="url(#pattern-home-hero-windmill-0)"
              fill-opacity="0.6"
              style={{ mixBlendMode: "multiply" }}
            ></path>
            <defs>
              <pattern
                id="pattern-home-hero-windmill-0"
                patternContentUnits="objectBoundingBox"
                width="1.45985"
                height="1.48148"
              >
                <use
                  xlinkHref="#svg-noise"
                  transform="scale(0.00291971 0.00296296)"
                ></use>
              </pattern>
              <linearGradient
                id="paint0_linear_1655_45397"
                x1="-76.6791"
                y1="-15.6157"
                x2="165.682"
                y2="81.0082"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.427083" stop-color="#FF8709"></stop>
                <stop offset="0.791667" stop-color="#F7BDF8"></stop>
              </linearGradient>
            </defs>
          </svg>
          <h1 className="text111 text-left mt-[70px] font-extrabold">
            Animate
          </h1>
          <Image
            src="/worm.png"
            alt="hero"
            width={137}
            height={135}
            className="modelImg z-[-10]"
          />
          <h1 className="text222 text-right  font-extrabold z-100">
            anyth<span className="animateI">i</span>ng
          </h1>
          <div
            className={` flex justify-between mx-auto w-full mt-[4rem] ${mori.className} `}
          >
            <div className=" flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 27 78"
                aria-hidden="true"
                className=" w-[50px] h-[100px]"
              >
                <path
                  fill="currentColor"
                  d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
                ></path>
              </svg>
              <div className=" max-w-[35rem] max-h-[30px] flex items-center">
                <span className=" text-[27px] font-medium  " style={{lineHeight:'1.2'}}>
                  GSAP - A wildly robust Javascript animation library built for
                  professionals.
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 27 78"
                aria-hidden="true"
                className=" w-[50px] h-[100px]"
                transform="scale(-1, 1)"
              >
                <path
                  fill="currentColor"
                  d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
                ></path>
              </svg>
            </div>
            <div className=" items-center flex gap-3">
              <button
                title="Save"
                className="cursor-pointer w-[200px]  flex items-center justify-center bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-full duration-100 p-4"
              >
                <span className="text-lg text-lime-400 font-bold">
                  Get GSAP
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
