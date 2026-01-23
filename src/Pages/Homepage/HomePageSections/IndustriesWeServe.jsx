import React from "react";
import IndustriesCard from "../../../Components/UI/IndustriesCard";
import { WeServeData } from "../../../Data/WeServeData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const IndustriesWeServe = () => {
  return (
    <section className="container">
      <p className="uppercase text-xl font-bold text-primary">
        [ Industries We Serve ]
      </p>
      <hr className="bg-black" />
      <div className="flex flex-wrap gap-y-4">
        <div className="md:w-1/2">
          <h1 className="text-textcolor">We serve the following industries</h1>
        </div>
        <div className="md:w-1/2 flex">
          <div className="h-full rounded-full px-0.5  bg-primary mr-6"></div>
          <div className="md:flex space-y-4 justify-between">
            <p className="text-textcolor md:max-w-[75%] max-w-[90%]">
              AMICOL provides high-performance industrial paints and coating
              solutions tailored to the specific needs of diverse industries.
              Our products are designed to deliver long-term protection,
              corrosion resistance, and durability in demanding operating
              environments.
            </p>
            <div className=" flex gap-2.5">
              <div className="h-10 w-10 border-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary text-gray-500 hover:border-primary hover:text-white duration-300 transition-colors">
                <FaChevronLeft className="text-sm " />
              </div>
              <div className="h-10 w-10 border-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary text-gray-500 hover:border-primary hover:text-white duration-300 transition-colors">
                <FaChevronRight className="text-sm " />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* cards */}
      <div className="flex flex-wrap overflow-auto gap-8 pt-12 w-full">
        {WeServeData.map((data, index) => (
          <IndustriesCard
            Img={data.img}
            id={data.id}
            key={index}
            text={data.text}
            title={data.title}
          />
        ))}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
