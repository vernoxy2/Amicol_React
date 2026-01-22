import React from "react";
import IndustriesCard from "../../../Components/UI/IndustriesCard"

const IndustriesWeServe = () => {
  return (
    <section className="container">
      <p className="uppercase text-xl font-bold text-primary">
       [ Industries We Serve ]
      </p>
      <hr className="bg-black" />
      <div className="flex flex-wrap">
        <div className="md:w-1/2">
          <h1 className="text-textcolor">We serve the following industries</h1>
        </div>
        <div className="md:w-1/2">
            <p>AMICOL provides high-performance industrial paints and coating solutions tailored to the specific needs of diverse industries. Our products are designed to deliver long-term protection, corrosion resistance, and durability in demanding operating environments.</p>
        </div>
      </div>
      <div className="flex overflow-auto gap-8">
        <IndustriesCard />
        {/* <IndustriesCard /> */}
      </div>
    </section>
  );
};

export default IndustriesWeServe;
