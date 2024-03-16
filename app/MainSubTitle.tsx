"use client";

import { motion } from "framer-motion";
import React from "react";
import { yMotionVariant } from "./motionVariant";

export function MainSubTitle({}) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={yMotionVariant}
      className="mx-[10%] text-xl secondary-text mt-5 text-center"
    >
      A software developer and tech enthusiast
    </motion.div>
  );
}
