import React, { useState } from "react";
import Image from "next/image";
import img1 from "@/image/1.jpg";
import img2 from "@/image/2.jpg";
import img3 from "@/image/3.jpg";
import img4 from "@/image/4.jpg";

const MathLevel = ({ setOptionSelected }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setOptionSelected(true);
  };

  const images = [img1, img2, img3, img4];

  return (
    <div className="lg:w-1/2 p-2 mx-auto ">
      <h1 className=" text-center text-[#5a5a5a]">
        Choose the highest level you feel confident in you can always adjust
        later.
      </h1>
      <div className="lg:flex justify-center items-center gap-5 my-5">
        {images.map((item, index) => (
          <div
            key={index}
            className={` border w-full ${
              selectedOption === item ? " m-2 border-2 border-black" : ""
            }`}
            onClick={() => handleOptionClick(item)}
          >
            <Image
              src={item}
              alt={`Picture ${index}`}
              width={500}
              height={500}
              className=" h-50 w-72 p-5"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MathLevel;
