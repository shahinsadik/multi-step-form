"use client";

import Image from "next/image";
import React, { useState } from "react";

const MostInterested = ({ setOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOptionSelected(true); 
  };


  const optionsData = [
    {
      label: "Learning specific career skills",
      value: "career_skills",
      image: "https://www.emojiall.com/images/240/facebook/1f4c8.png",
    },
    {
      label: "Exploring new interests",
      value: "exploring_interests",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCARIYUVFW-aOiwQ5nAZ1ao9kvD8I6VXZxTSTIIEkomkY32UM0",
    },
    {
      label: "Refreshing math foundations",
      value: "math_refresh",
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSqwyFnTaNdyFtlgNtVk5732elsSPGSP6_ATP0o1WH8ajsrEPvZ",
    },
    {
      label: "Exercising brain for sharpness",
      value: "brain_exercise",
      image:
        "https://img.freepik.com/free-vector/red-dart-arrow-hitting-target-center-dartboard_91128-1576.jpg?w=740",
    },
    {
      label: "Other",
      value: "something_else",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnVfCskFZa8nHigbSNKFiE8mNDmr_CJn7um3lX4KOaCst04exG",
    },
  ];

  return (
    <div className="mx-2 lg:w-1/2 lg:mx-auto">
      <p className="text-xl font-semibold text-center">
        This will help us personalize your experience.
      </p>
      <div className="flex flex-col  my-5 justify-center gap-5 items-center">
     
        {optionsData.map((option) => (
          <div
            key={option.value}
            className={`p-3 border w-full ${
              selectedOption === option.value ? " rounded-md border-2 border-gray-600" : ""
            }`}
            onClick={() => handleOptionClick(option.value)}
          >
            <div className="flex gap-2 p-2 items-center">
              <Image
                src={option.image}
                alt="Picture of the author"
                width={500}
                height={500}
                className="h-6 w-6  "
              />
              <p>{option.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostInterested;
