import React from 'react';
import Header from '../../Components/UI/Header';
import HeroImg from '../../assets/ConatcatUsPageAssets/ConatactHero.png'
import GetInTouch from './ContactUsPageSections/GetInTouch';
import Map from './ContactUsPageSections/Map';

const ContactUsPage = () => {
  return (
    <>
    <Header HeroImg={HeroImg} HeadText={"Contact Us"}/>
    <GetInTouch/>
    <Map/>
    </>
  );
}

export default ContactUsPage;
