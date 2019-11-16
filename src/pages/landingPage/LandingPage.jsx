import React from 'react';
import BuyCrypto from '../../components/buyCrypto/BuyCrypto';
import EarnCrypto from '../../components/earnCrypto/EarnCrypto';
import CreatePorfolio from '../../components/createPortfolio/CreatePorfolio';
const LandingPage = () => {
  return (
    <>
      <BuyCrypto />
      <EarnCrypto />
      <CreatePorfolio />
    </>
  );
};

export default LandingPage;
