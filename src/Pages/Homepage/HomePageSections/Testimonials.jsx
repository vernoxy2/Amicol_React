import React from "react";
import TestimonialBg from "../../../assets/HomePageAssets/TestimonialsBg.png";

const Testimonials = () => {
  return (
    <section
      style={{ backgroundImage: `url(${TestimonialBg})` }}
      className=" bg-center bg-n0-repeat bg-cover pt-7"
    >
      <p className="uppercase text-xl font-bold text-textcolor text-center">
        [ Testimonials ]
      </p>
      <h1 className="text-center text">Our customers say</h1>
      {/* Testimonial Cards */}
      <div className="container flex w-full border border-white">
        <div className="flex justify-between w-full">
          <div className="p-7 bg-white min-w-xl"></div>
          <div className="p-7 bg-white min-w-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
