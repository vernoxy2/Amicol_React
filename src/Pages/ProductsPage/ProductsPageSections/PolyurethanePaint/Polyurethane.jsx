import React from 'react';
import Header from '../../../../Components/UI/Header';
import HeroImg from "../../../../assets/ProjectPageAssets/ProHero.png";
import MeetProducts from "../../../../Components/UI/MeetProducts";
import Polyurethane2k from './Polyurethane2k';
import Polyurethane2kHB from './Polyurethane2kHB';
// import TypesofAntiCorrosivePaints from "./TypesofAnti-CorrosivePaints.JSX";

const PolyurethaneTypes = [
  "Zinc Chromate Primer",
  "Zinc Phosphate Primer",
  "Paints",
  "High Build Paints",
  "Auto Paints",
  "Clear Lacquers",
];

const Polyurethane = () => {
  return (
    <>
     <Header HeroImg={HeroImg} HeadText={"Our Products"} />
     <MeetProducts
        typeData={PolyurethaneTypes}
        MainText={"Amicol Polyurrthane Paints"}
        SubText={
          "Our polyurethane paints and coatings deliver outstanding UV resistance, gloss retention, and weather durability, making them suitable for both interior and exterior applications."
        }
      />
      <Polyurethane2k/>
      <Polyurethane2kHB/>
    </>
  );
}

export default Polyurethane;
