import React from "react";
import Icon from "../../../assets/HomePageAssets/icons/Icon1.svg";
import HIcon from "../../../assets/HomePageAssets/icons/Hicon1.svg";
import Icon2 from "../../../assets/HomePageAssets/icons/Icon2.svg";
import HIcon2 from "../../../assets/HomePageAssets/icons/Hicon2.svg";
import Icon3 from "../../../assets/HomePageAssets/icons/Icon3.svg";
import HIcon3 from "../../../assets/HomePageAssets/icons/Hicon3.svg";
import Icon4 from "../../../assets/HomePageAssets/icons/Icon4.svg";
import HIcon4 from "../../../assets/HomePageAssets/icons/Hicon4.svg";
import Icon5 from "../../../assets/HomePageAssets/icons/Icon5.svg";
import HIcon5 from "../../../assets/HomePageAssets/icons/Hicon5.svg";
import Icon6 from "../../../assets/HomePageAssets/icons/Icon6.svg";
import HIcon6 from "../../../assets/HomePageAssets/icons/Hicon6.svg";
import LazyImage from "../../../Components/UI/LazyImage";
import WhyChooseUsImg from "../../../assets/HomePageAssets/Homepagesection/WhyChooseUsImg.png"

const data = [
  {
    img: Icon,
    HIcon: HIcon,
    text: "ISO 9001:2015 Certified Manufacturing",
  },
  {
    img: Icon2,
    HIcon: HIcon2,

    text: "30+ Years of Coating Industry Expertise",
  },
  {
    img: Icon3,
    HIcon: HIcon3,

    text: "Superior Corrosion Protection",
  },
  {
    img: Icon4,
    HIcon: HIcon4,

    text: "Long-Lasting & Cost-Effective Solutions",
  },
  {
    img: Icon5,
    HIcon: HIcon5,

    text: "Custom Formulations as per Requirement",
  },
  {
    img: Icon6,
    HIcon: HIcon6,

    text: "Trusted by Leading Industrial Clients",
  },
];

const WhyChooseUs = () => {
  return (
    <section className=" py-14 md:py-32"
    
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        <div className="space-y-6 md:col-span-2">
          <p
            data-aos="fade"
            data-aos-delay="100"
            className="uppercase font-bold text-primary"
          >
            [ why choose us ]
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white overflow-hidden"
          >
            The Reason People <br /> Trust Us
          </h1>
          <hr
            data-aos="fade-up"
            data-aos-delay="300"
            className="bg-white w-1/2"
          />
        </div>
        {data.map((d, i) => (
          <div
            data-aos="zoom"
            data-aos-delay={400 + i * 100}
            data-aos-duration="1200"
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
              <LazyImage
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
              <LazyImage
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
