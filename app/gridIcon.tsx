"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { yMotionVariant } from "./motionVariant";

export default function GridIcon(props: { src: string; alt: string }) {
  return (
    <motion.div
      className="grid-item"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={yMotionVariant}
    >
      <Image src={props.src} width={100} height={100} alt={props.alt} />
    </motion.div>
  );
}
