import React from 'react';
import {
  GetStartedContainer,
  GetStartedInner,
  GetStartedInnerContent,
  InnerContentColumn,
  InnerContentColumnHeader,
  InnerContentColumnLine
} from './GetStarted.styles';
import Heading from '../heading/Heading';
import Icon from '../Icon/Icon';

const GetStarted = () => {
  return (
    <GetStartedContainer>
      <GetStartedInner>
        <Heading
          title={'Get started in a few minutes'}
          subtitle={
            'Coinbase supports a variety of the most popular digital currencies.'
          }
          titleColor={'dark'}
          subtitleColor={'grey'}
          titleSize={'mass'}
        />
        <GetStartedInnerContent>
          <InnerContentColumn>
            <Icon
              width={64}
              source={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573896775/person_ruf9st.svg'
              }
            />
            <InnerContentColumnHeader>
              Create an account
            </InnerContentColumnHeader>
          </InnerContentColumn>
          <InnerContentColumnLine></InnerContentColumnLine>
          <InnerContentColumn>
            <Icon
              width={64}
              source={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573896773/bank_iijm1b.svg'
              }
            />
            <InnerContentColumnHeader>
              Link your bank account
            </InnerContentColumnHeader>
          </InnerContentColumn>
          <InnerContentColumnLine></InnerContentColumnLine>
          <InnerContentColumn>
            <Icon
              width={64}
              source={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573896773/hand_ziun7m.svg'
              }
            />
            <InnerContentColumnHeader>
              Start buying & selling
            </InnerContentColumnHeader>
          </InnerContentColumn>
        </GetStartedInnerContent>
      </GetStartedInner>
    </GetStartedContainer>
  );
};

export default GetStarted;
