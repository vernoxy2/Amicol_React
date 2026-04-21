import React from "react";
import Icon from "../../../assets/HomePageAssets/icons/Icon1.svg";
import HIcon from "../../../assets/HomePageAssets/icons/Hicon1.svg";
import Heand from "../../../assets/AboutUsPageAssets/CoreValues/Heand.png";
import { CoreValuesData } from "../../../Data/CoreValuesData";
import { FiEye, FiTarget } from "react-icons/fi";
import LazyImage from "../../../Components/UI/LazyImage";
import svg1 from "../../../assets/AboutUsPageAssets/CoreValues/svg1.svg";
import svg2 from "../../../assets/AboutUsPageAssets/CoreValues/svg2.svg";
import svg3 from "../../../assets/AboutUsPageAssets/CoreValues/svg3.svg";

const WhyChooseUs = () => {
  return (
    <section className="bg-black relative py-10">
      <LazyImage
        src={Heand}
        alt={"Core Values"}
        className="absolute right-0 top-0 w-1/2 md:w-auto"
      />
      <div className="container space-y-3 md:space-y-6 relative z-[1]">
        <p
          data-aos="fade"
          data-aos-delay="100"
          className="uppercase font-bold text-primary"
        >
          [ Our Strength ]
        </p>
        <hr className="border-white " />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 relative">
          {/* Vertical Divider (Desktop only) */}
          <span className="hidden lg:block absolute left-1/2  h-44 rounded-full w-1 bg-[#E33534]" />

          {/* Vision */}
          <div className="space-y-3 md:space-y-5 overflow-hidden">
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-white flex items-center gap-3"
            >
              Our Vision
              <img src={svg1} alt="svg1" className="w-10 mx-auto sm:mx-0" />
            </h1>

            <p
              data-aos="fade-right"
              data-aos-delay="300"
              className="text-sm sm:text-base text-white leading-relaxed max-w-lg"
            >
              To be a globally trusted industrial paint and protective coating
              manufacturer, recognized for delivering high-performance
              anti-corrosive, epoxy, and polyurethane coating solutions that
              ensure long-term asset protection across diverse industrial
              environments.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-3 md:space-y-5 overflow-hidden">
            <h1
              data-aos="fade-right"
              data-aos-delay="400"
              className="text-white flex items-center gap-3"
            >
              Our Mission
              <img src={svg2} alt="svg2" className="w-10 mx-auto sm:mx-0" />
            </h1>

            <p
              data-aos="fade-right"
              data-aos-delay="500"
              className="text-sm sm:text-base text-white leading-relaxed max-w-lg"
            >
              To manufacture industrial paints and protective coatings through
              controlled processes, technical expertise, and application-
              specific formulation while ensuring consistent quality, customer
              satisfaction, and reliable coating performance across global
              markets.
            </p>
          </div>
        </div>

        <h1
          data-aos="fade"
          data-aos-delay="600"
          className="text-white flex items-center gap-3 pt-8"
        >
          Core Values
              <img src={svg3} alt="svg3" className="w-10 mx-auto sm:mx-0" />
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CoreValuesData.map((cv, index) => (
            <div
              data-aos="fade-up"
              data-aos-delay={700 + index * 100}
              key={cv.id}
              className="bg-white p-3 pr-5 rounded-xl space-y-2 group"
            >
              <div className="flex justify-between">
                <p className="text-2xl font-bold text-primary group-hover:bg-primary group-hover:text-white h-fit rounded-full p-2 duration-500 transition-all ease-in-out">
                  0{cv.id}
                </p>
                <LazyImage
                  src={cv.img}
                  alt={cv.title}
                  aria-hidden
                  className="py-2 w-1/2 "
                />
              </div>
              <hr className=" border-primary w-0 group-hover:w-full duration-500 transition-all ease-in-out" />
              <div className="flex justify-between ps-3">
                <h3 className="text-textcolor font-bold text-2xl w-1/2">
                  {cv.title}
                </h3>
                <p className="text-sm sm:text-base text-textcolor leading-relaxed max-w-xl w-1/2">
                  {cv.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
