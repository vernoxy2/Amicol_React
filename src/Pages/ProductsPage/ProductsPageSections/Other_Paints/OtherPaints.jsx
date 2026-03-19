import React from 'react';
import Header from '../../../../Components/UI/Header';
import HeroImg from "../../../../assets/ProjectPageAssets/ProHero.png";
import MeetProducts from "../../../../Components/UI/MeetProducts";
import HeatResistantPaints from './HeatResistantPaints';
import RoadMarkingPaints from './RoadMarkingPaints';
import WaterproofingCoatings from './WaterproofingCoatings';
import EpoxyFloorCoatings from './EpoxyFloorCoatings';
import WoodPaintandCoatings from './WoodPaintandCoatings';


const PolyurethaneTypes = [
  "Heat Resistant Primer & Paints (250 Deg)",
  "Heat Resistant Paints (Silver/Black) (600 Deg)",
  "GI/SS/AL Primer & Paints",
  "Road Marking Paints",
  "Quick Drying Paints & Varnishes",
  "Wood Paints",
  "Decorative Primer & Enamel",
  "Marine Paints",
  "Leakproof Compounds (Roofs)",
  "Fire Retardant Paints"
];

const OtherPaints = () => {
  return (
    <>
     <Header HeroImg={HeroImg} HeadText={"Our Products"} />
     <MeetProducts
        typeData={PolyurethaneTypes}
        MainText={"Amicol Other Paints"}
        SubText={
          "Our polyurethane paints and coatings deliver outstanding UV resistance, gloss retention, and weather durability, making them suitable for both interior and exterior applications."
        }
      />
      <HeatResistantPaints />
      <RoadMarkingPaints />
      <WaterproofingCoatings/>
      <EpoxyFloorCoatings/>
      <WoodPaintandCoatings/>
      
    </>
  );
}

export default OtherPaints;
