import React, { useState } from "react";
import AboutHero from "../../../assets/HomePageAssets/HomeAboutImg.png";
import ZoomInImg from "../../../assets/HomePageAssets/HomeAboutus/ZoomInImg.png";
import AboutIcon from "../../../assets/HomePageAssets/HomeAboutus/AboutIcon.svg";
import LazyImage from "../../../Components/UI/LazyImage";

const HomeAbout = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="pb-0 overflow-hidden relative container">
      {/* Decorative Background Icon */}
      <div 
        data-aos="fade-up" 
        data-aos-duration="1500"
        data-aos-offset="0"
        className="absolute -bottom-10 -left-10 pointer-events-none w-[70%] sm:w-[50%] lg:w-[45%] z-0"
      >
        <img
          src={AboutIcon}
          alt="About Background Icon"
          className="w-full opacity-40 lg:opacity-60"
        />
      </div>

      <div className=" relative space-y-2 md:space-y-10 z-10">
        {/* Section Heading */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="uppercase text-sm sm:text-base lg:text-xl font-bold text-[#E33534]"
        >
          [ About Us ]
        </p>
        <hr className="bg-black" />

        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-0 items-start">
          {/* Content Column */}
          <div className="w-full lg:w-5/12 space-y-3 md:space-y-6">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-extrabold text-[#1E1E1E] leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Our Company Story
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl"
            >
              <span className="font-bold uppercase">Amit Chemical Industries</span>, an ISO
              9001:2015 Certified Company, manufactures Industrial Protective
              Paints & Coatings, Marine Paints, and Construction Chemicals under
              the brand AMICOL.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl"
            >
              Established in 1988, we deliver durable, cost-effective coating
              solutions backed by 30+ years of industry expertise and a
              commitment to long-term protection and quality.
            </p>

            {/* Experience Stats - DECREASED GAP */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="flex flex-col sm:flex-row items-center pt-6 gap-6 sm:gap-8 lg:gap-6"
            >
              {/* 30+ Box */}
              <div className="bg-primary px-8 py-6 rounded-md shadow-xl shadow-primary/20 flex flex-col items-center min-w-[180px]">
                <span
                  className="text-6xl font-extrabold leading-none text-transparent"
                  style={{ WebkitTextStroke: "1px white" }}
                >
                  30+
                </span>
                <p className="text-white font-bold text-base mt-1">
                  Years expertise
                </p>
              </div>

              {/* Separator Line - Balanced and Closer */}
              <div className="w-[1px] h-28 bg-[#D9D9D9] hidden sm:block"></div>

              {/* 1988 Section */}
              <div className="flex flex-col items-center sm:items-start">
                <span className="text-5xl font-extrabold leading-none text-[#1E1E1E]">
                  1988
                </span>
                <p className="text-white bg-primary px-3 py-2 rounded-md font-bold text-sm uppercase tracking-widest mt-2">
                  Established
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="w-full lg:w-7/12 mt-10 lg:mt-0 flex justify-end">
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="relative w-full max-w-[700px] h-[300px] sm:h-[450px] md:h-[550px] lg:h-[650px] cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Main Image Container */}
              <div className="w-full h-full overflow-hidden">
                <img
                  src={isHovered ? ZoomInImg : AboutHero}
                  alt="About Us"
                  className={`w-full h-full object-contain ml-auto transition-all duration-700 ease-in-out ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
