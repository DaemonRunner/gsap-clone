import React from 'react'

import { mori } from '@/fonts/font'

type Props = {}

const DetailsSection = (props: Props) => {
  return (
    <div className=' w-[85%] h-[78vh] mx-auto relative mt-[8rem] text-[#fffce1] border-b-[0.0625rem] border-[#42433d]'>
        <div className=" flex items-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 27 78"
            aria-hidden="true"
            className=" w-[30px] h-[50px]"
          >
            <path
              fill="currentColor"
              d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
            ></path>
          </svg>
          <div className="  max-h-[80px] flex items-center">
            <span className={` text-[20px] mt-2 font-medium ${mori.className} `}>
              Why GSAP
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 27 78"
            aria-hidden="true"
            className=" w-[30px] h-[50px]"
            transform="scale(-1, 1)"
          >
            <path
              fill="currentColor"
              d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
            ></path>
          </svg>
        </div>

        <div className=' mt-[5rem]'>
            <span className={` text-[5rem] ${mori.className}`} style={{ lineHeight: '1.2'}}>
            GSAP allows you to effortlessly animate anything JS can touch. Delivering silky-smooth performance and unmatched support so you can focus on the fun stuff.
            </span>
        </div>
    </div>
  )
}

export default DetailsSection