import React from 'react';
import {
  NavBackground,
  NavContainer,
  NavContainerInner,
  InnerLogo,
  InnerNav,
  InnerNavItem,
  InnerNavItemLast,
  InnerNavItemButton,
  InnerNavItemCTAContainer,
  InnerNavItemCTAContainerContent,
  InnerNavItemCTALink,
  InnerNavItemLink
} from './Nav.styles';
import Icon from '../Icon/Icon';
import Button from '../button/Button';
const Nav = () => {
  return (
    <NavBackground>
      <NavContainer>
        <NavContainerInner>
          <InnerLogo>
            <Icon
              source={
                'https://res.cloudinary.com/dnavbc7ny/image/upload/v1573919105/c_mhcgxz.png'
              }
              width={100}
            />
            <InnerNav>
              <InnerNavItem>
                <InnerNavItemLink href='#'>Prices</InnerNavItemLink>
              </InnerNavItem>
              <InnerNavItem>
                <InnerNavItemLink href='#'>Products</InnerNavItemLink>
              </InnerNavItem>
              <InnerNavItem>
                <InnerNavItemLink href='#'>Company</InnerNavItemLink>
              </InnerNavItem>
              <InnerNavItemLast>
                <InnerNavItemLink href='#'>Earn Crypto</InnerNavItemLink>
                <InnerNavItemButton href='#'>up to $130</InnerNavItemButton>
              </InnerNavItemLast>
            </InnerNav>
          </InnerLogo>

          <InnerNavItemCTAContainer>
            <InnerNavItemCTAContainerContent>
              <InnerNavItemCTALink href='#'>Sign in</InnerNavItemCTALink>
              <Button theme={'secondary'}>Get Started</Button>
            </InnerNavItemCTAContainerContent>
          </InnerNavItemCTAContainer>
        </NavContainerInner>
      </NavContainer>
    </NavBackground>
  );
};

export default Nav;
