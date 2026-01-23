import React from 'react';
import Header from '../../Components/UI/Header';
import HeroImg from '../../assets/AboutUsPageAssets/AboutHero.png'
import GetInTouch from './AboutUsPageSections/GetInTouch';
import AboutUs from './AboutUsPageSections/AboutUs';
import WhyChooseUs from './AboutUsPageSections/WhyChooseUs';
import IndustriesWeServe from './AboutUsPageSections/IndustriesWeServe';

const AboutUsPage = () => {
  return (
    <>
      
      <Header HeroImg={HeroImg} HeadText={"About Us"}/>
      <AboutUs/>
      <WhyChooseUs/>
      {/* <IndustriesWeServe/> */}
      <GetInTouch/>

    </>
  );
}

export default AboutUsPage;
