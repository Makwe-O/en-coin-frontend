import React from 'react';
import {
  EarnCryptoContainer,
  EarnCryptoInner,
  EarnCryptoInnerLeft,
  EarnCryptoInnerLeftInner,
  EarnCryptoInnerRight,
  EarnCryptoInnerRightInner,
  EarnCryptoInnerRightInnerContainer,
  InnerContainerLeftSection,
  InnerContainerLeftSectionImage,
  InnerContainerLeftSectionText,
  InnerContainerLeftSectionSubText,
  InnerContainerRightSection,
  InnerContainerRightSectionText
} from './EarnCrypto.styles';
import Heading from '../heading/Heading';
import Button from '../button/Button';
import Icon from '../Icon/Icon';

const EarnCrypto = () => {
  return (
    <EarnCryptoContainer>
      <EarnCryptoInner>
        <EarnCryptoInnerLeft>
          <EarnCryptoInnerLeftInner>
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
          </EarnCryptoInnerLeftInner>
        </EarnCryptoInnerLeft>
        <EarnCryptoInnerRight>
          <EarnCryptoInnerRightInner>
            <EarnCryptoInnerRightInnerContainer>
              <InnerContainerLeftSection>
                <InnerContainerLeftSectionImage>
                  <Icon
                    source={
                      'https://static-assets.coinbase.com/earn/campaigns/dai/asset-logo.png'
                    }
                    width={38}
                  />
                </InnerContainerLeftSectionImage>
                <InnerContainerLeftSectionText>
                  Dai
                </InnerContainerLeftSectionText>
                <InnerContainerLeftSectionSubText>
                  Dai
                </InnerContainerLeftSectionSubText>
              </InnerContainerLeftSection>
              <InnerContainerRightSection>
                <InnerContainerRightSectionText>
                  Earn $20 Dai
                </InnerContainerRightSectionText>
              </InnerContainerRightSection>
            </EarnCryptoInnerRightInnerContainer>
            <EarnCryptoInnerRightInnerContainer>
              <InnerContainerLeftSection>
                <InnerContainerLeftSectionImage>
                  <Icon
                    source={
                      'https://static-assets.coinbase.com/earn/campaigns/eos/asset-logo.png'
                    }
                    width={38}
                  />
                </InnerContainerLeftSectionImage>
                <InnerContainerLeftSectionText>
                  EOS
                </InnerContainerLeftSectionText>
                <InnerContainerLeftSectionSubText>
                  EOS
                </InnerContainerLeftSectionSubText>
              </InnerContainerLeftSection>
              <InnerContainerRightSection>
                <InnerContainerRightSectionText>
                  Earn $50 EOS
                </InnerContainerRightSectionText>
              </InnerContainerRightSection>
            </EarnCryptoInnerRightInnerContainer>
            <EarnCryptoInnerRightInnerContainer>
              <InnerContainerLeftSection>
                <InnerContainerLeftSectionImage>
                  <Icon
                    source={
                      'https://static-assets.coinbase.com/earn/campaigns/stellar/asset-logo.svg'
                    }
                    width={38}
                  />
                </InnerContainerLeftSectionImage>
                <InnerContainerLeftSectionText>
                  Stellar Lumens
                </InnerContainerLeftSectionText>
                <InnerContainerLeftSectionSubText>
                  XLM
                </InnerContainerLeftSectionSubText>
              </InnerContainerLeftSection>
              <InnerContainerRightSection>
                <InnerContainerRightSectionText>
                  Earn $50 XLM
                </InnerContainerRightSectionText>
              </InnerContainerRightSection>
            </EarnCryptoInnerRightInnerContainer>
            <EarnCryptoInnerRightInnerContainer>
              <InnerContainerLeftSection>
                <InnerContainerLeftSectionImage>
                  <Icon
                    source={
                      'https://static-assets.coinbase.com/earn/campaigns/basic-attention-token/asset-logo-1.svg'
                    }
                    width={38}
                  />
                </InnerContainerLeftSectionImage>
                <InnerContainerLeftSectionText>
                  BAT
                </InnerContainerLeftSectionText>
                <InnerContainerLeftSectionSubText>
                  BAT
                </InnerContainerLeftSectionSubText>
              </InnerContainerLeftSection>
              <InnerContainerRightSection>
                <InnerContainerRightSectionText>
                  Earn $10 BAT
                </InnerContainerRightSectionText>
              </InnerContainerRightSection>
            </EarnCryptoInnerRightInnerContainer>
          </EarnCryptoInnerRightInner>
        </EarnCryptoInnerRight>
      </EarnCryptoInner>
    </EarnCryptoContainer>
  );
};

export default EarnCrypto;
