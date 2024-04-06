import Image from "next/image";
import finding from "@/image/finding.gif";
const FindingPath = () => {
  return (
    <div className="lg:mx-20 mx-2">
      <h1 className="text-center text-[#5a5a5a] my-10">
        Choose one to get started. You can switch anytime.
      </h1>
      <div className="lg:flex gap-10">
        <div className="relative ">
          <span className="absolute -top-3 left-1/3  text-right bg-yellow-600 px-2 rounded-l-full rounded-r-full">
            {" "}
            Most popular
          </span>
          <div className="flex flex-col lg:flex-row gap-5 border rounded-lg p-5 items-center">
            <p className="">
              Foundational Math Build your foundational skills in algebra,
              geometry, and probability.
            </p>
            <Image
              src={finding}
              alt="Picture of the author"
              width={500}
              height={500}
              className="h-16 w-16"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  gap-5 border rounded-lg p-5 items-center">
          <p>
            Mathematical Thinking Build your foundational skills in algebra,
            geometry, and probability.
          </p>
          <Image
            src={finding}
            alt="Picture of the author"
            width={500}
            height={500}
            className="h-16 w-16"
          />
        </div>
      </div>
    </div>
  );
};

export default FindingPath;
