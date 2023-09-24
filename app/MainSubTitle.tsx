"use client";

import { motion } from "framer-motion";
import React from "react";
import { motionVariant } from "./motionVariant";

export function MainSubTitle({}) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={motionVariant}
      className="mx-[10%] text-xl text-stone-500 mt-5 text-center"
    >
      Mid-level software developer and tech enthusiast
    </motion.div>
  );
}
