import styled from 'styled-components';

export const TrustedPlatformContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1180px;
  flex-shrink: 0;
  margin: 0px auto;
  padding: 24px;
`;

export const TrustedPlatformContainerInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 60px 0px;
  width: 100%;
`;
export const TrustedPlatformContainerInnerContent = styled.div`
  display: flex;
  margin-top: 100px;
  @media screen and (max-width: 560px) {
    flex-direction: column;
  }
`;

export const InnerContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  padding: 0px 24px;
`;
export const InnerContentColumnHeader = styled.h3`
  margin-top: 72px;
  margin-bottom: 14px;
  font-size: 20px;
  font-weight: 700;
  color: rgb(0, 47, 107);
`;

export const InnerContentColumnText = styled.p`
  color: rgb(144, 161, 184);
  line-height: 24px;
  font-size: 16px;
  margin: 14px 0px 23px;
`;

export const InnerContentColumnLink = styled.a`
  color: rgb(22, 82, 240);
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  line-height: 28px;
`;
