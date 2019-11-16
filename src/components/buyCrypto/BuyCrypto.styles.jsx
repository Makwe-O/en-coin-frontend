import styled from 'styled-components';

export const BuyCryptoBackground = styled.div`
  background-color: rgb(22, 82, 240);
`;

export const BuyCryptoContainer = styled.div`
  max-width: 1180px;
  margin: 0 auto;
`;

export const BuyCryptoContainerInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 35px 24px;
  text-align: center;
`;

export const TableContainer = styled.div`
  position: relative;
`;

export const TableInnerOffset = styled.div`
  z-index: -1;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: rgb(22, 82, 240);
  height: 175px;
  width: 100%;
`;

export const TableInner = styled.div`
  display: flex;
  width: 100%;
  flex-shrink: 0;
  flex-direction: column;
  max-width: 1142px;
  box-shadow: rgba(17, 51, 83, 0.02) 0px 4px 12px 0px;
  margin: 0px auto;
  padding: 0px;
  border: 1px solid rgb(236, 239, 241);
  border-radius: 4px;
`;
