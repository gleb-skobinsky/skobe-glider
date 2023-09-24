"use client";

import { ContactLink } from "./ContactLink";
import React from "react";
import { playfair } from "./fonts";
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
        className="py-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-8"
      >
        <ContactLink
          src="/github.svg"
          alt="Github"
          link="https://github.com/gleb-skobinsky"
        />
        <ContactLink
          src="/telegram.svg"
          alt="Telegram"
          link="https://t.me/GutnikGutnik"
        />
        <ContactLink src="/vk.svg" alt="Vk" link="https://vk.com/gleb_gutnik" />
        <ContactLink
          src="/email.svg"
          alt="Email"
          link="https://mail.google.com/mail/glebgytnik@gmail.com"
        />
        <ContactLink
          src="/diskord.svg"
          alt="Discord"
          link="https://discordapp.com/users/skobe_glider"
        />
      </motion.div>
    </div>
  );
}
