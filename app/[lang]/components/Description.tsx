"use client";

import React from "react";
import { playfair } from "../fonts";
import { motion } from "framer-motion";
import { xMotionVariant } from "./motionVariant";

export function Description(props: { dict: LangDict }) {
  return (
    <div id="about-section">
      <motion.h1
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className={`mx-[10%] my-16 text-4xl text-center ${playfair.className}`}
      >
        {props.dict.DescTitle}
        <a href="https://mts-digital.ru/" target="_blank">
          {props.dict.Company}
        </a>
      </motion.h1>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className="text-xl secondary-text mb-[10vh] mx-[10%]"
      >
        {props.dict.DescBody}
      </motion.div>
    </div>
  );
}
