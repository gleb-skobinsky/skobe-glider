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
      <motion.a
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={yMotionVariant}
        href={props.link}
        target="_blank"
      >
        <Image src={props.src} alt={props.name} width={800} height={600} />
      </motion.a>
    </div>
  );
}
