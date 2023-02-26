import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Header() {
  const [current, setCurrent] = useState(0);
  const [isMobileNav, setIsMobileNav] = useState(false);
  return (
    <header id="home" className="bg-brand-dark p-5 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="uppercase text-2xl text-brand font-bold ">
          riconstruct
        </h1>
        <div className="hidden md:flex items-center justify-between gap-10">
          <nav className="text-white">
            <ul className="flex items-center gap-6">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    className={`${
                      i === current
                        ? "border-b-brand border-b-2 text-brand"
                        : ""
                    }`}
                    onClick={() => setCurrent(i)}
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button className="bg-brand text-white hover:bg-brand/90 rounded px-4 py-2">
            Contact Us
          </button>
        </div>
        {/* mobile menu button */}
        <div className="md:hidden relative">
          <AiOutlineMenu
            className="text-brand"
            size={24}
            onClick={() => setIsMobileNav(!isMobileNav)}
          />

          {isMobileNav && (
            <div className="absolute top-10 right-0 bg-brand-dark px-6 py-4 w-60">
              <nav className="text-white">
                <ul className="flex flex-col gap-4">
                  {navLinks.map((link, i) => (
                    <li key={i}>
                      <Link
                        className={`${
                          i === current
                            ? "border-b-brand border-b-2 text-brand"
                            : ""
                        }`}
                        onClick={() => setCurrent(i)}
                        href={link.href}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                  <button className="bg-brand hover:bg-brand/90 rounded px-4 py-2 text-sm">
                    Contact Us
                  </button>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
