import React from "react";
import Icon from "../../../assets/HomePageAssets/icons/Icon1.svg";
import HIcon from "../../../assets/HomePageAssets/icons/HIcon1.svg";
import { FiEye, FiTarget } from "react-icons/fi";


const WhyChooseUs = () => {
  return (
    <section className="bg-black ">
      <div className="container space-y-3 md:space-y-6">
        <p className="uppercase text-xl font-bold text-primary">
          [ why choose us ]
        </p>
        <hr className="bg-white " />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 relative">
          {/* Vertical Divider (Desktop only) */}
          <span className="hidden lg:block absolute left-1/2  h-44 rounded-full w-1 bg-[#E33534]" />

          {/* Vision */}
          <div className="space-y-5">
            <h1 className="text-white flex items-center gap-3">
              Our Vision
              <FiEye className="text-white" />
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
              To be a globally trusted industrial paint and protective coating
              manufacturer, recognized for delivering high-performance
              anti-corrosive, epoxy, and polyurethane coating solutions that
              ensure long-term asset protection across diverse industrial
              environments.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-5">
            <h1 className="text-white flex items-center gap-3">
              Our Mission
              <FiTarget className="text-white" />
            </h1>

            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl">
              To manufacture industrial paints and protective coatings through
              controlled processes, technical expertise, and application-
              specific formulation while ensuring consistent quality, customer
              satisfaction, and reliable coating performance across global
              markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
