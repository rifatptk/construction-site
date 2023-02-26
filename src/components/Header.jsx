import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { GoGlobe } from "react-icons/go";

export default function Header() {
  return (
    <header id="home" className="bg-brand-dark p-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="uppercase text-2xl text-brand font-bold ">
          riconstruct
        </h1>
        <nav className="text-white">
          <ul className="flex items-center gap-6">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-white flex items-center gap-5">
          <div className="flex gap-2 items-center">
            <GoGlobe />
            <select name="" id="" className="bg-transparent">
              <option value="en">English</option>
              <option value="en">Bangla</option>
            </select>
          </div>
          <button className="bg-brand hover:bg-brand/90 rounded px-4 py-2">
            Contact Us
          </button>
        </div>
      </div>
    </header>
  );
}
