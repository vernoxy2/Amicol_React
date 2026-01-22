import React from "react";

const Header = ({ HeadText, HeroImg }) => {
  return (
    <section className="relative h-60 md:h-96 lg:h-[650px] w-full overflow-hidden ">
      {/* Background Image */}
      <img
        src={HeroImg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full items-start justify-end pb-5 md:pb-10 container px-0 w-11/12">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-white ">
          {HeadText}
        </h1>

        <hr className="w-full h-[1px] bg-white border-0 mt-3 md:mt-6" />
      </div>
    </section>
  );
};

export default Header;
