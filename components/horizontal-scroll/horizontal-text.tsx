"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import { mori } from '@/fonts/font';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  sentence: string;
};

const HorizontalText = ({ sentence }: Props) => {
  const words = sentence.split(" ");
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "0px 0px -50% 0px",
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.04 * i },
    }),
  };

  const children = {
    // visible: {
    //   opacity: 1,
    //   y: 0,
    //   transition: {
    //     type: "spring",
    //     damping: 12,
    //     stiffness: 100,
    //   },
    // },
    visible: () => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        }
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const SVGs = {
    visible: () => {
        return {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        }
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
    //   ref={ref}
      style={{ overflow: 'hidden' }}
    //   variants={container}
    //   initial="hidden"
    //   animate={controls}
      className="w-[470%] mt-[15%] px-5"
    >
        <motion.div
        ref={ref} variants={SVGs} whileInView="visible" viewport={{ once: true }}>
        <Image  src="/horizontal-2.png" alt="err" width={700} height={700} className=" inline" />

        </motion.div>
      {words.map((word, index) => {
        return (
          <motion.span
            ref={ref}
            variants={children}
            key={index}
            initial="hidden"
            // animate={controls}
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className={`inline-block text-[#fffce1] text-[5rem] font-extrabold ${mori.className}`}
            style={{ letterSpacing: '0.3rem', fontWeight: '900' }}
          >
            {word}&nbsp;
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default HorizontalText;
