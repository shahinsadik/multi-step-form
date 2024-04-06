"use client";
import React, { useState, useEffect } from "react";
import DescribeBest from "./DescribeBest";
import MostInterested from "./MostInterested";
import Place from "./Place";
import MathLevel from "./MathLevel";
import YourWay from "./YourWay";
import LearningPath from "./LearningPath";
import FindingPath from "./FindingPath";

const Form = () => {
  const [page, setPage] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);
  const [loading, setLoading] = useState(false);

  const formTitle = [
    "Which describes you best?",
    "Which are you most interested in?",
    "",
    "What is your math comfort level?",
    "",
    "",
    "Learning paths based on your answers",
  ];

  useEffect(() => {
    if (page === 5) {
      
      const timer = setTimeout(() => {
        setPage(page + 1); 
      }, 3000); 

      
      return () => clearTimeout(timer);
    }
  }, [page]);

  const handleNextPage = () => {
    setPage((currentPage) => currentPage + 1);
    setOptionSelected(false); 
  };

  const handleOptionSelected = () => {
    setOptionSelected(true);
  };

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <DescribeBest setOptionSelected={handleOptionSelected} />;
      case 1:
        return <MostInterested setOptionSelected={handleOptionSelected} />;
      case 2:
        return (
          <Place
            setOptionSelected={handleOptionSelected}
            optionSelected={true}
          />
        );
      case 3:
        return <MathLevel setOptionSelected={handleOptionSelected} />;
      case 4:
        return <YourWay setOptionSelected={handleOptionSelected} />;
      case 5:
        return <LearningPath />;
      case 6:
        return <FindingPath setOptionSelected={handleOptionSelected} />;
      default:
        return <MostInterested setOptionSelected={handleOptionSelected} />;
    }
  };

  return (
    <div className="form">
      {(page !== 5 && page !== 6) && (
        <div className="progressbar mx-20 mt-5 rounded border-2">
          <div
            className="h-2 bg-[#30a386]"
            style={{
              width:
                page === 0
                  ? "20%"
                  : page === 1
                  ? "40%"
                  : page === 2
                  ? "65%"
                  : page === 3
                  ? "80%"
                  : "",
            }}
          ></div>
        </div>
      )}
      <div className="form-container"></div>
      <div className="form-header my-5">
        <h1 className="text-2xl font-bold text-center">{formTitle[page]}</h1>
      </div>

      <div className="form-body">{pageDisplay()}</div>
      <div className="form-footer flex justify-center items-center">
        {(page !== 5 && page !== 6) && (
          <button
            disabled={!optionSelected}
            onClick={handleNextPage}
            className={`px-3 py-2 rounded-md ${
              optionSelected ? "bg-black text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Form;
