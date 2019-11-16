import styled from 'styled-components';

export const TableInnerContainer = styled.table`
  width: 100%;
  max-width: 1142px;
  border-collapse: separate;
  caption-side: top;
  padding: 0px;
  background: rgb(255, 255, 255);
  border-spacing: 0px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const TableInnerHead = styled.thead``;

export const TableInnerTableRow = styled.tr`
  border-bottom: 1px solid rgb(236, 239, 241);
`;

export const TableInnerTableHead = styled.th`
  text-align: left;
  padding: 16px 16px 16px 0px;
  font-weight: 300;
  color: rgba(17, 51, 83, 0.6);
  &:nth-child(1) {
    padding-left: 32px;
  }
`;
export const TableInnerBody = styled.tbody`
  padding: 0px;
`;

export const TableInnerRow = styled.tr`
  font-size: 18px;
  padding: 28px 36px;
  background: rgb(255, 255, 255);
`;

export const TableInnerData = styled.td`
  cursor: default;
  width: 85px;
  color: rgba(17, 51, 83, 0.6);
  vertical-align: middle;
  padding: 0px 48px 0px 0px;
  border-top: 1px solid rgb(236, 239, 241);
  &:nth-child(1) {
    padding-left: 32px;
  }
`;

export const TableInnerDataNumber = styled.h4`
  line-height: 1.3;
  color: rgba(17, 51, 83, 0.6);
  font-size: 18px;
  font-weight: 300;
`;

export const TableInnerDataNameContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 140px;
  color: rgba(17, 51, 83, 0.6);
`;

export const TableInnerDataNameIcon = styled.div`
  display: flex;
  margin-right: 15px;
`;

export const TableInnerDataRightContent = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const TableInnerDataNameText = styled.span`
  padding-right: 16px;
`;
