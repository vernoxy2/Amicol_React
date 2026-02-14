import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import LazyImage from "./LazyImage";

const IndustriesCard = ({ Img, text, title, id }) => {
  return (
    <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col sm:flex-row shadow-lg">
      {/* Left Section */}
      <div className="w-full sm:w-7/12 bg-primary p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between relative min-h-[280px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px]">
        <div className="relative z-10">
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold md:mb-5 lg:mb-6 leading-tight pr-8 sm:pr-0">
            {title}
          </h2>
        </div>
        
        {/* Large number watermark */}
        <div className="absolute -bottom-4 sm:-bottom-8 md:-bottom-10 lg:-bottom-12 -left-2 sm:-left-4 md:-left-6 text-[#FF5150] text-[230px] font-bold font-sofia leading-none opacity-40 sm:opacity-50 md:opacity-100 pointer-events-none">
          0{id}
        </div>

        <div className="relative z-10 flex flex-col xs:flex-row justify-between gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start xs:items-end mt-auto pt-4">
          <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed flex-1 max-w-full xs:max-w-[70%] sm:max-w-md">
            {text}
          </p>
          <button 
            className="bg-white rounded-full w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center hover:bg-gray-100 active:scale-95 transition-all flex-shrink-0 self-end xs:self-auto"
            aria-label={`Learn more about ${title}`}
          >
            <FaChevronRight className="text-base xs:text-lg sm:text-xl md:text-2xl text-primary" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full sm:w-5/12 bg-textcolor min-h-[180px] xs:min-h-[200px] sm:min-h-[320px] md:min-h-[380px] lg:min-h-[420px] order-first sm:order-last">
        <LazyImage 
          src={Img} 
          alt={`${title} industry`} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default IndustriesCard;