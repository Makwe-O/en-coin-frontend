import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  max-width: 1180px;
  flex-shrink: 0;
  width: 100%;
  color: rgb(255, 255, 255);
  margin: 0px auto;
  padding: 90px 24px 100px;
`;

export const FooterContainerInner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const FooterContainerInnerColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  flex: 1 1 auto;
`;

export const InnerColumnText = styled.div`
  font-size: 16px;
  line-height: 1.75;
  opacity: 0.7;
  color: rgb(17, 51, 85);
  text-decoration: none;
`;
export const InnerColumnLink = styled.a`
  font-size: 16px;
  opacity: 0.7;
  color: rgb(17, 51, 85);
  line-height: 1.75;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const InnerColumnHeader = styled.div`
  margin-bottom: 20px;
  margin-top: 5px;
  font-size: 16px;
  font-weight: 700;
  color: rgb(17, 51, 85);
`;
