import React from "react";
import { TypesofAntiCorrosivePaintsData } from "../../../../Data/TypesofAntiCorrosivePaintsData";
import { ProductCards } from "../../../../Components/UI/ProductCards";

const TypesofAntiCorrosivePaints = () => {
  return (
    <section className="bg-[#F4F4F4]  py-14 pb-44">
      <h1 className="text-center">Types of Anti-Corrosive Paints</h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-6">
        {TypesofAntiCorrosivePaintsData.map((item) => (
          <ProductCards key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TypesofAntiCorrosivePaints;
