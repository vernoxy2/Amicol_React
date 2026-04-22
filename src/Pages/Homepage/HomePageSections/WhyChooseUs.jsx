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
import WhyChooseUsImg from "../../../assets/HomePageAssets/Homepagesection/WhyChooseUsImg.png";
import HandPiant from "../../../assets/HomePageAssets/Homepagesection/HandPaint.png";
import Img1 from "../../../assets/HomePageAssets/icons/whychooseus/Img1.svg";
import Img2 from "../../../assets/HomePageAssets/icons/whychooseus/Img2.svg";
import Img3 from "../../../assets/HomePageAssets/icons/whychooseus/Img3.svg";
import Img4 from "../../../assets/HomePageAssets/icons/whychooseus/Img4.svg";
import Img5 from "../../../assets/HomePageAssets/icons/whychooseus/Img5.svg";
import Img6 from "../../../assets/HomePageAssets/icons/whychooseus/Img6.svg";
import ImgRed1 from "../../../assets/HomePageAssets/icons/whychooseus/ImgRed1.svg";
import ImgRed2 from "../../../assets/HomePageAssets/icons/whychooseus/ImgRed2.svg";
import ImgRed3 from "../../../assets/HomePageAssets/icons/whychooseus/ImgRed3.svg";
import ImgRed4 from "../../../assets/HomePageAssets/icons/whychooseus/ImgRed4.svg";
import ImgRed5 from "../../../assets/HomePageAssets/icons/whychooseus/ImgRed5.svg";
import ImgRed6 from "../../../assets/HomePageAssets/icons/whychooseus/ImgRed6.svg";

const data = [
  {
    img: Img1,
    HIcon: ImgRed1,
    text: "ISO 9001:2015 Certified Manufacturing",
  },
  {
    img: Img2,
    HIcon: ImgRed2,

    text: "30+ Years of Coating Industry Expertise",
  },
  {
    img: Img3,
    HIcon: ImgRed3,

    text: "Superior Corrosion Protection",
  },
  {
    img: Img4,
    HIcon: ImgRed4,

    text: "Long-Lasting & Cost-Effective Solutions",
  },
  {
    img: Img5,
    HIcon: ImgRed5,

    text: "Custom Formulations as per Requirement",
  },
  {
    img: Img6,
    HIcon: ImgRed6,

    text: "Trusted by Leading Industrial Clients",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-14 md:py-32 bg-black relative overflow-hidden">
      <div
        className="absolute right-0 bottom-0 
  hidden
  sm:block
  md:h-full md:w-auto
  xl:top-0 xl:bottom-auto xl:h-full xl:w-[10%] 
  pointer-events-none"
      >
        <img
          src={HandPiant}
          alt=""
          className="w-full h-full object-cover object-left"
        />
      </div>
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
