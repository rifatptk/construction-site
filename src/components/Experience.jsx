import React from "react";
import Container from "./Container";

export default function Experience() {
  return (
    <section id="about" className="bg-brand-dark text-white pt-10 pb-20">
      <Container>
        <h1 className="text-4xl mb-5 font-semibold">Experiences</h1>
        <header className="flex flex-col md:flex-row gap-10 gap-md-6">
          <p className="flex items-center gap-2 ">
            <span className="font-bold text-5xl text-brand">25+</span>
            <span>
              Years <br /> Experience
            </span>
          </p>
          <p className="flex items-center gap-2 ">
            <span className="font-bold text-5xl text-brand">378+</span>
            <span>
              Project <br /> Complete
            </span>
          </p>
          <p className="flex items-center gap-2 ">
            <span className="font-bold text-5xl text-brand">69+</span>
            <span>
              Global <br /> Award
            </span>
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-10 items-center mt-20">
          <div className="flex-1">
            <picture>
              <img src="img/experience.jpg" className="w-full rounded" alt="" />
            </picture>
          </div>
          <main className="flex-1 space-y-6">
            <h1 className="text-5xl font-bold">
              <span className="text-brand ">25 years</span> <br /> of
              experience!
            </h1>

            <p>
              We have a team of experienced professionals who have been in the
              industry for over 25 years. Our contractors have a wealth of
              knowledge and skills that they have acquired over the years,
              making them experts in their field.
            </p>
            <p>
              With 25 years of experience, our contractors have a deep
              understanding of industry standards and regulations. We ensure
              that all our projects comply with the latest safety and building
              codes, and that the final product meets or exceeds our client's
              expectations.
            </p>
          </main>
        </div>
      </Container>
    </section>
  );
}
