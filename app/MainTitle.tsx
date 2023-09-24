"use client";

import React from "react";
import { playfair } from "./page";
import { motion } from "framer-motion";
import { motionVariant } from "./motionVariant";

export function MainTitle({}) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={motionVariant}
      className={`mx-[10%] mt-[5%] text-7xl text-center ${playfair.className}`}
    >
      I&apos;m Gleb Gutnik
    </motion.div>
  );
}
