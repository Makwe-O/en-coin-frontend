import React from 'react';
import BuyCrypto from '../../components/buyCrypto/BuyCrypto';
import EarnCrypto from '../../components/earnCrypto/EarnCrypto';
import CreatePorfolio from '../../components/createPortfolio/CreatePorfolio';
import TrustedPlatform from '../../components/trustedPlatform/TrustedPlatform';
import Banner from '../../components/banner/Banner';
import GetStarted from '../../components/getStarted/GetStarted';
import EarnCryptoBanner from '../../components/earnCryptoBanner/EarnCryptoBanner';
const LandingPage = () => {
  return (
    <>
      <BuyCrypto />
      <EarnCrypto />
      <CreatePorfolio />
      <TrustedPlatform />
      <Banner />
      <GetStarted />
      <EarnCryptoBanner />
    </>
  );
};

export default LandingPage;
