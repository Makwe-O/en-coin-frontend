import styled from 'styled-components';

export const BannerBackground = styled.div`
  background: rgb(22, 82, 240);
`;

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1180px;
  flex-shrink: 0;
  margin: 0px auto;
  padding: 24px;
`;
export const BannerContainerInner = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  flex: 1 1 auto;
  margin: 40px 0px;
  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;
export const BannerContainerInnerColumn = styled.div`
  text-align: center;
  flex: 1 1 0%;
`;

export const InnerColumnHeader = styled.h2`
  line-height: 48px;
  font-size: 56px;
  font-weight: 700;
  margin: 0px 0px 12px;
`;

export const InnerColumnText = styled.p`
  line-height: 24px;
  font-size: 16px;
  opacity: 0.7;
`;
