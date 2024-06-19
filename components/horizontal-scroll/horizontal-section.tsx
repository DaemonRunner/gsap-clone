" use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { mori } from "@/fonts/font";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {};

const HorizontalSection = (props: Props) => {
  const racesRef = useRef<HTMLDivElement>(null);
  const racesWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const races = racesRef.current;

    function getScrollAmount() {
      let racesWidth = races?.scrollWidth || 0;
      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount(),
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: racesWrapperRef.current,
      start: "top 20%",
      end: () => `+=${getScrollAmount() * -1.6}`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      markers: true,
    });

    // Cleanup function to kill the ScrollTrigger instance when the component unmounts
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={racesWrapperRef} className="racesWrapper">
      <div ref={racesRef} className="w-full h-[80vh]  races">

        <div className="flex justify-between p-[9rem]">
          <div className="flex-col p-4 px-5 space-y-[10rem]">
            <div>
              <Image src="/svg.png" alt="err" width={550} height={550} />
            </div>
            <div className="max-w-[800px]">
              <span className={`text-4xl ${mori.className} text-[#fffce1]`}>
                Whether youre animating UI, SVG, or creating immersive WebGL experiences, GSAP has your back.
              </span>
            </div>
          </div>
          <div>
            <Image src="/pasted-img2.png" alt="err" width={750} height={750} />
          </div>
        </div>

        <div className="w-[430%] mt-[15%] px-5">
            <span className={` text-[#fffce1] text-[5rem] font-extrabold ${mori.className} `} style={{letterSpacing:'0.3rem', fontWeight:'900'}}>Nice and Easy Easing Add personality to you animation with a huge variety of plug and play plugins eases, or build your own custom curves Choreograph animation sequences in a snap</span>
        </div>




      </div>
    </div>
  );
};

export default HorizontalSection;
