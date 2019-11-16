import styled from 'styled-components';

export const GetStartedContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1180px;
  flex-shrink: 0;
  margin: 0px auto;
  padding: 24px;
`;

export const GetStartedInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  flex: 1 1 auto;
  margin: 60px 0px;
`;

export const GetStartedInnerContent = styled.div`
  display: flex;
  width: 80%;
  margin-top: 60px;
`;

export const InnerContentColumn = styled.div`
  text-align: center;
`;
export const InnerContentColumnHeader = styled.h3`
  font-size: 20px;
  color: rgb(35, 49, 67);
  font-weight: 700;
  margin: 30px 0px 20px;
`;

export const InnerContentColumnLine = styled.div`
  height: 1px;
  margin-top: 40px;
  background-color: rgb(186, 197, 212);
  flex: 1 1 0%;
`;
