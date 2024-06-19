import Image from 'next/image'
import React from 'react'

import {mori} from '@/fonts/font'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className=' fixed inset-x-0 h-fit top-0 right-0 bg-[#0E100F]'>
        <nav className=' w-[90%] h-[100px] flex justify-between items-center mx-auto border-b-[0.0625rem] border-[#42433d] left'>
            <div className=' flex items-center justify-start gap-[30px] left'>
                <Image src="/download.png" alt="GSAP" width={60} height={42} className=' w-[100px]' />
                <ul className={`${mori.className} flex items-center gap-[30px] text-[#7c7c6f] text-[1.125rem] font-semibold`}>
                    <li  className=' hover:text-[#fffce1]'><a href='#'>Tools</a></li>
                    <li className=' hover:text-[#fffce1]'><a href='#'>Pricing</a></li>
                    <li className=' hover:text-[#fffce1]'><a href='#'>Showcase</a></li>
                    <li className=' hover:text-[#fffce1]'><a href='#'>Resources</a></li>
                    <li className=' hover:text-[#fffce1]'><a href='#'>Community</a></li>
                    <li className=' hover:text-[#fffce1]'><a href='#'>Docs</a></li>
                </ul>
            </div>
            <div className={`flex items-center justify-start gap-[30px] right ${mori.className}`}>
                <a href='' className='hover:text-[#fffce1]'>Login/Create Account</a>
                <button className=' btn'>Get GSAP</button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar