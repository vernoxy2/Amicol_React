import React from "react";
import AboutHero from "../../../assets/HomePageAssets/HomeAboutImg.png";
import AboutBgIon from "../../../assets/HomePageAssets/AboutBgIon.svg";
import LazyImage from "../../../Components/UI/LazyImage";

const HomeAbout = () => {
  return (
    <section className="pb-0">
      {/* Decorative Background Icon */}
      <div className="container relative space-y-2 md:space-y-4">
          <LazyImage
            src={AboutBgIon}
            alt=""
            className="absolute bottom-16 left-0pointer-events-none w-[40%] hidden lg:block"
          />

      
      {/* Section Heading */}
      <p data-aos="fade-up" data-aos-delay="100" className="uppercase text-sm sm:text-base lg:text-xl font-bold text-[#E33534]">
        [ About Us ]
      </p>
      <hr className=" bg-black" />

      <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:gap-0 items-start ">
        {/* Content */}
        <div className="w-full lg:w-5/12 space-y-3 md:space-y-6 lg:pt-14 ">
          <h1 data-aos="fade-up" data-aos-delay="200" className="font-extrabold text-[#1E1E1E] leading-tight">
            Our Company Story
          </h1>

          <p data-aos="fade-up" data-aos-delay="300" className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
            <span className="font-bold">AMIT CHEMICAL INDUSTRIES</span>, an ISO
            9001:2015 Certified Company, manufactures Industrial Protective
            Paints & Coatings, Marine Paints, and Construction Chemicals under
            the brand AMICOL.
          </p>

          <p data-aos="fade-up" data-aos-delay="400" className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
            Established in 1988, we deliver durable, cost-effective coating
            solutions backed by 30+ years of industry expertise and a
            commitment to long-term protection and quality.
          </p>
 <div className="flex flex-col sm:flex-row items-center gap-14 pt-6">
              <div className="bg-primary px-8 py-6 rounded-md shadow-xl shadow-primary/20 flex flex-col items-center">
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

              <div className="flex items-center gap-4">
                <div className="w-[1px] h-32 bg-[#D9D9D9]"></div>
                <div className="flex flex-col">
                  <span className="text-5xl font-extrabold leading-none">
                    1988
                  </span>
                  <p className="text-white bg-primary px-3 py-2 rounded-md font-bold text-sm uppercase tracking-widest mt-2">
                    Established
                  </p>
                </div>
              </div>
            </div>
          
        </div>

        {/* Image */}
        <div className="w-full lg:w-7/12 h-[280px] sm:h-[400px] md:h-[550px] lg:h-[650px]">
          <div data-aos="fade" data-aos-delay="500" data-aos-duration="1200" className="relative w-full h-full overflow-hidden ">
            <LazyImage
              src={AboutHero}
              alt="About Us"
              className="absolute inset-0 md:w-full h-full object-contain ml-auto"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HomeAbout;
