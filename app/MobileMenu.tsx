"use client";

import { useState } from "react";

export function MobileMenu({}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <section className="MOBILE-MENU absolute top-0 right-0 flex flex-col lg:hidden z-10">
      <div
        className={`HAMBURGER-ICON p-10 space-y-2 ${
          isNavOpen ? "hidden" : "block"
        }`}
        onClick={() => setIsNavOpen((prev) => !prev)}
      >
        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
        <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
      </div>
      <div className={`sticky ${isNavOpen ? "showMenuNav" : "hideMenuNav"}`}>
        <div
          className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
          onClick={() => setIsNavOpen(false)}
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
        <ul className="NAVIGATION-MOBILE-OPEN flex flex-col justify-between gap-y-6">
          <li className="border-b border-gray-400 uppercase">
            <a href="/">About</a>
          </li>
          <li className="border-b border-gray-400 uppercase">
            <a href="/">Projects</a>
          </li>
          <li className="border-b border-gray-400 uppercase">
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
