"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { mori } from '@/fonts/font';
import Image from 'next/image';

type Props = {};

const Brands = (props: Props) => {
  const firstImageRefs = useRef<HTMLDivElement[]>([]);
  const secondImageRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    firstImageRefs.current.forEach((firstImage, index) => {
      const secondImage = secondImageRefs.current[index];

      if (firstImage && secondImage) {
        gsap.set(secondImage, { y: '100%' }); // Position second image outside the container at the bottom

        const timeline = gsap.timeline({ repeat: -1 });

        timeline
          // First image visible
          .to(firstImage, { x: '0%', duration: 0 })
          .to(secondImage, { y: '100%', duration: 0 })
          .to({}, { duration: 2 }) // Pause for 2 seconds

          // Transition to second image
          .to(firstImage, { x: '140%', duration: 1, ease: "elastic.in(1, 0.3)" })
          .to(secondImage, { y: '0%', duration: 1 }, '<') // Start at the same time as previous animation

          // Second image visible
          .to({}, { duration: 2 }) // Pause for 2 seconds

          // Transition back to first image
          .to(secondImage, { y: '100%', duration: 1 })
          .to(firstImage, { x: '0%', duration: 1, ease: "elastic.out(1, 0.3)" }, '<'); // Start at the same time as previous animation
      }
    });
  }, []);

  return (
    <div className='w-[85%] h-[45vh] mx-auto mt-[8rem] text-[#fffce1]'>
      <div className="flex items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 27 78"
          aria-hidden="true"
          className="w-[30px] h-[50px]"
        >
          <path
            fill="currentColor"
            d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
          ></path>
        </svg>
        <div className="max-h-[80px] flex items-center">
          <span className={`text-[20px] mt-2 font-medium ${mori.className}`}>
            Brands using GSAP
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 27 78"
          aria-hidden="true"
          className="w-[30px] h-[50px]"
          transform="scale(-1, 1)"
        >
          <path
            fill="currentColor"
            d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
          ></path>
        </svg>
      </div>

      <div className='mt-[5rem] grid grid-cols-6 w-full'>
        {[...Array(6)].map((_, index) => (
          <div key={index} className='relative w-[10rem] h-[5rem] overflow-hidden p-2 items-center justify-center flex'>
            <div ref={(el: any) => firstImageRefs.current[index] = el} className='absolute'>
              <Image src="/svgexport-71.svg" alt="" width={100} height={100} className='w-[7rem] h-[7rem]' />
            </div>
            <div ref={(el: any) => secondImageRefs.current[index] = el} className='absolute mt-4'>
              <Image src="/svgexport-68.svg" alt="" width={100} height={100} className='w-[4rem] h-[4rem]' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
