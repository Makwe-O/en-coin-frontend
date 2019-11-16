import React from 'react';
import {
  EarnCryptoBannerContainer,
  EarnCryptoBannerLeftColumn,
  LeftColumnContainer,
  EarnCryptoBannerRightColumn,
  RightColumnContainer
} from './EarnCryptoBanner.styles';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import Icon from '../Icon/Icon';

const EarnCryptoBanner = () => {
  return (
    <EarnCryptoBannerContainer>
      <EarnCryptoBannerLeftColumn>
        <LeftColumnContainer>
          <Heading
            title={'Earn up to $130 worth of crypto'}
            subtitle={
              'Discover how specific cryptocurrencies work — and get a bit of each crypto to try out for yourself.'
            }
            titleColor={'dark'}
            subtitleColor={'dark'}
            titleSize={'large'}
            subtitleSize={'small'}
          />
          <Button theme={'small--blue'}>Start earning</Button>
        </LeftColumnContainer>
      </EarnCryptoBannerLeftColumn>
      <EarnCryptoBannerRightColumn>
        <RightColumnContainer>
          <picture>
            <Icon
              source={
                'https://assets.coinbase.com/assets/earn-upsell-desktop.5db6c25bf65d7ea0c754859f289aeb99.jpg'
              }
              width={750}
            />
          </picture>
        </RightColumnContainer>
      </EarnCryptoBannerRightColumn>
    </EarnCryptoBannerContainer>
  );
};

export default EarnCryptoBanner;
