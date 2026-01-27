import React from "react";
import { Typeof2KPolyurethaneHBPaintsData } from "../../../../Data/Typeof2KPolyurethaneHBPaintsData";
import { ProductCards } from "../../../../Components/UI/ProductCards";

const Polyurethane2kHB = () => {
  return (
    <section id="2k-polyurethane-hb-paints" className="bg-[#F4F4F4] py-14 pb-44">
      <h1 className="text-center container">Type of 2K Polyurethane HB Paints</h1>
      <p className="text-center max-w-lg mx-auto container">
        Amicol 2K Polyurethane is a two-part coating that is composed of Acrylic
        Polyol and an aliphatic isocyanate curing agent.
      </p>

      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-6">
        {Typeof2KPolyurethaneHBPaintsData.map((item) => (
          <ProductCards key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Polyurethane2kHB;
