import React from "react";
import { FaChevronRight } from "react-icons/fa6";


const IndustriesCard = ({ Img, text, title, id }) => {
  return (
    <div className="w-9/12 rounded-3xl overflow-hidden flex">
      {/* Left Section */}
      <div className="w-7/12 bg-primary p-6 md:12 flex flex-col justify-between relative">
        <div>
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
            {title}
          </h2>
          {/* Large number watermark */}
          <div className="absolute -bottom-12 -left-6 text-[#FF5150] text-[120px] md:text-[230px] font-bold font-sofia leading-none">
            0{id}
          </div>
        </div>
        <div className="relative z-10 flex justify-between gap-10">
          <p className="text-white text-sm md:text-lg leading-relaxed max-w-md">
            {text}
          </p>
          <button className="mt-4 md:mt-6 bg-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors">
            {/* <ChevronRight className="text-red-600" size={20} /> */}
            {/* <IoIosArrowDroprightCircle className="text-2xl md:text-3xl " /> */}
            <FaChevronRight className="text-xl md:text-2xl " />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-5/12 bg-textcolor">
        <img src={Img} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default IndustriesCard;
