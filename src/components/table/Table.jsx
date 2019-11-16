import React from 'react';
import {
  TableInnerContainer,
  TableInnerHead,
  TableInnerTableRow,
  TableInnerTableHead,
  TableInnerBody,
  TableInnerRow,
  TableInnerData,
  TableInnerDataNumber,
  TableInnerDataNameContainer,
  TableInnerDataNameIcon,
  TableInnerDataNameText
} from './Table.styles';
import Icon from '../Icon/Icon';
import Button from '../button/Button';
import { bitCoinData } from '../../bitcoinData';

const Table = () => {
  return (
    <TableInnerContainer>
      <TableInnerHead>
        <TableInnerTableRow>
          <TableInnerTableHead>#</TableInnerTableHead>
          <TableInnerTableHead>Name</TableInnerTableHead>
          <TableInnerTableHead>Price</TableInnerTableHead>
          <TableInnerTableHead>Change</TableInnerTableHead>
          <TableInnerTableHead>Chart</TableInnerTableHead>
          <TableInnerTableHead>Trade</TableInnerTableHead>
        </TableInnerTableRow>
      </TableInnerHead>
      <TableInnerBody>
        {bitCoinData.map(data => (
          <TableInnerRow key={data.id}>
            <TableInnerData>
              <TableInnerDataNumber>{data.id} </TableInnerDataNumber>
            </TableInnerData>
            <TableInnerData>
              <TableInnerDataNameContainer>
                <TableInnerDataNameIcon>
                  <Icon width={32} source={data.img} />
                </TableInnerDataNameIcon>
                <TableInnerDataNameText>{data.name}</TableInnerDataNameText>
                {data.abbr}
              </TableInnerDataNameContainer>
            </TableInnerData>
            <TableInnerData>${data.price} </TableInnerData>
            <TableInnerData>{data.change}% </TableInnerData>
            <TableInnerData>
              <Icon width={32} source={data.chart} />{' '}
            </TableInnerData>
            <TableInnerData>
              <Button theme={'large'}>Buy</Button>
            </TableInnerData>
          </TableInnerRow>
        ))}
      </TableInnerBody>
    </TableInnerContainer>
  );
};

export default Table;
