import React from "react";
import { ProductListData } from "../../../Data/ProductListData";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import LazyImage from "../../../Components/UI/LazyImage";
import { useNavigate } from "react-router-dom";

const HomePro = () => {
  const navigate = useNavigate();
  return (
    <section className="container xl:mt-12 ">
      <p
        data-aos="fade"
        data-aos-delay="100"
        className="uppercase font-bold text-primary text-center"
      >
        [ Our Products ]
      </p>
      <h1
        data-aos="fade-up"
        data-aos-delay="200"
        className=" font-extrabold text-textcolor text-center max-w-2xl mx-auto"
      >
        Industrial Paints & Coatings Manufacturer in Vapi
      </h1>
      <p
        data-aos="fade-up"
        data-aos-delay="300"
        className="text-center text-textcolor max-w-2xl mx-auto"
      >
        <span className="font-bold">AMICOL Paints offers</span> a comprehensive
        range of industrial paints and protective coatings designed for
        long-lasting performance in harsh industrial environments. Our products
        are manufactured to international standards and supplied to clients
        across the globe, serving industries that demand durability, safety, and
        reliability.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10">
        {ProductListData.map((ProDetails, index) => {
          return (
            <div
              data-aos="zoom-out"
              data-aos-delay={400 + index * 100}
              key={index}
              onClick={() => navigate(ProDetails.route)}
              className="h-full w-full relative group overflow-hidden cursor-pointer"
            >
              <LazyImage
                src={ProDetails.img}
                alt=""
                className="h-full w-full object-cover group-hover:scale-105 duration-300"
              />
              <div className="absolute inset-0 flex flex-col justify-between px-5">
                <div className=" py-7">
                  <h1 className="text-white text-2xl font-extrabold">
                    {ProDetails.name}
                  </h1>
                  <p className="text-white">{ProDetails.subtext}</p>
                </div>
                <div>
                  <hr className="bg-white h-[1.5px]" />
                  <div className="flex justify-between text-white py-2 pb-6 ">
                    <p className="text-white font-bold">Find Out More</p>
                    <IoIosArrowDroprightCircle className="text-3xl  group-hover:-rotate-45 duration-300" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HomePro;
