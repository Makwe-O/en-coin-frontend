import styled from 'styled-components';

export const NavBackground = styled.div`
  background-color: rgb(22, 82, 240);
`;
export const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1180px;
  flex-shrink: 0;
  margin: 0px auto;
  padding: 0px 16px;
`;

export const NavContainerInner = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  padding: 1em 0;
`;

export const InnerLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`;

export const InnerNav = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  flex-grow: 1;
  max-width: 560px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const InnerNavItem = styled.div`
  flex-direction: row;
  display: flex;
  position: relative;
  bottom: -1px;
  height: 100%;
  margin-right: 16px;
  align-items: center;
`;

export const InnerNavItemLast = styled.div`
  flex-direction: row;
  display: flex;
  position: relative;
  bottom: -1px;
  height: 100%;

  align-items: center;
`;

export const InnerNavItemButton = styled.a`
  display: flex;
  justify-content: center;
  margin-left: 16px;
  padding: 4px 6px;
  border-radius: 3px;
  background: rgb(5, 177, 105);
  color: #fff;
  text-decoration: none;
`;
export const InnerNavItemLink = styled.a`
 color:#fff
 text-decoration:none
`;

export const InnerNavItemCTAContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
`;

export const InnerNavItemCTAContainerContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #fff;
  text-decoration: none;
`;
export const InnerNavItemCTALink = styled.a`
  margin-right: 16px;
  text-decoration: none;
  color: #fff;
`;
