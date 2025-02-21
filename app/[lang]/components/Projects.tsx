"use client";

import React from "react";
import { Project } from "./Project";
import { playfair } from "../fonts";
import { motion } from "framer-motion";
import { xMotionVariant } from "./motionVariant";

export function Projects(props: { dict: LangDict }) {
  return (
    <div id="projects" className="bg-slate-900 py-12 w-full px-[10%]">
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className={`text-4xl text-white mb-10 ${playfair.className}`}
      >
        {props.dict.Commercial}
      </motion.div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Project
          src="/vouwallet.png"
          name={"VouWallet"}
          link="https://go.vouwallet.io/"
        />
        <Project
          src="/ourmts.png"
          name={props.dict.OurMTS}
          link="https://our.mts.ru/"
        />
        <Project
          src="/geoscada.png"
          name="GeoScada"
          link="https://www.smart-dn.ru/"
        />
        <Project
          src="/cdek.png"
          name="CDEK Bonus"
          link="https://bonus.cdek.ru/"
        />
      </div>
      <motion.div
        initial="hide"
        whileInView="show"
        exit="hide"
        variants={xMotionVariant}
        className="flex flex-col gap-4 mt-8 text-lg"
      >
        <div>{props.dict.Also}</div>
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
        {props.dict.Pet}
      </motion.div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Project
          src="/chirrio.jpg"
          name={props.dict.Chirrio}
          link="https://github.com/gleb-skobinsky/compose-connect"
        />
        <Project
          src="/sysm.png"
          name={props.dict.SMT}
          link="https://github.com/gleb-skobinsky/system-metrics"
        />
        <Project
          src="/currenciesapp.png"
          name={props.dict.Curr}
          link="https://github.com/gleb-skobinsky/currencies"
        />
        <Project
          src="/darkforce.png"
          name={props.dict.DFG}
          link="https://github.com/gleb-skobinsky/frodojourney"
        />
      </div>
    </div>
  );
}
