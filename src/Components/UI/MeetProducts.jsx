import React from "react";

const MeetProducts = ({ MainText, SubText, typeData }) => {
  return (
    <section className="container">
      <p
        data-aos="fade"
        data-aos-delay="100"
        className="uppercase font-bold text-[#E33534] tracking-wide"
      >
        [ meet our products ]
      </p>
      <hr className="my-4 border-textcolor" />
      {/* Main Content */}
      <div className="xl:pt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
        <div className="md:w-[78%]">
          <h1 data-aos="fade-up" data-aos-delay="200">
            {MainText}
          </h1>
        </div>
        <div className="flex gap-4 md:gap-12 md:w-5/6">
          <div
            data-aos="fade"
            data-aos-delay="300"
            className="w-3 h-full bg-primary rounded-full"
          ></div>
          <p data-aos="fade-right" data-aos-delay="400" className="py-3">
            {SubText}
          </p>
        </div>
      </div>
      {/* Products types */}
      <div className="flex flex-wrap gap-3 md:gap-6 pt-6 xl:w-11/12 2xl:w-9/12">
        {typeData.map((type, index) => (
          <div className="overflow-hidden">
            
          <p
            data-aos="fade-up"
            data-aos-delay={500 + index * 100}
            key={index}
            className="bg-primary text-white px-6 py-3 text-base lg:text-xl font-bold rounded-md"
            >
            {type}
          </p>
            </div>
        ))}
      </div>
    </section>
  );
};

export default MeetProducts;
