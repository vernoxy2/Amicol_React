import React from "react";
import Header from "../../../../Components/UI/Header";
import HeroImg from "../../../../assets/ProjectPageAssets/ProHero.png";
import MeetProducts from "../../../../Components/UI/MeetProducts";
import TypesofAntiCorrosivePaints from "./TypesofAnti-CorrosivePaints.JSX";

const AntiCorrosiveTypes = [
  "Zinc Chromate Primer",
  "Chlorinated Rubber Paints",
  "Polyester Epoxy Paints",
  "Co-polymer Paints",
  "Clear Varnishes",
  "Thinners",
];

const AntiCorrosivePaint = () => {
  return (
    <>
      <Header HeroImg={HeroImg} HeadText={"Our Products"} />
      <MeetProducts
        typeData={AntiCorrosiveTypes}
        MainText={"Amicol Anti-Corrosive Paints"}
        SubText={
          "Our anti-corrosive paints are specially formulated to protect metal and steel surfaces from rust, moisture, and chemical exposure. These industrial coatings help extend asset life and reduce maintenance costs, making us one of the preferred anti-corrosive paint manufacturers."
        }
      />
      <TypesofAntiCorrosivePaints />
    </>
  );
};

export default AntiCorrosivePaint;
