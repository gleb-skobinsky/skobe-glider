"use client";

import React from "react";
import { playfair } from "./fonts";
import Image from "next/image";
import { motion } from "framer-motion";
import { xMotionVariant, yMotionVariant } from "./motionVariant";

export function Contacts({}) {
  return (
    <div id="contacts-section" className="py-10 w-full main-bg px-[10%]">
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className={` text-4xl ${playfair.className}`}
      >
        Contact me
      </motion.div>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={yMotionVariant}
        className="py-10 grid grid-cols-3 lg:grid-cols-5 gap-y-8"
      >
        <a href="https://github.com/gleb-skobinsky">
          <Image src="/github.svg" alt="Github" width={100} height={100} />
        </a>
        <a href="https://t.me/GutnikGutnik">
          <Image src="/telegram.svg" alt="Telegram" width={100} height={100} />
        </a>
        <a href="https://vk.com/gleb_gutnik">
          <Image src="/vk.svg" alt="Vk" width={100} height={100} />
        </a>
        <a href="https://mail.google.com/mail/glebgytnik@gmail.com">
          <Image src="/email.svg" alt="Email" width={100} height={100} />
        </a>
        <a href="https://discordapp.com/users/skobe_glider">
          <Image src="/diskord.svg" alt="Discord" width={100} height={100} />
        </a>
      </motion.div>
    </div>
  );
}
