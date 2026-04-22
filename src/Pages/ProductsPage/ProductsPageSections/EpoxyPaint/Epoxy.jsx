import React from "react";
import Header from "../../../../Components/UI/Header";

import HeroImg from "../../../../assets/ProjectPageAssets/ProHero.png";
import MeetProducts from "../../../../Components/UI/MeetProducts";
import Epoxy2k from "./Epoxy2k";
import Epoxy2kHigh from "./Epoxy2kHigh";

const EpoxyTypes = [
  "Zinc Chromate Primer",
  "Zinc Phosphate Primer",
  "Paints",
  "High Build Paints",
  "Mastic Paints",
  "Road Marking/Floor Paints",
  "Self-Leveling Floor Coatings",
  "Coaltar Paints",
  "Heat Resistant Paints (150 Deg)",
  "Waterproofing Paints & Coatings",
];

const Epoxy = () => {
  return (
    <>
      <Header HeroImg={HeroImg} HeadText={"Our Products"} />
      <MeetProducts
        typeData={EpoxyTypes}
        MainText={"Amicol Epoxy Paints"}
        SubText={
          " High-performance epoxy coatings offer superior corrosion resistance, strong adhesion, chemical protection, and long-lasting durability for industrial, marine, and infrastructure applications in demanding environments."
        }
      />
      <Epoxy2k />
      <Epoxy2kHigh />
    </>
  );
};

export default Epoxy;
