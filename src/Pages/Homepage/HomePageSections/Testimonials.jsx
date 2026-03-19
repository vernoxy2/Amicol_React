import React from "react";
import TestimonialBg from "../../../assets/HomePageAssets/TestimonialsBg.png";
import comma from "../../../assets/HomePageAssets/TestComaa.svg";
import { TestimonialsData } from "../../../Data/TestimonialsData";
import Slider from "react-slick";
import LazyImage from "../../../Components/UI/LazyImage";

const Testimonials = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 3500,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024, // tablets & down
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 640, // small phones
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      style={{ backgroundImage: `url(${TestimonialBg})` }}
      className=" bg-center bg-n0-repeat bg-cover pt-7 pb-44 overflow-hidden mb-28"
    >
      <p data-aos="fade" data-aos-delay="100" className="uppercase text-xl font-bold text-textcolor text-center">
        [ Testimonials ]
      </p>
      <h1 data-aos="fade-up" data-aos-delay="200" className="text-center text">Our customers say</h1>
      {/* Testimonial Cards */}
      <div className="slider-container px-0 container max-w-7xl pt-10">
        <Slider {...settings}>
          {TestimonialsData.map((item, index) => (
            <div data-aos="zoom-in" data-aos-delay={index * 200} key={item.id} className="px-6">
              <div className="bg-white py-7 px-9 shadow-xl shadow-black space-y-8">
                <img src={comma} alt="" />

                <p className="text-textcolor w-[90%] ">{item.review}</p>

                <div className="flex items-center gap-x-6">
                  <LazyImage
                    src={item.img}
                    alt={item.name}
                    className="w-20 h-20  rounded-full"
                  />
                  <div>
                    <h4 className="text-xl font-bold text-primary">
                      {item.name}
                    </h4>
                    <span className=" text-textcolor">{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
