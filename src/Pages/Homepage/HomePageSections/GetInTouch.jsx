import React from "react";
import Img from "../../../assets/HomePageAssets/GetInTouch.png"
import ContactForm from "../../../Components/UI/ContactForm";
import LazyImage from "../../../Components/UI/LazyImage";

const GetInTouch = () => {
  return (
    <section className="container pt-5">
      <p data-aos="fade" data-aos-delay="100" className="uppercase font-bold text-[#E33534]">
        [ Get In Touch ]
      </p>
      <hr className="" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
        <div className="space-y-4">
          <h1 data-aos="fade-up" data-aos-delay="200" className="text-textcolor w-[90%] overflow-hidden">
            Need the Right Coating for a Critical Application?
          </h1>
          <LazyImage data-aos="zoom-out" data-aos-delay="300" data-aos-easing="ease-in-out" data-aos-duration="2000" src={Img} alt="" className="mx-auto" />
        </div>
        <ContactForm Btntext={"Speak to a Coating Expert"} />
      </div>
    </section>
  );
};

export default GetInTouch;
