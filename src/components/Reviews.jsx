import { reviews } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import Container from "./Container";

export default function Reviews() {
  const [currentReview, setcurrentReview] = useState(1);

  return (
    <section id="services" className="bg-brand-dark text-white py-10">
      <Container>
        <div className="text-center">
          <h1 className="text-brand text-2xl font-bold ">
            What Our Client Says
          </h1>

          <p
            className="mt-5"
            dangerouslySetInnerHTML={{
              __html: reviews[currentReview].comment.split(". ").join("<br />"),
            }}
          />

          <div className="mt-5">
            <h3 className="font-semibold text-lg">
              {reviews[currentReview].name}
            </h3>
            <p>{reviews[currentReview].title}</p>
          </div>

          <div className="flex items-center gap-5 w-fit mx-auto mt-10">
            {reviews.map((review, i) => (
              <div
                key={review.id}
                onClick={() => setcurrentReview(i)}
                className={`${
                  currentReview === i
                    ? "w-20 h-20 outline outline-brand outline-offset-4"
                    : "w-16 h-16"
                } rounded-full overflow-hidden cursor-pointer`}
              >
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={100}
                  height={100}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
