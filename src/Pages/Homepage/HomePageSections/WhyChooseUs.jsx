import React from "react";
import Icon from "../../../assets/HomePageAssets/icons/Icon1.svg";
import HIcon from "../../../assets/HomePageAssets/icons/HIcon1.svg";

const data = [
  {
    img: Icon,
    HIcon: HIcon,
    text: "ISO 9001:2015 Certified Manufacturing",
  },
  {
    img: Icon,
    HIcon: HIcon,

    text: "30+ Years of Coating Industry Expertise",
  },
  {
    img: Icon,
    HIcon: HIcon,

    text: "Superior Corrosion Protection",
  },
  {
    img: Icon,
    HIcon: HIcon,

    text: "Long-Lasting & Cost-Effective Solutions",
  },
  {
    img: Icon,
    HIcon: HIcon,

    text: "Custom Formulations as per Requirement",
  },
  {
    img: Icon,
    HIcon: HIcon,

    text: "Trusted by Leading Industrial Clients",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-black py-32">
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div className="space-y-6 md:col-span-2">
          <p className="uppercase text-xl font-bold text-primary">
            [ why choose us ]
          </p>
          <h1 className="text-white">
            The Reason People <br /> Trust Us
          </h1>
          <hr className="bg-white w-1/2" />
        </div>
        {data.map((d, i) => (
          <div
            key={i}
            className="
      text-textcolor bg-white group rounded-3xl
      flex flex-col items-center justify-center text-center
      p-4 sm:p-6 py-8 sm:py-9
      space-y-3
      transition-all duration-300
      hover:shadow-lg
    "
          >
            {/* Icon Wrapper */}
            <div className="relative w-14 h-14 sm:w-16 sm:h-16">
              {/* Default Icon */}
              <img
                src={d.img}
                alt=""
                className="
          absolute inset-0 w-full h-full object-contain
          transition-opacity duration-300
          opacity-100
          group-hover:opacity-0
        "
              />

              {/* Hover Icon */}
              <img
                src={d.HIcon}
                alt=""
                className="
          absolute inset-0 w-full h-full object-contain
          transition-opacity duration-300
          opacity-100 md:opacity-0
          md:group-hover:opacity-100
        "
              />
            </div>

            <p className="text-base sm:text-lg lg:text-xl font-bold">
              {d.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
