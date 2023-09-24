"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { motionVariant } from "./motionVariant";

export function AvatarImage({}) {
  return (
    <motion.div
      className="grid-icon px-10"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={motionVariant}
    >
      <Image
        className="rounded-full border-2 border-white my-20"
        src="/glider.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </motion.div>
  );
}
