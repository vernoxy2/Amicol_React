import React, { useState } from "react";
import AboutHero from "../../../assets/HomePageAssets/HomeAboutus/AboutHero.png";
import ZoomInImg from "../../../assets/HomePageAssets/HomeAboutus/ZoomInImg.png";
import AboutIcon from "../../../assets/HomePageAssets/HomeAboutus/AboutIcon.svg";
import LazyImage from "../../../Components/UI/LazyImage";
import ZoomIn from "../../../assets/HomePageAssets/HomeAboutus/ZoomIn.svg";
import ZoomOut from "../../../assets/HomePageAssets/HomeAboutus/ZoomOut.svg";

const HomeAbout = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const isZoomed = isHovered || isTouched;

  return (
    // NO overflow-hidden — breaks negative z-index
    <section className="pb-20 xl:pb-32 relative container">
      {/* ── Decorative Background Icon — desktop only ── */}
      <div className="absolute inset-0 pointer-events-none hidden xl:block">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="0"
          className="absolute bottom-20 -left-2 w-[45%]"
          style={{ zIndex: -1 }}
        >
          {/* <img src={AboutIcon} alt="" className="w-full opacity-40" /> */}
          <style>{`
   @keyframes iconFloat {
  0%   { transform: translateY(60px); opacity: 0; }
  20%  { transform: translateY(0px);  opacity: 0.4; }
  50%  { transform: translateY(0px);  opacity: 0.4; }
  80%  { transform: translateY(0px);  opacity: 0.4; }
  100% { transform: translateY(60px); opacity: 0; }
}
    .animate-icon-float {
      animation: iconFloat 6s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    }
  `}</style>
          <img
            src={AboutIcon}
            alt=""
            className="w-full opacity-40 animate-icon-float"
          />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div
        className="relative space-y-2 md:space-y-10 -mt-10"
        style={{ zIndex: 1 }}
      >
        {/* Section Heading */}
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="uppercase text-sm sm:text-base lg:text-xl font-bold text-[#E33534] -translate-y-4"
        >
          [ About Us ]
        </p>
        <hr className="bg-black" />

        <div className="flex flex-col xl:flex-row xl:gap-0 xl:items-start gap-6 md:gap-10">
          {/* ... content ... */}
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
              className="flex flex-col sm:flex-row items-center justify-center xl:justify-start pt-10 mt-2 gap-6 sm:gap-8 w-full"
            >
              <div
                className="bg-primary px-8 py-6 rounded-md shadow-xl shadow-primary/20 flex flex-col items-center min-w-[180px]"
                style={{ position: "relative", zIndex: 2 }}
              >
                <span className="text-6xl font-extrabold leading-none text-white">
                  30+
                </span>
                <p className="text-white font-bold text-base mt-1">
                  Years expertise
                </p>
              </div>

              {/* Separator */}
              <div className="w-[1px] h-28 bg-[#D9D9D9] hidden sm:block "></div>

              {/* 1988 */}
              <div className="flex flex-col items-center">
                <span className="text-5xl font-extrabold leading-none text-[#1E1E1E]">
                  1988
                </span>
                <p className="text-white bg-primary px-3 py-2 rounded-md font-bold text-sm tracking-widest mt-2">
                  Established
                </p>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-7/12 xl:mt-0 flex justify-center xl:justify-end">
            {/* Space holder with AOS - maintains layout stability */}
            <div
              data-aos="fade-left"
              data-aos-delay="500"
              className="w-full xl:max-w-[700px] h-[260px] sm:h-[380px] md:h-[440px] lg:h-[480px] xl:h-[600px] relative"
            >
              {/* ── Decorative Zoom Circles (Figma Style) ── */}
              <div className="absolute -top-24 -right-40 sm:-top-32 sm:-right-52 w-64 h-64 sm:w-96 sm:h-96 pointer-events-none z-0">
                <style>
                  {`
                    @keyframes balloonBreathing {
      0%   { transform: scale(1);    }
        30%  { transform: scale(1.12); }
        50%  { transform: scale(1.12); }
       70%  { transform: scale(0.88); }
      90%  { transform: scale(0.88); }
      100% { transform: scale(1);    }
  }
      .animate-balloon {
      animation: balloonBreathing 18s cubic-bezier(0.45, 0, 0.55, 1) infinite;
    }
                  `}
                </style>

                <div className="relative w-full h-full animate-balloon opacity-[0.21]">
                  <img
                    src={ZoomIn}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{
                      filter:
                        "invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                    }}
                  />
                  <img
                    src={ZoomOut}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{
                      filter:
                        "invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)",
                    }}
                  />
                </div>
              </div>

              {/* Animated Container - expands DOWNWARDS without pushing other elements */}
              <div
                className={`absolute top-0 left-0 right-0 transition-all duration-700 ease-in-out cursor-pointer overflow-hidden rounded-md shadow-black/20 ${
                  isZoomed
                    ? "h-[115%] z-20 shadow-2xl"
                    : "h-full z-10 shadow-lg"
                }`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={() => setIsTouched(true)}
                onTouchEnd={() => setTimeout(() => setIsTouched(false), 600)}
              >
                <img
                  src={isZoomed ? ZoomInImg : AboutHero}
                  alt="About Us"
                  className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
                    isZoomed ? "scale-110" : "scale-100"
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
