const LearningPath = () => {
  return (
    <div className="w-1/2 h-screen flex justify-center items-center mx-auto ">
      <div className="">
        <div className="flex justify-center items-center">
          <svg
            className="animate-spin h-16 w-16 text-[#e2b252] text-center"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-100"
              cx="12"
              cy="12"
              r="10"
              stroke="#f1b134"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-100"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V2.5A1.5 1.5 0 0010.5 1h-1A1.5 1.5 0 008 2.5V4a8 8 0 014 7.33V8.5a1.5 1.5 0 10-3 0v5.23A8 8 0 014 12z"
            ></path>
          </svg>
        </div>
          <h1 className="text-2xl text-center font-semibold mt-5">
            Finding learning path recommendations for you based on your
            responses
          </h1>
      </div>
    </div>
  );
};

export default LearningPath;
