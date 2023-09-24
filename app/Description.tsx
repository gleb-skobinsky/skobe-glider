"use client";

import React from "react";
import { playfair } from "./fonts";
import { Variants, motion } from "framer-motion";

const xMotionVariant: Variants = {
  hide: {
    opacity: 0,
    x: 100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

export function Description({}) {
  return (
    <>
      <motion.h1
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className={`mx-[10%] my-16 text-4xl text-center ${playfair.className}`}
      >
        Software developer at <a href="https://www.smart-dn.ru/">SmartDN</a>
      </motion.h1>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className="text-xl text-stone-500 mb-[10vh] mx-[10%]"
      >
        While fast delivery of high-quality robust solutions to the business is
        always my top priority, I also focus on writing readable, thoroughly
        tested and well-documented code. I&apos;m obsessed with following best
        practices and design patterns that are of importance to the stack
        I&apos;m using, be it MVVM for Android with Compose, multimodule
        architecture for a Ktor backend or microservices for a FastAPI app.
        Industriousness, commitment, and strive to perfection are the three
        pillars of my work as an engineer.
      </motion.div>
    </>
  );
}
