"use client";

import Image from "next/image";
import React, { useState } from "react";

const DescribeBest = ({ setOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOptionSelected(true);
  };


  const optionsData = [
    {
      label: "Student or soon to be enrolled",
      value: "student",
      image:
        "https://img.freepik.com/free-vector/portrait-boy-with-brown-hair-brown-eyes_1308-146018.jpg",
    },
    {
      label: "Professional pursuing a career",
      value: "professional",
      image:
        "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg",
    },
    {
      label: "Parent of a school-age child",
      value: "parent",
      image:
        "https://img.freepik.com/free-vector/bangkok-thailand-may-25-2023-caricature-robin-williams_1308-135136.jpg",
    },
    {
      label: "Lifelong learner",
      value: "learner",
      image:
        "https://img.freepik.com/free-vector/cheerful-young-girl-vector-portrait_1308-165564.jpg",
    },
    {
      label: "Other",
      value: "other",
      image:
        "https://img.freepik.com/free-vector/teenage-boy-with-black-hair-cartoon-character_1308-133556.jpg",
    },
  ];

  return (
    <div className="mx-2 lg:w-1/2 lg:mx-auto ">
      <p className="text-xl text-center text-[#5a5a5a]">
        This will help us personalize your experience.
      </p>
      <div className="flex flex-col my-5 justify-center gap-5 items-center">
        
        {optionsData.map((option) => (
          <div
            key={option.value}
            className={` p-3 border w-full ${
              selectedOption === option.value ? "rounded-md border-2 border-gray-600 " : ""
            }`}
            onClick={() => handleOptionClick(option.value)}
          >
            <div className="flex gap-2 p-2 items-center"><Image
              src={option.image}
              alt="Picture of the author"
              width={500}
              height={500}
              className="h-6 w-6  "
            />
            <p className="">{option.label}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DescribeBest;
