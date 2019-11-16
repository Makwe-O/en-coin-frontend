import styled from 'styled-components';

export const TableContainer = styled.div`
  width: 100%;
  margin-top: -1px;
  border-right: 0px;
  border-left: 0px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const TableInner = styled.table`
  width: 100%;
  max-width: 1142px;
  border-collapse: separate;
  caption-side: top;
  padding: 0px;
  background: rgb(255, 255, 255);
  border-spacing: 0px;
`;
export const TableInnerBody = styled.tbody`
  padding: 0px;
`;

export const TableInnerRow = styled.tr`
  font-size: 18px;
  user-select: none;
  padding: 28px 36px;
`;
export const TableInnerData = styled.td`
  padding-left: 24px;
  cursor: pointer;
  padding: 14px 48px 14px 0px;
  border-top: 1px solid rgb(236, 239, 241);
  &:nth-child(1) {
    padding-left: 24px;
    width: 70px;
  }
`;

export const TableInnerDataContent = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: row;
  min-width: 140px;
  color: rgba(17, 51, 83, 0.6);
  flex: 1 1 auto;
`;
export const TableInnerDataContentLogo = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  margin-right: 16px;
`;
export const TableInnerDataContentText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
export const TableInnerDataContentTextHeader = styled.div`
  padding-right: 16px;
`;
export const TableInnerDataContentTextSubHeader = styled.div`
  line-height: 1.3;
  color: rgba(17, 51, 83, 0.6);
  font-size: 18px;
  font-weight: 400;
`;
export const TableInnerDataRightContent = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const TableInnerDataRightContentHeader = styled.h4`
  line-height: 1.3;
  color: rgb(5, 15, 25);
  font-size: 18px;
  font-weight: 400;
`;

export const TableInnerDataRightContentSubHeader = styled.h4`
  min-width: 76px;
  margin-right: 0px;
  color: rgb(5, 177, 105);
  text-align: right;
`;
