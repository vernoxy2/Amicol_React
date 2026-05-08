import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typeof2KEpoxyHBPaints } from "../../../../Data/Typeof2KEpoxyHBPaints";
import { ProductCards } from "../../../../Components/UI/ProductCards";
const Epoxy2kHigh = () => {
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
    <section
      id="2k-epoxy-high-build-paints"
      className="bg-[#F4F4F4] py-14 pb-44"
    >
      <h1 className="text-center container">2K Epoxy High Build Paints</h1>
      <p className="text-center max-w-lg mx-auto container">
        Amicol 2K Epoxy High-Build Paints are high solid are two-part coatings
        that are composed of epoxy resin and a modified polyamine curing agent.
      </p>
      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-6">
        {Typeof2KEpoxyHBPaints.map((item) => (
          <ProductCards key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Epoxy2kHigh;
