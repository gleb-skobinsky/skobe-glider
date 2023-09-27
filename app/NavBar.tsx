"use client";
import { MobileMenu } from "./MobileMenu";
import { poppins } from "./fonts";
import React from "react";
import { animateScrollTo } from "./scrolls";

function download() {
  const URL =
    "https://hh.ru/resume_converter/%D0%93%D1%83%D1%82%D0%BD%D0%B8%D0%BA%20%D0%93%D0%BB%D0%B5%D0%B1%20%D0%9A%D0%BE%D0%BD%D1%81%D1%82%D0%B0%D0%BD%D1%82%D0%B8%D0%BD%D0%BE%D0%B2%D0%B8%D1%87.pdf?hash=7c8087b0ff0b0ff5590039ed1f614562613732&type=pdf&hhtmSource=resume&hhtmFrom=resume_list";
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
