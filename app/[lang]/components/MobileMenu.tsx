"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { animateScrollTo } from "./scrolls";
import LocaleSelector from "./LocaleSelector";
import { download } from "./NavBar";

function disableScroll() {
  document.body.style.cssText += "overflow:clip";
}

function enableScroll() {
  document.body.style.cssText += "overflow:scroll";
}

export function MobileMenu(props: { dict: LangDict }) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <motion.section className="MOBILE-MENU absolute top-0 right-0 flex flex-col lg:hidden z-10">
      {isNavOpen ? (
        <div
          className="CROSS-ICON absolute top-0 z-30 right-0 px-8 py-8"
          onClick={() => {
            setIsNavOpen(false);
            enableScroll();
          }}
        >
          <svg
            className="h-8 w-8 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      ) : (
        <div
          className={`HAMBURGER-ICON absolute top-0 right-0 z-30 p-10 space-y-2 ${
            isNavOpen ? "hidden" : "block"
          }`}
          onClick={() => {
            setIsNavOpen(true);
            disableScroll();
          }}
        >
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
        </div>
      )}
      <div
        className={`flex flex-col overscroll-contain justify-evenly items-center top-0 min-h-[100vh] z-10 mobileMenu ${
          isNavOpen ? "showMenuNav" : "hideMenuNav"
        }`}
      >
        <ul className="NAVIGATION-MOBILE-OPEN flex flex-col justify-between gap-y-6">
          <LocaleSelector langDict={props.dict} />
          <li className="border-b border-gray-400 uppercase">
            <div
              onClick={() => {
                setIsNavOpen(false);
                animateScrollTo("about-section");
                enableScroll();
              }}
            >
              {props.dict.About}
            </div>
          </li>
          <li className="border-b border-gray-400 uppercase">
            <div
              onClick={() => {
                setIsNavOpen(false);
                animateScrollTo("tech-stack");
                enableScroll();
              }}
            >
              {props.dict.Stack}
            </div>
          </li>
          <li className="border-b border-gray-400 uppercase">
            <div
              onClick={() => {
                setIsNavOpen(false);
                animateScrollTo("projects");
                enableScroll();
              }}
            >
              {props.dict.Projects}
            </div>
          </li>
          <li className="border-b border-gray-400 uppercase">
            <div
              onClick={() => {
                setIsNavOpen(false);
                animateScrollTo("contacts-section");
                enableScroll();
              }}
            >
              {props.dict.Contact}
            </div>
          </li>
          <a
            onClick={() => download()}
            className="cursor-pointer border-2 border-white p-2"
          >
            {props.dict.HireMe}
          </a>
        </ul>
      </div>
    </motion.section>
  );
}
