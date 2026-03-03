import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const PrimaryBtn = ({ Btntext, className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`bg-[#E33534] text-white 
        px-4 sm:px-6 py-2 sm:py-3 
        rounded-full 
        text-base sm:text-lg md:text-xl 
        font-bold font-sofia 
        flex items-center justify-center gap-2 
        transition-all duration-300 
        hover:opacity-90 hover:scale-[1.02] 
        focus:outline-none focus:ring-2 focus:ring-[#E33534] focus:ring-offset-2
        ${className}`}
    >
      {Btntext}
      <IoIosArrowDroprightCircle className="text-xl sm:text-2xl md:text-3xl" />
    </button>
  );
};

export default PrimaryBtn;
