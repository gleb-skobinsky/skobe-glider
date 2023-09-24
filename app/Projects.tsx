"use client";

import React from "react";
import Image from "next/image";
import { playfair } from "./fonts";
import { motion } from "framer-motion";
import { xMotionVariant, yMotionVariant } from "./motionVariant";

export function Projects({}) {
  return (
    <div id="projects" className="bg-slate-900 py-12 w-full px-[10%]">
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className={`text-4xl text-white mb-10 ${playfair.className}`}
      >
        Commercial projects
      </motion.div>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className="secondary-text my-10 text-lg"
      >
        • GeoScada
      </motion.div>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={yMotionVariant}
      >
        <Image src="/geoscada.png" alt="GeoScada" width={800} height={600} />
      </motion.div>
    </div>
  );
}
