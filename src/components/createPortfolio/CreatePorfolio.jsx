import React from 'react';
import {
  CreatePorfolioContainer,
  CreatePorfolioContainerInner,
  CreatePorfolioContainerInnerSection,
  CreatePorfolioContainerInnerSectionLeft,
  InnerSectionLeftContent,
  InnerSectionLeftContentIcon,
  InnerSectionLeftContentHeader,
  InnerSectionLeftContentSubHeader,
  CreatePorfolioContainerInnerSectionRight
} from './CreatePortfolio.styles';
import Heading from '../heading/Heading';
import Icon from '../Icon/Icon';

const CreatePorfolio = () => {
  return (
    <CreatePorfolioContainer>
      <CreatePorfolioContainerInner>
        <Heading
          title={'Create your cryptocurrency portfolio today'}
          subtitle={
            'Coinbase has a variety of features that make it the best place to start trading'
          }
          titleColor={'dark'}
          subtitleColor={'grey'}
          titleSize={'mass'}
        />

        <CreatePorfolioContainerInnerSection>
          <CreatePorfolioContainerInnerSectionLeft>
            <InnerSectionLeftContent>
              <InnerSectionLeftContentIcon>
                <Icon
                  width={30}
                  source={
                    'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573896773/chart_byxpv7.svg'
                  }
                />
              </InnerSectionLeftContentIcon>
              <div>
                <InnerSectionLeftContentHeader>
                  Manage your portfolio
                </InnerSectionLeftContentHeader>
                <InnerSectionLeftContentSubHeader>
                  Buy and sell popular digital currencies, keep track of them in
                  the one place.
                </InnerSectionLeftContentSubHeader>
              </div>
            </InnerSectionLeftContent>
            <InnerSectionLeftContent>
              <InnerSectionLeftContentIcon>
                <Icon
                  width={30}
                  source={
                    'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573896773/calendarTick_kfqv1n.svg'
                  }
                />
              </InnerSectionLeftContentIcon>
              <div>
                <InnerSectionLeftContentHeader>
                  Recurring Buys
                </InnerSectionLeftContentHeader>
                <InnerSectionLeftContentSubHeader>
                  Invest in cryptocurrency slowly over time by scheduling buys
                  daily, weekly, or monthly.
                </InnerSectionLeftContentSubHeader>
              </div>
            </InnerSectionLeftContent>
            <InnerSectionLeftContent>
              <InnerSectionLeftContentIcon>
                <Icon
                  width={30}
                  source={
                    'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573896775/safe_ldrgia.svg'
                  }
                />
              </InnerSectionLeftContentIcon>
              <div>
                <InnerSectionLeftContentHeader>
                  Vault Protection
                </InnerSectionLeftContentHeader>
                <InnerSectionLeftContentSubHeader>
                  For added security, store your funds in a vault with time
                  delayed withdrawals.
                </InnerSectionLeftContentSubHeader>
              </div>
            </InnerSectionLeftContent>
            <InnerSectionLeftContent>
              <InnerSectionLeftContentIcon>
                <Icon
                  width={30}
                  source={
                    'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573896775/phone_e9v4hc.svg'
                  }
                />
              </InnerSectionLeftContentIcon>
              <div>
                <InnerSectionLeftContentHeader>
                  Stay on top of the markets with the Coinbase app for Android
                  or iOS.
                </InnerSectionLeftContentHeader>
                <InnerSectionLeftContentSubHeader>
                  Stay on top of the markets with the Coinbase app for Android
                  or iOS.
                </InnerSectionLeftContentSubHeader>
              </div>
            </InnerSectionLeftContent>
          </CreatePorfolioContainerInnerSectionLeft>
          <CreatePorfolioContainerInnerSectionRight>
            <picture>
              <source
                srcset='https://assets.coinbase.com/assets/coinbase-app-mobile.ce6b3771820067349ca07f6debc35f2d.webp'
                type='image/webp'
              />
              <source
                srcset='https://assets.coinbase.com/assets/coinbase-app-mobile.5c5291e641042e1765d724a4c2d1da74.jpg'
                type='image/jpeg'
              />
              <Icon
                source={
                  'https://assets.coinbase.com/assets/coinbase-app.51b8f3dbe406092d16845f3e74870061.jpg'
                }
              />
            </picture>
          </CreatePorfolioContainerInnerSectionRight>
        </CreatePorfolioContainerInnerSection>
      </CreatePorfolioContainerInner>
    </CreatePorfolioContainer>
  );
};

export default CreatePorfolio;
