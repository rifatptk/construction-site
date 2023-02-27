import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import Container from "./Container";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-dark relative py-10">
      <picture className="brightness-[20%] absolute inset-0">
        <img src="img/banner.jpeg" alt="" className="h-full" />
      </picture>
      <div className="absolute inset-0 bg-gradient-to-b from from-brand-dark to-transparent" />

      <Container>
        <div className="p-10 text-white relative">
          <h1 className="text-4xl font-bold text-center">
            Leading Way In Building & Civil Construction
          </h1>

          <div className="flex flex-col md:flex-row gap-5 items-stretch my-10">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </Container>
    </section>
  );
}
