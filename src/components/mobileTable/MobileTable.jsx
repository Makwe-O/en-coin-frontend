import React from 'react';
import {
  TableContainer,
  TableInner,
  TableInnerBody,
  TableInnerData,
  TableInnerRow,
  TableInnerDataContent,
  TableInnerDataContentLogo,
  TableInnerDataContentText,
  TableInnerDataContentTextHeader,
  TableInnerDataContentTextSubHeader,
  TableInnerDataRightContent,
  TableInnerDataRightContentHeader,
  TableInnerDataRightContentSubHeader
} from './MobileTable.styles';
import { bitCoinData } from '../../bitcoinData';
import Icon from '../Icon/Icon';

const MobileTable = () => {
  return (
    <TableContainer>
      <TableInner>
        <TableInnerBody>
          {bitCoinData.map(data => (
            <TableInnerRow>
              <TableInnerData>
                <TableInnerDataContent>
                  <TableInnerDataContentLogo>
                    <Icon source={data.img} width={32} />
                  </TableInnerDataContentLogo>
                  <TableInnerDataContentText>
                    <TableInnerDataContentTextHeader>
                      {data.name}
                    </TableInnerDataContentTextHeader>
                    <TableInnerDataContentTextSubHeader>
                      {data.abbr}
                    </TableInnerDataContentTextSubHeader>
                  </TableInnerDataContentText>
                </TableInnerDataContent>
              </TableInnerData>
              <TableInnerData>
                <TableInnerDataRightContent>
                  <TableInnerDataRightContentHeader>
                    {data.price}
                  </TableInnerDataRightContentHeader>
                  <TableInnerDataRightContentSubHeader>
                    {data.change}
                  </TableInnerDataRightContentSubHeader>
                </TableInnerDataRightContent>
              </TableInnerData>
            </TableInnerRow>
          ))}
        </TableInnerBody>
      </TableInner>
    </TableContainer>
  );
};

export default MobileTable;
