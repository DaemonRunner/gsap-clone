"use client";

import React from 'react';
import { mori } from '@/fonts/font';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type Props = {
  sentence: string;
};

type AnimationType = 'default' | 'zoomOut' | 'letterByLetter';

const HorizontalText = ({ sentence }: Props) => {
  const words = sentence.split(" ");

  const getAnimationType = (index: number): AnimationType => {
    if (index % 5 === 0) return 'zoomOut';
    if (index % 7 === 0) return 'letterByLetter';
    return 'default';
  };

  const wordVariants = {
    default: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    },
    zoomOut: {
      hidden: { opacity: 0, scale: 1.5 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const Word = ({ word, animationType, index }: { word: string; animationType: AnimationType; index: number }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.7,
    });

    if (animationType === 'letterByLetter') {
      return (
        <span
          ref={ref}
          className={`inline-block text-[#fffce1] text-[5rem] font-extrabold ${mori.className}`}
          style={{ letterSpacing: '0.3rem', fontWeight: '900' }}
        >
          {word.split('').map((letter, letterIndex) => (
            <motion.span
              key={letterIndex}
              variants={letterVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={letterIndex}
            >
              {letter}
            </motion.span>
          ))}
          &nbsp;
        </span>
      );
    }

    return (
      <motion.span
        ref={ref}
        variants={wordVariants[animationType]}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`inline-block text-[#fffce1] text-[5rem] font-extrabold ${mori.className}`}
        style={{ letterSpacing: '0.3rem', fontWeight: '900' }}
      >
        {word}&nbsp;
      </motion.span>
    );
  };

  return (
    <div className="w-[470%] mt-[15%] px-5">
      {words.map((word, index) => (
        <Word 
          key={index} 
          word={word} 
          animationType={getAnimationType(index)} 
          index={index} 
        />
      ))}
    </div>
  );
};

export default HorizontalText;