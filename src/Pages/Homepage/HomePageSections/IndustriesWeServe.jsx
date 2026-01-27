import React, { useState, useRef } from "react";
import IndustriesCard from "../../../Components/UI/IndustriesCard";
import { WeServeData } from "../../../Data/WeServeData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const IndustriesWeServe = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev > 0 ? prev - 1 : WeServeData.length - 1;
      scrollToCard(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev < WeServeData.length - 1 ? prev + 1 : 0;
      scrollToCard(newIndex);
      return newIndex;
    });
  };

  const scrollToCard = (index) => {
    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.scrollWidth / WeServeData.length;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

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
          <div className="h-full rounded-full px-0.5 bg-primary mr-6"></div>
          <div className="md:flex space-y-4 justify-between">
            <p className="text-textcolor md:max-w-[75%] max-w-[90%]">
              AMICOL provides high-performance industrial paints and coating
              solutions tailored to the specific needs of diverse industries.
              Our products are designed to deliver long-term protection,
              corrosion resistance, and durability in demanding operating
              environments.
            </p>
            <div className="flex gap-2.5">
              <button
                onClick={handlePrevious}
                className="h-10 w-10 border-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary text-gray-500 hover:border-primary hover:text-white duration-300 transition-colors"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="text-sm" />
              </button>
              <button
                onClick={handleNext}
                className="h-10 w-10 border-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-primary text-gray-500 hover:border-primary hover:text-white duration-300 transition-colors"
                aria-label="Next slide"
              >
                <FaChevronRight className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slider Container */}
      <div className="relative pt-12 w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {WeServeData.map((data, index) => (
            <div key={index} className="flex-shrink-0 snap-center w-full md:w-9/12">
              <IndustriesCard
                Img={data.img}
                id={data.id}
                text={data.text}
                title={data.title}
              />
            </div>
          ))}
        </div>
        
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {WeServeData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                scrollToCard(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;