import React from 'react'
import { mori } from '@/fonts/font'
import Image from 'next/image'

type Props = {}

const ToolsSection = (props: Props) => {
  return (
    <div className=' w-[85%] min-h-screen mx-auto relative mt-[8rem] text-[#fffce1] '>
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
                GSAP Tools
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

        <div className={` mt-[5rem] ${mori.className} border-b-[0.0625rem] border-[#42433d] py-[4rem]`}>
            <div className=' flex gap-[15rem]'>
                <Image src="/svgexport-41.svg" width={320} height={320} alt="" />
                <div className=' flex-col space-y-[4rem] '>
                    <p className=' text-[47px] text-[#FEC5FB]' style={{fontWeight: '600'}}>Scroll</p>
                    <p className=' text-[47px] text-[#fffce1]' style={{fontWeight: '600'}}>Turn scrolling into silky-smooth storytelling.</p>
                    <button className=' btn'>Explore Scroll</button>
                </div>
            </div>
        </div>

        <div className={` mt-[] ${mori.className} border-b-[0.0625rem] border-[#42433d] py-[4rem]`}>
            <div className=' flex gap-[15rem]'>
                <Image src="/svgexport-42.svg" width={320} height={320} alt="" />
                <div className=' flex-col space-y-[4rem] '>
                    <p className=' text-[47px] text-[#FF8709]' style={{fontWeight: '600'}}>SVG</p>
                    <p className=' text-[47px] text-[#fffce1]' style={{fontWeight: '600'}}>Turn scrolling into silky-smooth storytelling.</p>
                    <button className=' btn'>Explore SVG</button>
                </div>
            </div>
        </div>


        <div className={` mt-[] ${mori.className} py-[4rem] border-b-[0.0625rem] border-[#42433d] `}>
            <div className=' flex gap-[15rem]'>
                <Image src="/text.png" width={320} height={320} alt="" />
                <div className=' flex-col space-y-[4rem] '>
                    <p className=' text-[47px] text-[#9D95FF]' style={{fontWeight: '600'}}>Text</p>
                    <p className=' text-[47px] text-[#fffce1]' style={{fontWeight: '600'}}>Leave them lost for words.</p>
                    <button className=' btn'>Explore Text</button>
                </div>
            </div>
        </div>

        <div className={` mt-[] ${mori.className} py-[4rem]`}>
            <div className=' flex gap-[15rem]'>
                <Image src="/UI.png" width={320} height={320} alt="" />
                <div className=' flex-col space-y-[4rem] '>
                    <p className=' text-[47px] text-[#00BAE2]' style={{fontWeight: '600'}}>UI Interactions</p>
                    <p className=' text-[47px] text-[#fffce1]' style={{fontWeight: '600'}}>Create polished and engaging interactions.</p>
                    <button className=' btn'>Explore UI</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToolsSection