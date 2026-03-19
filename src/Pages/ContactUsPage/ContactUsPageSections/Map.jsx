import React from "react";

const Map = () => (
  <div className="w-ful h-[350px] md:h-[500px]">
    <iframe
    data-aos="zoom-in"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3550.508965245821!2d72.941902129163!3d20.364173620279185!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0c47dcea423a9%3A0x8457a7173a0bd5c9!2sAmit%20Chemical%20Industries!5e1!3m2!1sen!2sin!4v1768903927802!5m2!1sen!2sin"
      className="w-full h-full"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
);

export default Map;