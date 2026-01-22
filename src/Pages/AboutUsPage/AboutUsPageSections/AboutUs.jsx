import React from "react";
import AboutImg from "../../../assets/AboutUsPageAssets/AboutImg.png";

const AboutUs = () => {
  return (
    <section className="container">
      <p className="uppercase text-xl font-bold text-[#E33534]">[ About Us ]</p>
      <hr className="bg-black" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10">
        <div className="space-y-5 me-16">
          <p>
            <span className="font-bold">AMIT CHEMICAL INDUSTRIES</span>, operating under the brand name AMICOL
            Paints, is a leading paint manufacturer in Vapi, Gujarat, and an ISO
            9001:2015 certified company specializing in industrial paints and
            protective coatings. Established in 1988, we bring over 30 years of
            experience in delivering reliable, high-performance coating
            solutions to industries in India and clients across the globe.
          </p>
          <p>
            As a trusted anti-corrosive paints manufacturer, we produce a
            comprehensive range of epoxy, polyurethane, chemical-resistant,
            heat-resistant, marine, waterproofing, and floor coatings that meet
            international quality standards. Our coatings are widely used to
            protect steel structures, pipelines, reactors, storage tanks,
            chimneys, and industrial floors from corrosion, chemicals, and harsh
            environments.
          </p>
          <p>
            Recognized by customers in Vapi, Gujarat, and international markets,
            AMICOL Paints is known for its custom-formulated coating systems,
            consistent quality, and cost-effective performance. Supported by an
            experienced technical team, strict quality control processes, and a
            strong commitment to safety and timely delivery, we are regarded as
            one of the best paint manufacturers for industrial and
            anti-corrosive applications.
          </p>
          <p>
            At AMICOL Paints, we are committed to delivering long-lasting
            protection, superior finishes, and dependable service, building
            strong, long-term partnerships with customers worldwide.
          </p>
        </div>
        <div className="h-full w-full flex items-center justify-center">
          <img src={AboutImg} alt="" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
