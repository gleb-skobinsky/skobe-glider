"use client";

import React from "react";
import { xMotionVariant, yMotionVariant } from "./motionVariant";
import { motion } from "framer-motion";
import Image from "next/image";

export function Project(props: { src: string; name: string; link: string }) {
  return (
    <div>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className="secondary-text my-10 text-lg"
      >
        • {props.name}
      </motion.div>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={yMotionVariant}
      >
        <div className="max-w-[800px] max-h-[600px]">
          <img src={props.src} alt={props.name} className="max-h-[600px]" />
        </div>
      </motion.div>
    </div>
  );
}
