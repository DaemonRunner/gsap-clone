import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { mori } from "@/fonts/font";
import AnimatedSVG from "./animated-hero-svg";

type Props = {};

const Hero = (props: Props) => {
  const aBottomRef = useRef(null);
  const aTopRef = useRef(null);
  const nBottomRef = useRef(null);
  const nTopRef = useRef(null);
  const iRef = useRef(null);
  const animateIRef = useRef(null);
  const animateNRef = useRef(null);
  const animateARef = useRef(null);
  const secondNRef = useRef(null);
  const animateMRef = useRef(null);

  useEffect(() => {
    const aBottom = aBottomRef.current;
    const aTop = aTopRef.current;
    const nBottom = nBottomRef.current;
    const nTop = nTopRef.current;
    const i = iRef.current;
    const animateI = animateIRef.current;
    const animateN = animateNRef.current;
    const animateA = animateARef.current;
    const secondN = secondNRef.current;
    const animateM = animateMRef.current;

    // Set initial positions for 'a' and 'n'
    gsap.set([aBottom, nBottom], { y: 100, opacity: 0 });
    gsap.set([aTop, nTop], { y: -100, opacity: 0 });
    gsap.set(animateI, { y: -50, opacity: 0 });

    gsap.set(animateN, { opacity: 0 }); // Hide the 'n'
    gsap.set(animateA, { y: 50, opacity: 0, rotationY: 0 }); // Position 'a' below and make it invisible

    gsap.set(secondN, {  x: -50, opacity: 0 });
    gsap.set(animateM, { x: -50, opacity: 0 });

    

    // Create the animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });


    // New animation for 'n' in 'Animate'
    tl.to(
      animateA,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      "-=0.3"
    )
      .to(animateA, {
        rotationY: 180,
        duration: 0.6,
        ease: "power2.inOut",
      })
      .set(animateN, { opacity: 1 }, "-=0.3")
      .set(animateA, { opacity: 0 }, "-=0.3");

    // Animation for 'i' in 'Animate'
    tl.to(animateI, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
      delay: 0.5, // Delay the animation slightly
    });

    // Animation for 'm' in 'Animate'
    tl.to(animateM, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "+=0.2"); // Start 0.2 seconds after 'i' animation ends

    // Animation for 'a'
    tl.to(aBottom, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
    })
      .to(
        aTop,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .to(
        aBottom,
        {
          y: 100,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3"
      )
      .to(aBottom, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      })
      .to(
        aTop,
        {
          y: -100,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3"
      );

    // Animation for 'n', starting halfway through 'a' animation
    tl.to(
      nBottom,
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      },
      "-=1.8"
    ) // Start 1.5 seconds before 'a' animation ends
      .to(
        nTop,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .to(
        nBottom,
        {
          y: 100,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3"
      )
      .to(nBottom, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      })
      .to(
        nTop,
        {
          y: -100,
          opacity: 0,
          duration: 0.5,
        },
        "-=0.3"
      );
       // Animation for the second 'n'
    tl.to(secondN, {
      x: 0,
      opacity: 1,
      duration: 0.6,
      ease: "back.out(1.7)",
    }, "-=0.6"); // Start slightly before the 'i' animation ends

    // Animation for 'i'
    const iTimeline = gsap.timeline({ repeat: -1 });

    iTimeline
      // Rotate 4 times quickly
      .to(i, {
        rotationX: 720,
        duration: 0.8,
        ease: "power1.inOut",
      })
      // Decrease speed and stop at inverted position (looks like '!')
      .to(i, {
        rotationX: 180,
        duration: 0.4,
        ease: "power2.out",
      })
      // Stay for 3 seconds
      .to(i, {
        rotationX: 180,
        duration: 3,
      })
      // Rotate 4 times quickly back to normal
      .to(i, {
        rotationX: 1440,
        duration: 0.8,
        ease: "power1.inOut",
      })
      // Decrease speed and stop at normal position
      .to(i, {
        rotationX: 0,
        duration: 0.4,
        ease: "power2.out",
      })
      // Stay for 3 seconds
      .to(i, {
        rotationX: 0,
        duration: 3,
      });

    // Play both animations
    tl.play().delay(0.5);
    iTimeline.play();

    //cleanup functions
    return () => {
      tl.kill();
      iTimeline.kill();
    };
  }, []);

  return (
    <>
      <div
        id="main"
        className={`${mori.className} items-center justify-center mx-auto min-h-screen`}
      >
        <div
          id="page1"
          className="border-b-[0.0625rem] border-[#42433d] w-[85%] h-screen mx-auto relative"
        >
          <AnimatedSVG />

          <h1 className="relative text-left mt-[70px] font-extrabold text-[12vw] text-[#fffce1]">
            A
            <span
              className="inline-block relative"
              style={{ width: "0.6em", height: "1.01em" }}
            >
              <span ref={animateNRef} className="absolute inset-0">
                n
              </span>
              <span ref={animateARef} className="absolute inset-0">
                a
              </span>
            </span>
            <span className="inline-block" ref={animateIRef}>
              i
            </span>
            <span className="inline-block" ref={animateMRef}>m</span>
            ate
          </h1>
          <Image
            src="/worm.png"
            alt="hero"
            width={137}
            height={135}
            className="absolute h-[150px] right-[420px] top-[500px] transform rotate-[20deg] animate-[rotates_3s_linear_infinite_alternate]"
          />
          <h1 className="text-right font-extrabold text-[12vw] text-[#fffce1] mt-[-100px] relative overflow-hidden">
            <span className="relative inline-block w-[0.6em] h-[1em]">
              <span ref={aBottomRef} className="absolute inset-0">
                a
              </span>
              <span ref={aTopRef} className="absolute inset-0">
                a
              </span>
            </span>
            <span className="relative inline-block w-[0.6em] h-[1em]">
              <span ref={nBottomRef} className="absolute inset-0">
                n
              </span>
              <span ref={nTopRef} className="absolute inset-0">
                n
              </span>
            </span>
            yth
            <span
              ref={iRef}
              className="inline-block"
              style={{ display: "inline-block", transformStyle: "preserve-3d" }}
            >
              i
            </span>
            <span ref={secondNRef} className="inline-block">n</span>
              g
          </h1>

          <div className="flex justify-between mx-auto w-full mt-[4rem]">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 27 78"
                aria-hidden="true"
                className="w-[50px] h-[100px]"
              >
                <path
                  fill="currentColor"
                  d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
                ></path>
              </svg>
              <div className="max-w-[35rem] max-h-[30px] flex items-center">
                <span
                  className="text-[27px] font-medium"
                  style={{ lineHeight: "1.2" }}
                >
                  GSAP - A wildly robust Javascript animation library built for
                  professionals.
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 27 78"
                aria-hidden="true"
                className="w-[50px] h-[100px]"
                transform="scale(-1, 1)"
              >
                <path
                  fill="currentColor"
                  d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
                ></path>
              </svg>
            </div>
            <div className="items-center flex gap-3">
              <button
                title="Save"
                className="cursor-pointer w-[200px] flex items-center justify-center bg-lime-950 hover:bg-lime-900 active:border active:border-lime-400 rounded-full duration-100 p-4"
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
