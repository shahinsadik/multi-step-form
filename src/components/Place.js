"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import placeimg from "@/image/placeimg.jpg";
const Place = ({ setOptionSelected }) => {



  useEffect(() => {
    setOptionSelected(true);
  }, [setOptionSelected]);

  return (
    <div className="">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 justify-between items-center mx-2 mb-5 lg:mx-20">
        <div>
          <Image
            src={placeimg}
            alt="Picture of the author"
            width={500}
            height={500}
            className="lg:h-96"
          />
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-center mb-5">You are in the right place.</h1>
          <p>Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You will interact with concepts and solve fun problems
            in math, science, and computer science.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Place;
