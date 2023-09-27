"use client";
import { MobileMenu } from "./MobileMenu";
import { poppins } from "./fonts";
import React from "react";
import { animateScrollTo } from "./scrolls";

function download() {
  const URL = "/resume.pdf";
  if (typeof window !== "undefined") {
    window.location.href = URL;
  }
}

export function NavBar({}) {
  return (
    <div className="w-full h-20 sticky top-0 flex items-center justify-center">
      <div
        className={`flex flex-row text-xl w-[80%] justify-between items-center ${poppins.className}`}
      >
        <div className="flex gap-2 items-center">
          <a
            href="/"
            className="cursor-pointer rounded-full border-2 border-white h-8 w-8 flex items-center justify-center"
          >
            <div>G</div>
          </a>
          <div>Gleb Gutnik</div>
        </div>
        <div className="hidden lg:flex flex-row gap-4 items-center">
          <div
            className="cursor-pointer"
            onClick={() => animateScrollTo("about-section")}
          >
            About
          </div>
          <div
            className="cursor-pointer"
            onClick={() => animateScrollTo("tech-stack")}
          >
            Stack
          </div>
          <div
            className="cursor-pointer"
            onClick={() => animateScrollTo("projects")}
          >
            Projects
          </div>
          <div
            className="cursor-pointer"
            onClick={() => animateScrollTo("contacts-section")}
          >
            Contact
          </div>
          <a
            onClick={() => download()}
            className="cursor-pointer border-2 border-white p-2"
          >
            Hire Me
          </a>
        </div>
        <MobileMenu />
      </div>
    </div>
  );
}
