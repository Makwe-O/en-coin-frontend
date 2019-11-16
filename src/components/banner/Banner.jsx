import React from 'react';
import {
  BannerBackground,
  BannerContainer,
  BannerContainerInner,
  BannerContainerInnerColumn,
  InnerColumnHeader,
  InnerColumnText
} from './Banner.styles';

const Banner = () => {
  return (
    <BannerBackground>
      <BannerContainer>
        <BannerContainerInner>
          <BannerContainerInnerColumn>
            <InnerColumnHeader>$150B+</InnerColumnHeader>
            <InnerColumnText>Cryptocurrency exchanged</InnerColumnText>
          </BannerContainerInnerColumn>
          <BannerContainerInnerColumn>
            <InnerColumnHeader>200</InnerColumnHeader>
            <InnerColumnText>Countries supported</InnerColumnText>
          </BannerContainerInnerColumn>
          <BannerContainerInnerColumn>
            <InnerColumnHeader>30+</InnerColumnHeader>
            <InnerColumnText>Customers served</InnerColumnText>
          </BannerContainerInnerColumn>
        </BannerContainerInner>
      </BannerContainer>
    </BannerBackground>
  );
};

export default Banner;
