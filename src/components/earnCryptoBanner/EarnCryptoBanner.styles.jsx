import styled from 'styled-components';

export const EarnCryptoBannerContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  background-color: rgb(233, 246, 255);
  height: 460px;
  width: 100%;
  flex: 1 0 auto;
  overflow: hidden;
`;

export const EarnCryptoBannerLeftColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 1 1 50%;
`;

export const EarnCryptoBannerRightColumn = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  flex: 1 1 50%;
`;
export const LeftColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  justify-content: center;
  z-index: 1;
  min-width: 250px;
`;

export const RightColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  position: absolute;
  right: 0px;
  top: 0px;
  width: 65%;
  max-width: 750px;
  height: auto;
`;
