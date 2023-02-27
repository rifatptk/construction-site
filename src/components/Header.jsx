import { navLinks } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Container from "./Container";

export default function Header() {
  const [current, setCurrent] = useState(0);
  const [isMobileNav, setIsMobileNav] = useState(false);
  return (
    <header className="bg-brand-dark/50 backdrop-blur-md p-5 fixed top-0 w-full z-50">
      <Container>
        <div className="flex justify-between items-center">
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

            <Link
              href="#contact"
              className="bg-brand text-white hover:bg-brand/90 rounded px-4 py-2"
            >
              Contact Us
            </Link>
          </div>
          {/* mobile menu button */}
          <div className="md:hidden relative">
            <AiOutlineMenu
              className="text-brand cursor-pointer"
              size={24}
              onClick={() => setIsMobileNav(!isMobileNav)}
            />

            {isMobileNav && (
              <div className="absolute top-[50px] right-0 shadow-lg rounded bg-brand-dark/50 backdrop-blur-md px-6 py-4 w-60">
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
                    <Link
                      href="#contact"
                      className="bg-brand hover:bg-brand/90 rounded px-4 py-2 text-sm"
                    >
                      Contact Us
                    </Link>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
