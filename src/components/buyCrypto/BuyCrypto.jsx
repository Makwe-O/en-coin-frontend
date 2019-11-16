import React from 'react';
import Heading from '../heading/Heading';
import Form from '../form/Form';
import Table from '../table/Table';
import {
  BuyCryptoContainer,
  BuyCryptoBackground,
  BuyCryptoContainerInner,
  TableContainer,
  TableInnerOffset,
  TableInner
} from './BuyCrypto.styles';

const BuyCryptoSection = () => {
  return (
    <>
      <BuyCryptoBackground>
        <BuyCryptoContainer>
          <BuyCryptoContainerInner>
            <Heading
              title={'Buy and sell cryptocurrency'}
              subtitle={
                'Coinbase is the easiest place to buy, sell, and manage your cryptocurrency portfolio.'
              }
              titleColor={'light'}
              subtitleColor={'light'}
              titleSize={'massive'}
            />
            <Form />
          </BuyCryptoContainerInner>
        </BuyCryptoContainer>
      </BuyCryptoBackground>
      <TableContainer>
        <TableInnerOffset></TableInnerOffset>
        <TableInner>
          <Table />
        </TableInner>
      </TableContainer>
    </>
  );
};

export default BuyCryptoSection;
