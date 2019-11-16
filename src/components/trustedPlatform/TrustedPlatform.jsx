import React from 'react';
import {
  TrustedPlatformContainer,
  TrustedPlatformContainerInner,
  TrustedPlatformContainerInnerContent,
  InnerContentColumn,
  InnerContentColumnHeader,
  InnerContentColumnText,
  InnerContentColumnLink
} from './TrustedPlatform.styles';
import Heading from '../heading/Heading';
import Icon from '../Icon/Icon';

const TrustedPlatform = () => {
  return (
    <TrustedPlatformContainer>
      <TrustedPlatformContainerInner>
        <Heading
          title={'The most trusted cryptocurrency platform'}
          subtitle={'Here are a few reasons why you should choose Coinbase'}
          titleColor={'dark'}
          subtitleColor={'grey'}
          titleSize={'mass'}
        />
        <TrustedPlatformContainerInnerContent>
          <InnerContentColumn>
            <Icon
              source={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573896775/safe_ldrgia.svg'
              }
              width={64}
            />
            <InnerContentColumnHeader>Secure Storage</InnerContentColumnHeader>
            <InnerContentColumnText>
              We store the vast majority of the digital assets in secure offline
              storage.
            </InnerContentColumnText>
            <InnerContentColumnLink>Learn More</InnerContentColumnLink>
          </InnerContentColumn>
          <InnerContentColumn>
            <Icon
              source={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573896773/letter_ubwmas.svg'
              }
              width={64}
            />
            <InnerContentColumnHeader>
              Proctected by Insurance
            </InnerContentColumnHeader>
            <InnerContentColumnText>
              Cryptocurrency stored on our servers is covered by our insurance
              policy.
            </InnerContentColumnText>
            <InnerContentColumnLink>Learn More</InnerContentColumnLink>
          </InnerContentColumn>
          <InnerContentColumn>
            <Icon
              source={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573896775/shield_ltjgbk.svg'
              }
              width={64}
            />
            <InnerContentColumnHeader>
              Industry best Practices
            </InnerContentColumnHeader>
            <InnerContentColumnText>
              Coinbase supports a variety of the most popular digital
              currencies.
            </InnerContentColumnText>
            <InnerContentColumnLink>Learn More</InnerContentColumnLink>
          </InnerContentColumn>
        </TrustedPlatformContainerInnerContent>
      </TrustedPlatformContainerInner>
    </TrustedPlatformContainer>
  );
};

export default TrustedPlatform;
