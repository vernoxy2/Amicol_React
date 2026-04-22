import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RoadMarkingPaintsData } from "../../../../Data/RoadMarkingPaintsData";
import { ProductCards } from "../../../../Components/UI/ProductCards";

const RoadMarkingPaints = () => {
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
    <section id="road-marking-paints" className="bg-[#F4F4F4] py-14">
      <h1 className="text-center container">Road Marking Paints</h1>
      <p className="text-center max-w-2xl mx-auto container">
        Amicol Road Marking Paints are two-part coatings composed of Modified Epoxy and Polyamine curing agents.
      </p>

      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-6">
        {RoadMarkingPaintsData.map((item) => (
          <ProductCards key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default RoadMarkingPaints;
