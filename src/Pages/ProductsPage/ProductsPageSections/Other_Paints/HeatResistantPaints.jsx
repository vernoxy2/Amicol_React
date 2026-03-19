import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HeatResistantPaintsData } from "../../../../Data/HeatResistantPaintsData";
import { ProductCards } from "../../../../Components/UI/ProductCards";

const HeatResistantPaints = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  }, [location]);

  return (
    <section id="heat-resistant-paints" className="bg-[#F4F4F4] py-14">
      <h1 className="text-center container">Heat Resistant Paints</h1>
      <p className="text-center max-w-2xl mx-auto container">
        Amicol 2K Polyurethane is a two-part coating that is composed of Acrylic Polyol and aromatic isocyanate curing agent.
      </p>

      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-6">
        {HeatResistantPaintsData.map((item) => (
          <ProductCards key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};


export default HeatResistantPaints;
