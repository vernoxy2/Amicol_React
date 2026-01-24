import React from "react";
import { Typeof2KPolyurethanePaintsData } from "../../../../Data/Typeof2KPolyurethanePaintsData";
import { ProductCards } from "../../../../Components/UI/ProductCards";
const Polyurethane2k = () => {
  return (
    <section id="2k" className="bg-[#F4F4F4] py-14 ">
      <h1 className="text-center">Types of 2k Polyurethane Paints</h1>
      <p className="text-center max-w-lg mx-auto">
        Amicol 2K Polyurethane is a two-part coating that is composed of Acrylic
        Polyol and aromatic isocyanate curing agent.
      </p>
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-6">
        {Typeof2KPolyurethanePaintsData.map((item) => (
          <ProductCards key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Polyurethane2k;
