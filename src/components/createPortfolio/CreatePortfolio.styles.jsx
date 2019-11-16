import styled from 'styled-components';

export const CreatePorfolioContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1180px;
  flex-shrink: 0;
  margin: 0px auto;
  padding: 24px;
`;

export const CreatePorfolioContainerInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 60px;
  flex: 1 1 auto;
`;

export const CreatePorfolioContainerInnerSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 60px;
`;

export const CreatePorfolioContainerInnerSectionLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 18px;
  flex: 1 1 0%;
`;

export const InnerSectionLeftContent = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
`;

export const InnerSectionLeftContentIcon = styled.div`
  margin-top: -8px;
  flex-shrink: 0;
  width: 72px;
  height: 72px;
  margin-right: 28px;
  background-color: rgb(255, 255, 255);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(218, 225, 233, 0.557) 0px 8px 16px;
  border-radius: 50%;
`;

export const InnerSectionLeftContentHeader = styled.h3`
  margin-top: 0px;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 400;
`;

export const InnerSectionLeftContentSubHeader = styled.p`
  line-height: 1.6;
  color: rgb(131, 143, 160);
  margin: 0px;
`;

export const CreatePorfolioContainerInnerSectionRight = styled.div`
  max-width: 700px;
`;
