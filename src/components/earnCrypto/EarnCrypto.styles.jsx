import styled from 'styled-components';

export const EarnCryptoContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1180px;
  flex-shrink: 0;
  margin: 0px auto;
  padding: 24px;
`;

export const EarnCryptoInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  position: relative;
  height: auto;
  width: 100%;
  flex: 1 0 auto;
`;

export const EarnCryptoInnerLeft = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  flex: 1 1 50%;
`;

export const EarnCryptoInnerRight = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  width: 100%;
  flex: 1 1 50%;
`;

export const EarnCryptoInnerLeftInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 350px;
  justify-content: center;
  z-index: 1;
  min-width: 250px;
`;

export const EarnCryptoInnerRightInner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 500px;
  flex-grow: 1;
`;

export const EarnCryptoInnerRightInnerContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px;
  cursor: pointer;
  opacity: 0.9;
  margin-bottom: 0px;
  margin-top: -1px;
  display: flex;
  width: 100%;
  border-radius: 8px;
  transition: box-shadow 500ms ease 0s, opacity 500ms ease 0s,
    z-index 0ms ease-out 500ms;
  padding: 15px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 8px 24px;
    opacity: 1;
    z-index: 1;
    position: relative;
  }
`;

export const InnerContainerLeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InnerContainerLeftSectionImage = styled.div`
  height: 38px;
  width: 38px;
  margin-right: 15px;
`;

export const InnerContainerLeftSectionText = styled.h2`
  line-height: 1.3;
  color: rgb(5, 15, 25);
  font-size: 22px;
  font-weight: 500;
`;

export const InnerContainerLeftSectionSubText = styled.h3`
  color: rgb(136, 153, 170);
  margin: 0px 16px;
  line-height: 1.3;
  font-size: 18px;
  font-weight: 500;
`;
export const InnerContainerRightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const InnerContainerRightSectionText = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: rgb(5, 177, 105);
  font-weight: 500;
`;
