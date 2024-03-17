"use client";

import React from "react";
import { playfair } from "../fonts";
import { motion } from "framer-motion";
import { yMotionVariant } from "./motionVariant";

export function MainTitle(props: { text: string }) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={yMotionVariant}
      className={`mx-[10%] mt-[5%] text-7xl text-center ${playfair.className}`}
    >
      {props.text}
    </motion.div>
  );
}
