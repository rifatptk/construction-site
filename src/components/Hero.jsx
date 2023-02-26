import React from "react";
import { BsCheckCircleFill } from "react-icons/bs";

export default function Hero() {
  return (
    <section className="h-screen bg-brand-dark relative">
      <picture className="brightness-50">
        <img
          src="img/banner.jpeg"
          alt=""
          className="w-full h-screen object-cover"
        />
      </picture>

      <div className="container mx-auto absolute inset-0 flex flex-col justify-center text-white">
        <h1 className="text-[64px] font-bold">
          We Prepare <br /> For The <span className="text-brand">Future</span>{" "}
        </h1>

        <p>
          We provide the best architectural design, contruction, and <br />{" "}
          building maintance services for you.
        </p>

        <div className="space-x-5 mt-6">
          <button className="bg-brand px-5 py-2 rounded">Our Services</button>
          <button className="bg-white text-brand-dark px-5 py-2 rounded">
            view Projects
          </button>
        </div>
      </div>

      <div className="absolute -bottom-20 right-6 bg-brand rounded-lg p-8 text-white space-y-4">
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
