"use client";

import React from "react";
import { Project } from "./Project";
import { playfair } from "./fonts";
import { motion } from "framer-motion";
import { xMotionVariant } from "./motionVariant";

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
      <Project src="/geoscada.png" name="GeoScada" />
      <Project src="/cdek.png" name="CDEK Bonus" />
    </div>
  );
}
