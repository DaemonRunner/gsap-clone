import React from 'react'
import { mori } from '@/fonts/font'
import { MoveRight } from 'lucide-react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={` mt-[] w-full h-[80vh] ${mori.className} `}>

        <div className=' p-[4rem] h-[40vh] '>
            <div className=' grid grid-cols-5 gap-[7rem] max-w-[80%] items-start px-[4rem] pt-7'>
                <div className='flex-col space-y-2'>
                    <p className=' font-bold text-[#0AE441] text-2xl'>GSAP</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>Core</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>Docs</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>All Plugins</p>
                </div>

                <div className='flex-col space-y-2'>
                    <p className=' font-bold text-[#FEBFC6] text-2xl'>Scroll</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>Core</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>Docs</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>All Plugins</p>
                </div>

                <div className='flex-col space-y-2'>
                    <p className=' font-bold text-[#F78709] text-2xl'>SVG</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>Core</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>Docs</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>All Plugins</p>
                </div>

                <div className='flex-col space-y-2'>
                    <p className=' font-bold text-[#04B7E2] text-2xl'>UI</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>Core</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>Docs</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>All Plugins</p>
                </div>

                <div className='flex-col space-y-2'>
                    <p className=' font-bold text-[#9495FF] text-2xl'>Text</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>Core</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>Docs</p>
                    <p className=' text-[#FFFCE1] text-2xl font-bold'>All Plugins</p>
                </div>

            </div>
        </div>

        <div className=' bg-[#FFFCE1]  justify-between flex px-[4rem] py-[4rem]'>
            <div className=' flex-col space-y-[4rem]  px-[4rem]'>

                <div className='  max-w-[60%]'>
                    <p className=' text-black text-4xl ' style={{ lineHeight: '1.2', fontWeight: '400'}}>
                        Subscribe to the GSAP® newsletter to stay up-to-date with the latest releases
                    </p>
                </div>

                <div className=' max-w-[60%]'>
                <div className="form__group field w-full">
                    <input type="input" className="form__field" placeholder="Email Address" />
                    <label  className="form__label">Email Address</label>
                    {/* <MoveRight className=' text-4xl' /> */}
                </div>
                </div>

                <div className=' '>
                    <p className=' text-black text-xs'>©2024 GreenSock, Inc. All rights reserved. 
                    Privacy Policy.  Terms of Use.</p>
                </div>

            </div>




            <div className='  text-black'>
            <div className=' grid grid-cols-3 gap-[7rem]  items-start px-[4rem] '>
                <div className='flex-col space-y-2'>
                    <p className=' mb-8   text-base font-semibold'>Company</p>
                    <p className='  text-2xl font-semibold'>About</p>
                    <p className='  text-2xl font-semibold'>Blog</p>
                    <p className='  text-2xl font-semibold'>Contact</p>
                </div>

                <div className='flex-col space-y-2'>
                    <p className=' mb-8   text-base font-semibold'>GSAP</p>
                    <p className='  text-2xl font-semibold'>Pricing</p>
                    <p className='  text-2xl font-semibold'>Showcase</p>
                    <p className='  text-2xl font-semibold'>Resources</p>
                    <p className='  text-2xl font-semibold'>Community</p>
                </div>

                <div className='flex-col space-y-2'>
                    <p className=' mb-8   text-base font-semibold'>Connect</p>
                    <p className='  text-2xl font-semibold'>Codepen</p>
                    <p className='  text-2xl font-semibold'>Github</p>
                    <p className='  text-2xl font-semibold'>Facebook</p>
                    <p className='  text-2xl font-semibold'>X</p>
                </div>
            </div>
        </div>

        </div>


    </div>
  )
}

export default Footer