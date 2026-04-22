import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { WoodPaintandCoatingsData } from "../../../../Data/WoodPaintandCoatingsData";
import { ProductCards } from "../../../../Components/UI/ProductCards";

const WoodPaintandCoatings = () => {
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
    <section id="wood-paint-and-coatings" className="bg-[#F4F4F4] py-14 pb-44">
      <h1 className="text-center container">Wood Paint and Coatings</h1>
      <p className="text-center max-w-2xl mx-auto container">
       Amicol Wood Paints are two-part coatings that are composed of Modified Acrylic Polyol and a curing agent.
      </p>

      <div className="container grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-6">
        {WoodPaintandCoatingsData.map((item) => (
          <ProductCards key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

export default WoodPaintandCoatings;
