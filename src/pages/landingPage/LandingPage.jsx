import React from 'react';
import BuyCrypto from '../../components/buyCrypto/BuyCrypto';
import EarnCrypto from '../../components/earnCrypto/EarnCrypto';
import CreatePorfolio from '../../components/createPortfolio/CreatePorfolio';
import TrustedPlatform from '../../components/trustedPlatform/TrustedPlatform';
const LandingPage = () => {
  return (
    <>
      <BuyCrypto />
      <EarnCrypto />
      <CreatePorfolio />
      <TrustedPlatform />
    </>
  );
};

export default LandingPage;
