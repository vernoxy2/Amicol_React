import React from "react";

const MeetProducts = ({ MainText, SubText, typeData }) => {
  return (
    <section className="container">
      <p className="uppercase text-sm sm:text-base font-bold text-[#E33534] tracking-wide">
        [ meet our products ]
      </p>
      <hr className="my-4 border-textcolor" />
      {/* Main Content */}
      <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="w-5/6">
          <h1>{MainText}</h1>
        </div>
        <div className="flex gap-6 md:gap-12 w-5/6">
          <div className="w-4 h-full bg-primary rounded-full"></div>
          <p className="py-3">{SubText}</p>
        </div>
      </div>
      {/* Products types */}
      <div className="flex flex-wrap gap-4 md:gap-8 pt-6 w-9/12">
        {typeData.map((type, index) => (
          <div
            key={index}
            className="bg-primary text-white px-6 py-3 text-xl font-bold rounded-md"
          >
            {type}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetProducts;
