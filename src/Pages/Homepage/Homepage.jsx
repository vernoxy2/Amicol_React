import React from 'react';
import Header from '../../Components/UI/Header';
import HeroImg from '../../assets/HomePageAssets/HomeHero.png'
import HomeAbout from './HomePageSections/HomeAbout';
import HomePro from './HomePageSections/HomePro';
import WhyChooseUs from './HomePageSections/WhyChooseUs';
import IndustriesWeServe from './HomePageSections/IndustriesWeServe';
import Manufacturing from './HomePageSections/Manufacturing';
import GetInTouch from './HomePageSections/GetInTouch';
import Testimonials from './HomePageSections/Testimonials';
import HeaderSlider from '../../Components/UI/HeaderSlider';

const Homepage = () => {
  return (
    <>
      {/* <Header HeroImg={HeroImg} HeadText={"Amicol"}/> */}
      <HeaderSlider HeadText={"Amicol"}/>
      <HomeAbout/>
      <HomePro/>
      <WhyChooseUs/>
      <IndustriesWeServe/>
      <Manufacturing/>
      <GetInTouch/>
      <Testimonials/>
    </>
  );
}

export default Homepage;
