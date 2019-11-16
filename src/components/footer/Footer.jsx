import React from 'react';
import {
  FooterContainer,
  FooterContainerInner,
  FooterContainerInnerColumn,
  InnerColumnText,
  InnerColumnLink,
  InnerColumnHeader
} from './Footer.styles';
import Icon from '../Icon/Icon';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContainerInner>
        <FooterContainerInnerColumn>
          <InnerColumnHeader>
            <Icon
              width={90}
              source={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573903803/logo_stksic.svg'
              }
            />
          </InnerColumnHeader>
          <InnerColumnText>+1 (888) 908-7930</InnerColumnText>
          <InnerColumnLink href='#'>support.coinbase.com</InnerColumnLink>
        </FooterContainerInnerColumn>
        <FooterContainerInnerColumn>
          <InnerColumnHeader>Products</InnerColumnHeader>
          <InnerColumnLink href='#'>Coinbase</InnerColumnLink>
          <InnerColumnLink href='#'>Commerce</InnerColumnLink>
          <InnerColumnLink href='#'>Coinbase</InnerColumnLink>
          <InnerColumnLink href='#'>Custody</InnerColumnLink>
          <InnerColumnLink href='#'>Earn</InnerColumnLink>
          <InnerColumnLink href='#'>Pro</InnerColumnLink>
          <InnerColumnLink href='#'>USD Coin</InnerColumnLink>
          <InnerColumnLink href='#'>Wallet</InnerColumnLink>
          <InnerColumnLink href='#'>Ventures</InnerColumnLink>
        </FooterContainerInnerColumn>
        <FooterContainerInnerColumn>
          <InnerColumnHeader>Learn</InnerColumnHeader>
          <InnerColumnLink href='#'>Buy Bitcoin</InnerColumnLink>
          <InnerColumnLink href='#'>Buy Bitcoin Cash</InnerColumnLink>
          <InnerColumnLink href='#'>Buy Ethereum</InnerColumnLink>
          <InnerColumnLink href='#'>Buy Litecoin</InnerColumnLink>
          <InnerColumnLink href='#'>Buy XRP</InnerColumnLink>
          <InnerColumnLink href='#'>Supported Countries</InnerColumnLink>
          <InnerColumnLink href='#'>Status</InnerColumnLink>
          <InnerColumnLink href='#'>Taxes</InnerColumnLink>
        </FooterContainerInnerColumn>
        <FooterContainerInnerColumn>
          <InnerColumnHeader>Company</InnerColumnHeader>
          <InnerColumnLink href='#'>About</InnerColumnLink>
          <InnerColumnLink href='#'>Affiliates</InnerColumnLink>
          <InnerColumnLink href='#'>Careers</InnerColumnLink>
          <InnerColumnLink href='#'>Partners</InnerColumnLink>
          <InnerColumnLink href='#'>Press</InnerColumnLink>
          <InnerColumnLink href='#'>Legal & Privacy</InnerColumnLink>
          <InnerColumnLink href='#'>Support</InnerColumnLink>
        </FooterContainerInnerColumn>
        <FooterContainerInnerColumn>
          <InnerColumnHeader>Social</InnerColumnHeader>
          <InnerColumnLink href='#'>Blog</InnerColumnLink>
          <InnerColumnLink href='#'>Twitter</InnerColumnLink>
          <InnerColumnLink href='#'>Facebook</InnerColumnLink>
        </FooterContainerInnerColumn>
      </FooterContainerInner>
    </FooterContainer>
  );
};

export default Footer;
