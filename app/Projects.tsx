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
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Project src="/geoscada.png" name="GeoScada" />
        <Project src="/cdek.png" name="CDEK Bonus" />
      </div>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className="flex flex-col gap-4 mt-8 text-lg"
      >
        <div>Also:</div>
        <div>• CDEK WMS</div>
        <div>• SmartDN Blank Editor</div>
      </motion.div>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className={`text-4xl text-white my-10 ${playfair.className}`}
      >
        Pet projects
      </motion.div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Project src="/chirrio.jpg" name="Chirrio Messenger" />
        <Project src="/sysm.png" name="System Metrics Tracker" />
        <Project src="/currenciesapp.png" name="Currencies App" />
        <Project src="/darkforce.png" name="Dark Force Game" />
      </div>
    </div>
  );
}
