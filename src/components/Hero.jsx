import Link from "next/link";
import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import Container from "./Container";

export default function Hero() {
  return (
    <section id="home" className="h-screen bg-brand-dark relative">
      <picture className="brightness-50">
        <img
          src="img/banner.jpeg"
          alt=""
          className="w-full h-screen object-cover"
        />
      </picture>

      <div className="absolute inset-0 flex flex-col justify-center text-white">
        <Container>
          <h1 className="text-4xl md:text-[64px] font-bold my-5">
            We Prepare <br /> For The{" "}
            <span className="text-brand inline-block mt-8">Future</span>{" "}
          </h1>

          <p>
            We provide the best architectural design, contruction, and <br />{" "}
            building maintance services for you.
          </p>

          <div className="space-x-5 mt-6">
            <Link href="#services" className="bg-brand px-5 py-2 rounded">
              Our Services
            </Link>
            <Link
              href="#projects"
              className="bg-white text-brand-dark px-5 py-2 rounded"
            >
              View Projects
            </Link>
          </div>
        </Container>
      </div>

      <div className=" hidden md:block absolute -bottom-20 right-6 bg-brand rounded-lg p-8 text-white space-y-4">
        <div className="flex items-center gap-4">
          <BsCheckCircleFill />
          <span>Quality control system, 100% satisfaction guarantee</span>
        </div>
        <div className="flex items-center gap-4">
          <BsCheckCircleFill />
          <span>Quality control system, 100% satisfaction guarantee</span>
        </div>
        <div className="flex items-center gap-4">
          <BsCheckCircleFill />
          <span>Quality control system, 100% satisfaction guarantee</span>
        </div>
      </div>
    </section>
  );
}
