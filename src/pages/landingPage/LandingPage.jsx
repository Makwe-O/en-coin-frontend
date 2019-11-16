import React from 'react';
import Nav from '../../components/nav/Nav';
import BuyCrypto from '../../components/buyCrypto/BuyCrypto';
import EarnCrypto from '../../components/learnCrypto/EarnCrypto';
import CreatePorfolio from '../../components/createPortfolio/CreatePorfolio';
import TrustedPlatform from '../../components/trustedPlatform/TrustedPlatform';
import Banner from '../../components/banner/Banner';
import GetStarted from '../../components/getStarted/GetStarted';
import EarnCryptoBanner from '../../components/learnCrypto/EarnCrypto';
import Footer from '../../components/footer/Footer';
const LandingPage = () => {
  return (
    <>
      <Nav />
      <BuyCrypto />
      <EarnCrypto />
      <CreatePorfolio />
      <TrustedPlatform />
      <Banner />
      <GetStarted />
      <EarnCryptoBanner />
      <Footer />
    </>
  );
};

export default LandingPage;
