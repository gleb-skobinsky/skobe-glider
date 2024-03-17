"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { yMotionVariant } from "./motionVariant";
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";

export default function GridIcon(props: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const doOpen = () => {
    setIsOpen(true);
  };
  const doClose = () => {
    setIsOpen(false);
  };
  return (
    <motion.div
      className="grid-item"
      initial="hide"
      whileInView="show"
      exit="hide"
      variants={yMotionVariant}
    >
      <Tooltip
        isOpen={isOpen}
        showArrow={true}
        color="primary"
        content={props.alt}
      >
        <Image
          src={props.src}
          width={100}
          height={100}
          alt={props.alt}
          onClick={doOpen}
          onMouseLeave={doClose}
          onMouseEnter={doOpen}
        />
      </Tooltip>
    </motion.div>
  );
}
