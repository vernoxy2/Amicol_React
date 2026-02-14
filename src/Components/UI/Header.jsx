import React from "react";
import LazyImage from "./LazyImage";

const Header = ({ HeadText, HeroImg }) => {
  return (
    <section className="relative h-60 md:h-96 lg:h-[650px] w-full overflow-hidden ">
      {/* Background Image */}
      <LazyImage
        src={HeroImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full items-start justify-end pb-4 md:pb-8 container px-0 w-11/12">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white ">
          {HeadText}
        </h1>

        <hr className="w-full h-[1px] bg-white border-0 mt-2 md:mt-4" />
      </div>
    </section>
  );
};

export default Header;
