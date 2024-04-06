"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import way from "@/image/way.jpg";
import star from "@/image/star.jpg";

const YourWay = ({ setOptionSelected }) => {
  
  useEffect(() => {
    setOptionSelected(true);
  }, [setOptionSelected]);

  return (
    <div className="mx-2 lg:mx-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between items-center">
        <div>
          <Image
            src={way}
            alt="Picture of the author"
            width={500}
            height={500}
            className="lg:h-96"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-5">
            You are on your way!
          </h1>
          <Image
            src={star}
            alt="Star Image"
            width={500}
            height={500}
            className="h-8 w-36 mt-5 mb-2"
          />
          <p className="italic">
            Through its engaging and well-structured courses, Brilliant has
            taught me mathematical concepts that I previously struggled to
            understand. I now feel confident approaching both technical job
            interviews and real-world problem-solving situations.
          </p>
          <p className="italic my-5">- Jacob S.</p>
        </div>
      </div>
    </div>
  );
};

export default YourWay;


