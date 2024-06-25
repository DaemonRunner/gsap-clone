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

  const animateTRef = useRef(null);
  const animate1Ref = useRef(null);

  const animateCapitalARef = useRef(null);

  const nSVGRef = useRef(null);

  const aSVGRef = useRef(null);
  const animateASVGRef = useRef(null);

  const gRef = useRef(null);

  const yRef = useRef(null);

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

    const animateT = animateTRef.current;
    const animate1 = animate1Ref.current;

    const animateCapitalA = animateCapitalARef.current;

    const nSVG = nSVGRef.current;

    // Set initial positions for 'a' and 'n'
    gsap.set([aBottom, nBottom], { y: 100, opacity: 0 });
    gsap.set([aTop, nTop], { y: -100, opacity: 0 });
    gsap.set(animateI, { y: -50, opacity: 0 });

    gsap.set(animateN, { opacity: 0 }); // Hide the 'n'
    gsap.set(animateA, { y: 50, opacity: 0, rotationY: 0 }); // Position 'a' below and make it invisible

    gsap.set(secondN, { x: -50, opacity: 0 });
    gsap.set(animateM, { x: -50, opacity: 0 });

    gsap.set(animateT, { y: 100, opacity: 0 });
    gsap.set(animate1, { y: 100, opacity: 0 });

    gsap.set(animateCapitalA, {
      rotationX: 180,
      transformOrigin: "bottom",
      y: -100,
      opacity: 0,
    }); // Initially inverted horizontally

    gsap.set(nSVG, { scale: 0, opacity: 0, y: 0 });

    gsap.set(aSVGRef.current, { scale: 0, opacity: 0, x: 0 });
    gsap.set(animateASVGRef.current, { opacity: 0, y: 50 });


    // Set initial state for 'g'
    gsap.set(gRef.current, { opacity: 0, rotation: -30, transformOrigin: "top center" });

     // Set initial state for 'y'
     gsap.set(yRef.current, { 
      opacity: 0, 
      rotationX: -90, 
      z: -100, 
      transformPerspective: 400
    });

    // Create the animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // Animations for 'Animate'
    tl.to(animateCapitalA, {
      rotationX: 0,
      y: 0,
      opacity: 1,
      duration: 0.83, // Adjusted duration
      ease: "power3.Out",
    })
      .to(
        nSVG,
        {
          scale: 1,
          opacity: 1,
          duration: 0.5, // Adjusted duration
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .to(
        nSVG,
        {
          y: -100,
          opacity: 0,
          duration: 0.5, // Adjusted duration
          ease: "power2.in",
        },
        "+=0.15"
      )
      .to(
        animateA,
        {
          y: 0,
          opacity: 1,
          duration: 0.5, // Adjusted duration
          ease: "back.out(1.7)",
        },
        "-=0.15"
      )
      .to(animateA, {
        rotationY: 180,
        duration: 0.5, // Adjusted duration
        ease: "power2.inOut",
      })
      .set(animateN, { opacity: 1 }, "-=0.15")
      .set(animateA, { opacity: 0 }, "-=0.15")
      .to(
        animateI,
        {
          y: 0,
          opacity: 1,
          duration: 0.5, // Adjusted duration
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.80"
      )

      // .to(animateM, {
      //   x: 0,
      //   opacity: 1,
      //   duration: 0.5, // Adjusted duration
      //   ease: "back.out(1.7)",
      // }, "-=0.15")

      .to(
        aSVGRef.current,
        {
          scale: 1,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        "-=0.3"
      )
      .to(aSVGRef.current, {
      rotation: 360,
      duration: 1.0,
      ease: "none",
      repeat: -1,
      transformOrigin: "center center",
    }, "-=0.3") // Start the rotation at the same time as the scale animation
      .to(
        animateM,
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          delay: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.25"
      )
      .to(
        aSVGRef.current,
        {
          x: "+=1em",
          duration: 0.5,
          ease: "power2.inOut",
        },
        "-=0.75"
      )
      .to(aSVGRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
      .to(
        animateASVGRef.current,
        {
          y: 0,
          opacity: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
          onComplete: () => {
            gsap.killTweensOf(aSVGRef.current, "rotation");
          }
        },
      )

      .to(
        animate1,
        {
          y: 0,
          opacity: 1,
          duration: 0.3, // Adjusted duration
          ease: "back.out(1.7)",
        },
        "-=0.15"
      )
      .to(animate1, {
        y: -100,
        opacity: 0,
        duration: 0.3, // Adjusted duration
      })
      .to(
        animateT,
        {
          y: 0,
          opacity: 1,
          duration: 0.3, // Adjusted duration
          ease: "back.out(1.7)",
        },
        "-=0.15"
      );

    // Animations for 'anything'
    tl.to([aBottom, nBottom], {
      y: 0,
      opacity: 1,
      duration: 0.3, // Adjusted duration
      ease: "back.out(1.7)",
      stagger: 0.16,
    })
      .to(
        [aTop, nTop],
        {
          y: 0,
          opacity: 1,
          duration: 0.3, // Adjusted duration
          ease: "back.out(1.7)",
          stagger: 0.16,
        },
        "-=0.72"
      )
      .to(
        [aBottom, nBottom],
        {
          y: 100,
          opacity: 0,
          duration: 0.3, // Adjusted duration
          stagger: 0.16,
        },
        "-=0.76"
      )
      .to(
        [aBottom, nBottom],
        {
          y: 0,
          opacity: 1,
          duration: 0.3, // Adjusted duration
          ease: "back.out(1.7)",
          stagger: 0.16,
        },
        "-=0.56"
      )
      .to(
        [aTop, nTop],
        {
          y: -100,
          opacity: 0,
          duration: 0.3, // Adjusted duration
          stagger: 0.16,
        },
        "-=0.52"
      )
      .to(
        secondN,
        {
          x: 0,
          opacity: 1,
          duration: 0.3, // Adjusted duration
          ease: "back.out(1.7)",
        },
        "-=0.16"
      );

       // Animation for 'y'
    tl.to(yRef.current, {
      opacity: 1,
      rotationX: 0,
      z: 0,
      duration: 1.5,
      ease: "power3.out",
    }, "-=1"); // Start slightly before the 'g' animation

      tl.to(gRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut"
      }, "-=1.3")
      .to(gRef.current, {
        rotation: 20,
        duration: 0.4,
        // repeat: 2,
        // yoyo: true,
        ease: "power1.inOut"
      })
      .to(gRef.current, {
        rotation: -20,
        duration: 0.4,
        ease: "power1.inOut"
      })
      .to(gRef.current, {
        rotation: 0,
        duration: 0.3,
        ease: "back.out(1.7)"
      });

    // Animation for 'i'
    const iTimeline = gsap.timeline({ repeat: -1 });

    iTimeline
      // Rotate 4 times quickly
      .to(i, {
        rotationX: 720,
        duration: 1.25, // Adjusted duration
        ease: "power1.inOut",
      })
      // Decrease speed and stop at inverted position (looks like '!')
      .to(i, {
        rotationX: 180,
        duration: 0.6, // Adjusted duration
        ease: "power2.out",
      })
      // Stay for 3 seconds
      .to(i, {
        rotationX: 180,
        duration: 2.4,
      })
      // Rotate 4 times quickly back to normal
      .to(i, {
        rotationX: 1440,
        duration: 1.25, // Adjusted duration
        ease: "power1.inOut",
      })
      // Decrease speed and stop at normal position
      .to(i, {
        rotationX: 0,
        duration: 0.6, // Adjusted duration
        ease: "power2.out",
      })
      // Stay for 3 seconds
      .to(i, {
        rotationX: 0,
        duration: 2.4,
      });

    // Play both animations
    tl.play().delay(0.0);
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
            <span
              ref={animateCapitalARef}
              className="inline-block"
              style={{ display: "inline-block", transformStyle: "preserve-3d" }}
            >
              A
            </span>
            <span
              className="inline-block relative"
              style={{ width: "0.6em", height: "1.01em" }}
            >
              <svg
                ref={nSVGRef}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="none"
                viewBox="0 0 29 29"
                width="130"
                height="130"
                className="absolute top-[0.5em] left-5 inset-0"
              >
                <path
                  fill="url(#paint0_radial_2937_56158)"
                  fillRule="evenodd"
                  d="M8.54 14.187c-.469.099-.954.15-1.451.15C3.174 14.337 0 11.127 0 7.17 0 3.209 3.174 0 7.089 0c3.915 0 7.09 3.21 7.09 7.169 0 .33-.023.657-.066.976h.774a7.318 7.318 0 0 1-.065-.976C14.822 3.209 17.996 0 21.91 0 25.826 0 29 3.21 29 7.169c0 3.959-3.174 7.168-7.089 7.168-.44 0-.87-.04-1.288-.118v.562a7.048 7.048 0 0 1 1.288-.118c3.915 0 7.089 3.21 7.089 7.168C29 25.791 25.826 29 21.911 29c-3.915 0-7.09-3.21-7.09-7.169 0-.502.052-.993.15-1.466h-.91c.077.423.117.858.117 1.304 0 3.959-3.174 7.168-7.089 7.168C3.174 28.837 0 25.627 0 21.67c0-3.96 3.174-7.169 7.089-7.169.497 0 .982.052 1.45.15v-.463Z"
                  clipRule="evenodd"
                />
                <defs>
                  <radialGradient
                    id="paint0_radial_2937_56158"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientTransform="rotate(-90 14.86 5.937) scale(22.8436)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#E193FF" />
                    <stop offset=".672" stopColor="#8E78DA" />
                    <stop offset=".738" stopColor="#937DDB" />
                    <stop offset=".816" stopColor="#A28BDD" />
                    <stop offset=".901" stopColor="#BAA3E2" />
                    <stop offset=".991" stopColor="#DBC3E7" />
                    <stop offset="1" stopColor="#DFC7E8" />
                  </radialGradient>
                </defs>
              </svg>
              <span ref={animateNRef} className="absolute inset-0">
                n
              </span>
              <span ref={animateARef} className="absolute inset-0">
                a
              </span>
            </span>
            {/* <span
              className="inline-block relative"
              style={{ width: "0.6em", height: "1.01em" }}
            >
              <span ref={animateNRef} className="absolute inset-0">
                n
              </span>
              <span ref={animateARef} className="absolute inset-0">
                a
              </span>
            </span> */}
            <span className="inline-block" ref={animateIRef}>
              i
            </span>
            {/* <span className="inline-block" ref={animateMRef}>m</span> */}
            <span
              className="inline-block relative"
              style={{ width: "1.58em", height: "1.01em" }}
            >
              {/* <svg 
                ref={aSVGRef}
                xmlns="http://www.w3.org/2000/svg" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                fill="none" 
                viewBox="0 0 29 29" 
                width="110" 
                height="110"
                className="absolute top-[0.5em] left-0 inset-0"
              >
                <path fill="url(#paint0_radial_2937_56158)" fillRule="evenodd" d="M8.54 14.187c-.469.099-.954.15-1.451.15C3.174 14.337 0 11.127 0 7.17 0 3.209 3.174 0 7.089 0c3.915 0 7.09 3.21 7.09 7.169 0 .33-.023.657-.066.976h.774a7.318 7.318 0 0 1-.065-.976C14.822 3.209 17.996 0 21.91 0 25.826 0 29 3.21 29 7.169c0 3.959-3.174 7.168-7.089 7.168-.44 0-.87-.04-1.288-.118v.562a7.048 7.048 0 0 1 1.288-.118c3.915 0 7.089 3.21 7.089 7.168C29 25.791 25.826 29 21.911 29c-3.915 0-7.09-3.21-7.09-7.169 0-.502.052-.993.15-1.466h-.91c.077.423.117.858.117 1.304 0 3.959-3.174 7.168-7.089 7.168C3.174 28.837 0 25.627 0 21.67c0-3.96 3.174-7.169 7.089-7.169.497 0 .982.052 1.45.15v-.463Z" clipRule="evenodd" />
                <defs>
                  <radialGradient id="paint0_radial_2937_56158" cx="0" cy="0" r="1" gradientTransform="rotate(-90 14.86 5.937) scale(22.8436)" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#E193FF" />
                    <stop offset=".672" stopColor="#8E78DA" />
                    <stop offset=".738" stopColor="#937DDB" />
                    <stop offset=".816" stopColor="#A28BDD" />
                    <stop offset=".901" stopColor="#BAA3E2" />
                    <stop offset=".991" stopColor="#DBC3E7" />
                    <stop offset="1" stopColor="#DFC7E8" />
                  </radialGradient>
                </defs>
              </svg> */}
              <svg
                ref={aSVGRef}
                className="absolute top-[0.4em] left-0 inset-0 "
                viewBox="0 0 157 156"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                style={{
                  translate: "0px 0px",
                  rotate: "0deg",
                  scale: "1",
                  transform: "rotate(360deg)",
                }}
                width="157"
                height="156"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M82.2214 104.04L105.483 143.586C108.242 148.276 114.274 149.852 118.974 147.112V147.112C123.675 144.371 125.275 138.345 122.552 133.634L99.5971 93.9091L144.009 105.424C149.276 106.79 154.656 103.639 156.042 98.3773V98.3773C157.428 93.1154 154.298 87.7233 149.042 86.317L104.72 74.4593L144.266 51.1978C148.957 48.439 150.533 42.407 147.792 37.7062V37.7062C145.052 33.0054 139.026 31.4057 134.314 34.1282L94.5898 57.0835L106.105 12.6719C107.471 7.40463 104.32 2.02469 99.058 0.638673V0.638673C93.7961 -0.747342 88.4041 2.38242 86.9977 7.63895L75.14 51.9603L51.8786 12.4142C49.1197 7.72403 43.0878 6.14763 38.387 8.8883V8.8883C33.6862 11.629 32.0865 17.6548 34.809 22.3662L57.7643 62.0908L13.3526 50.5758C8.08539 49.2101 2.70545 52.3607 1.31944 57.6226V57.6226C-0.0665745 62.8845 3.06319 68.2766 8.31971 69.6829L52.6411 81.5406L13.095 104.802C8.4048 107.561 6.8284 113.593 9.56907 118.294V118.294C12.3097 122.994 18.3356 124.594 23.0469 121.872L62.7716 98.9164L51.2566 143.328C49.8909 148.595 53.0414 153.975 58.3034 155.361V155.361C63.5653 156.747 68.9573 153.617 70.3637 148.361L82.2214 104.04Z"
                  fill="#FFFFFF"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M82.2214 104.04L105.483 143.586C108.242 148.276 114.274 149.852 118.974 147.112V147.112C123.675 144.371 125.275 138.345 122.552 133.634L99.5971 93.9091L144.009 105.424C149.276 106.79 154.656 103.639 156.042 98.3773V98.3773C157.428 93.1154 154.298 87.7233 149.042 86.317L104.72 74.4593L144.266 51.1978C148.957 48.439 150.533 42.407 147.792 37.7062V37.7062C145.052 33.0054 139.026 31.4057 134.314 34.1282L94.5898 57.0835L106.105 12.6719C107.471 7.40463 104.32 2.02469 99.058 0.638673V0.638673C93.7961 -0.747342 88.4041 2.38242 86.9977 7.63895L75.14 51.9603L51.8786 12.4142C49.1197 7.72403 43.0878 6.14763 38.387 8.8883V8.8883C33.6862 11.629 32.0865 17.6548 34.809 22.3662L57.7643 62.0908L13.3526 50.5758C8.08539 49.2101 2.70545 52.3607 1.31944 57.6226V57.6226C-0.0665745 62.8845 3.06319 68.2766 8.31971 69.6829L52.6411 81.5406L13.095 104.802C8.4048 107.561 6.8284 113.593 9.56907 118.294V118.294C12.3097 122.994 18.3356 124.594 23.0469 121.872L62.7716 98.9164L51.2566 143.328C49.8909 148.595 53.0414 153.975 58.3034 155.361V155.361C63.5653 156.747 68.9573 153.617 70.3637 148.361L82.2214 104.04Z"
                  fill='url("#paint0_radial_1413_80169")'
                ></path>
                <path
                  fill-opacity="0.6"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M82.2214 104.04L105.483 143.586C108.242 148.276 114.274 149.852 118.974 147.112V147.112C123.675 144.371 125.275 138.345 122.552 133.634L99.5971 93.9091L144.009 105.424C149.276 106.79 154.656 103.639 156.042 98.3773V98.3773C157.428 93.1154 154.298 87.7233 149.042 86.317L104.72 74.4593L144.266 51.1978C148.957 48.439 150.533 42.407 147.792 37.7062V37.7062C145.052 33.0054 139.026 31.4057 134.314 34.1282L94.5898 57.0835L106.105 12.6719C107.471 7.40463 104.32 2.02469 99.058 0.638673V0.638673C93.7961 -0.747342 88.4041 2.38242 86.9977 7.63895L75.14 51.9603L51.8786 12.4142C49.1197 7.72403 43.0878 6.14763 38.387 8.8883V8.8883C33.6862 11.629 32.0865 17.6548 34.809 22.3662L57.7643 62.0908L13.3526 50.5758C8.08539 49.2101 2.70545 52.3607 1.31944 57.6226V57.6226C-0.0665745 62.8845 3.06319 68.2766 8.31971 69.6829L52.6411 81.5406L13.095 104.802C8.4048 107.561 6.8284 113.593 9.56907 118.294V118.294C12.3097 122.994 18.3356 124.594 23.0469 121.872L62.7716 98.9164L51.2566 143.328C49.8909 148.595 53.0414 153.975 58.3034 155.361V155.361C63.5653 156.747 68.9573 153.617 70.3637 148.361L82.2214 104.04Z"
                  fill='url("#pattern-home-hero-star-0")'
                  style={{mixBlendMode: "multiply"}}               ></path>
                <defs>
                  <pattern
                    id="pattern-home-hero-star-0"
                    patternContentUnits="objectBoundingBox"
                    width="0.625"
                    height="0.625"
                  >
                    <g></g>
                  </pattern>
                  <radialGradient
                    id="paint0_radial_1413_80169"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(124.192 87.08) rotate(149.757) scale(126.034)"
                  >
                    <stop stop-color="#FFEBE7"></stop>
                    <stop offset="0.6721" stop-color="#FF9C7C"></stop>
                    <stop offset="0.8164" stop-color="#FF9983"></stop>
                    <stop offset="0.9014" stop-color="#FF774B"></stop>
                    <stop offset="1" stop-color="#E76F00"></stop>
                  </radialGradient>
                  <radialGradient
                    id="paint0_radial_1413_80169"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(124.192 87.08) rotate(149.757) scale(126.034)"
                  >
                    <stop stop-color="#FFEBE7"></stop>
                    <stop offset="0.6721" stop-color="#FF9C7C"></stop>
                    <stop offset="0.8164" stop-color="#FF9983"></stop>
                    <stop offset="0.9014" stop-color="#FF774B"></stop>
                    <stop offset="1" stop-color="#E76F00"></stop>
                  </radialGradient>
                  <pattern
                    id="pattern-home-hero-star-0"
                    patternContentUnits="objectBoundingBox"
                    width="0.625"
                    height="0.625"
                  >
                    <g></g>
                  </pattern>
                  <image
                    id="svg-noise"
                    width="500"
                    height="500"
                    xlinkHref="/tf-assets/noise-e82662fe.png"
                  ></image>
                  <image
                    id="svg-noise"
                    width="500"
                    height="500"
                    xlinkHref="/tf-assets/noise-e82662fe.png"
                  ></image>
                </defs>
              </svg>
              <span ref={animateMRef} className="absolute inset-0">
                m
              </span>
              <span
                ref={animateASVGRef}
                className="absolute left-[1em] inset-0"
              >
                a
              </span>
            </span>
            <span
              className="inline-block relative"
              style={{ width: "0.4em", height: "1.01em" }}
            >
              <span ref={animateTRef} className="absolute inset-0">
                t
              </span>
              <span ref={animate1Ref} className="absolute inset-0">
                1
              </span>
            </span>
            e
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
            <span ref={yRef} className="inline-block" style={{ display: "inline-block", transformStyle: "preserve-3d" }}>y</span>
            th
            <span
              ref={iRef}
              className="inline-block"
              style={{ display: "inline-block", transformStyle: "preserve-3d" }}
            >
              i
            </span>
            <span ref={secondNRef} className="inline-block">
              n
            </span>
            <span ref={gRef} className="inline-block" style={{ display: "inline-block", transformOrigin: "top center" }}>g</span>
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
