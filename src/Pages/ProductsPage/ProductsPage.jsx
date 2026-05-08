import React from 'react';
import Header from '../../Components/UI/Header';
import HeroImg from '../../assets/ProjectPageAssets/ProHero.png'
import HomePro from '../Homepage/HomePageSections/HomePro';


const ProductsPage = () => {
  return (
    <>
      <Header HeroImg={HeroImg} HeadText={" Our Products"}/>
      <div className="pb-20">
        <HomePro />
      </div>
    </>
  );
}

export default ProductsPage;
