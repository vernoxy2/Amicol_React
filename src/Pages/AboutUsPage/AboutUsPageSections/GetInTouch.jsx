import React from "react";
import Img from "../../../assets/HomePageAssets/GetInTouch.png"
import ContactForm from "../../../Components/UI/ContactForm";

const GetInTouch = () => {
  return (
    <section className="container pb-40">
      <p className="uppercase text-xl font-bold text-[#E33534]">
        [ Get In Touch ]
      </p>
      <hr className="bg-black" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-2">
        <div className="space-y-4">
          <h1 className="text-textcolor w-[90%]">
            Need the Right Coating for a Critical Application?
          </h1>
          <img src={Img} alt="" className="mx-auto" />
        </div>
        <ContactForm Btntext={"Speak to a Coating Expert"} />
      </div>
    </section>
  );
};

export default GetInTouch;
