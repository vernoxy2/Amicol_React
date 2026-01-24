import React from "react";
import AboutHero from "../../../assets/HomePageAssets/HomeAboutImg.png";
import AboutBgIon from "../../../assets/HomePageAssets/AboutBgIon.svg";

const HomeAbout = () => {
  return (
    <section className=" relative pb-0">
      {/* Decorative Background Icon */}
          <img
            src={AboutBgIon}
            alt=""
            className="absolute bottom-16 left-0pointer-events-none  "
          />
      <div className="container">

      
      {/* Section Heading */}
      <p className="uppercase text-sm sm:text-base lg:text-xl font-bold text-[#E33534]">
        [ About Us ]
      </p>
      <hr className="my-4 bg-black" />

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-start ">
        {/* Content */}
        <div className="w-full lg:w-5/12 space-y-5 sm:space-y-6 lg:pt-14 ">
          <h1 className="font-extrabold text-[#1E1E1E] leading-tight">
            Our Company Story
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
            <span className="font-bold">AMIT CHEMICAL INDUSTRIES</span>, an ISO
            9001:2015 Certified Company, manufactures Industrial Protective
            Paints & Coatings, Marine Paints, and Construction Chemicals under
            the brand AMICOL.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-xl">
            Established in 1988, we deliver durable, cost-effective coating
            solutions backed by 30+ years of industry expertise and a
            commitment to long-term protection and quality.
          </p>

          
        </div>

        {/* Image */}
        <div className="w-full lg:w-7/12 h-[280px] sm:h-[400px] md:h-[550px] lg:h-[650px]">
          <div className="relative w-full h-full overflow-hidden ">
            <img
              src={AboutHero}
              alt="About Us"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HomeAbout;
