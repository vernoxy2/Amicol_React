import React, { useState } from "react";
import AboutHero from "../../../assets/HomePageAssets/HomeAboutImg.png";
import ZoomInImg from "../../../assets/HomePageAssets/HomeAboutus/ZoomInImg.png";
import AboutIcon from "../../../assets/HomePageAssets/HomeAboutus/AboutIcon.svg";
import LazyImage from "../../../Components/UI/LazyImage";

const HomeAbout = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const isZoomed = isHovered || isTouched;

  return (
    // NO overflow-hidden — breaks negative z-index
    <section className="pb-0 relative container">
      {/* ── Decorative Background Icon — desktop only ── */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="0"
          className="absolute bottom-0 -left-2 translate-y-1/3 w-[45%]"
          style={{ zIndex: -1 }}
        >
          <img src={AboutIcon} alt="" className="w-full opacity-40" />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative space-y-2 md:space-y-10" style={{ zIndex: 1 }}>
        {/* Section Heading */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="uppercase text-sm sm:text-base lg:text-xl font-bold text-[#E33534]"
        >
          [ About Us ]
        </p>
        <hr className="bg-black" />

        {/* Layout:
            - mobile / iPad Mini / iPad Pro  → flex-col (content top, image bottom)
            - xl+ desktop only               → flex-row (side by side)         */}
        <div className="flex flex-col xl:flex-row xl:gap-0 xl:items-start gap-6 md:gap-10">
          {/* ── Content Column ── */}
          <div className="w-full xl:w-5/12 space-y-3 md:space-y-6">
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="font-extrabold text-[#1E1E1E] leading-tight text-3xl sm:text-4xl md:text-5xl xl:text-6xl"
            >
              Our Company Story
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-sm sm:text-base md:text-lg text-gray-700 w-full"
            >
              <span className="font-bold uppercase">
                Amit Chemical Industries
              </span>
              , an ISO 9001:2015 Certified Company, manufactures Industrial
              Protective Paints &amp; Coatings, Marine Paints, and Construction
              Chemicals under the brand AMICOL.
            </p>

            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-sm sm:text-base md:text-lg text-gray-700 w-full mb-6"
            >
              Established in 1988, we deliver durable, cost-effective coating
              solutions backed by 30+ years of industry expertise and a
              commitment to long-term protection and quality.
            </p>

            {/* ── Stats — centered on mobile/tablet, left on desktop ── */}
            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-offset="120"
              className="flex flex-col sm:flex-row items-center justify-center xl:justify-start pt-10 mt-4 gap-6 sm:gap-8 w-full"
            >
              {/* 30+ Box */}
              <div
                className="bg-primary px-8 py-6 rounded-md shadow-xl shadow-primary/20 flex flex-col items-center min-w-[180px]"
                style={{ position: "relative", zIndex: 2 }}
              >
                <span
                  className="text-6xl font-extrabold leading-none"
                  style={{
                    WebkitTextStroke: "1px white",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  30+
                </span>
                <p className="text-white font-bold text-base mt-1">
                  Years expertise
                </p>
              </div>

              {/* Separator */}
              <div className="w-[1px] h-28 bg-[#D9D9D9] hidden sm:block"></div>

              {/* 1988 */}
              <div className="flex flex-col items-center">
                <span className="text-5xl font-extrabold leading-none text-[#1E1E1E]">
                  1988
                </span>
                <p className="text-white bg-primary px-3 py-2 rounded-md font-bold text-sm uppercase tracking-widest mt-2">
                  Established
                </p>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-7/12 xl:mt-0 flex justify-center xl:justify-end">
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="w-full xl:max-w-[700px] h-[260px] sm:h-[380px] md:h-[440px] lg:h-[480px] xl:h-[600px] cursor-pointer overflow-hidden rounded-md"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchStart={() => setIsTouched(true)}
              onTouchEnd={() => setTimeout(() => setIsTouched(false), 600)}
            >
              <img
                src={isZoomed ? ZoomInImg : AboutHero}
                alt="About Us"
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                  isZoomed ? "scale-105" : "scale-100"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
