import { featuredProjects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

export default function Featured() {
  return (
    <section className="bg-brand text-white min-h-screen py-10">
      <Container>
        <h1 className="font-bold text-4xl text-brand-dark">
          Featured Projects
        </h1>

        <div className="flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden py-10">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="relative shrink-0 rounded-lg overflow-hidden text-center"
            >
              <Image
                src={project.img}
                alt={project.title}
                height={600}
                width={400}
                className="w-[360px] h-[400px] object-cover brightness-75"
              />
              <div className="absolute bottom-0 h-1/4 w-full  bg-gradient-to-t from-black/90 to-transparent">
                <h2 className="text-lg font-bold">{project.title}</h2>
                <p>{project.type}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="#"
          className="flex gap-4 items-center text-brand-dark hover:text-brand-dark/90 font-bold w-fit ml-auto"
        >
          <span>Explore All Projects</span>
          <BsFillArrowRightCircleFill />
        </Link>
      </Container>
    </section>
  );
}
