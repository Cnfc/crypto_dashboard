import React from 'react';
import Page from '../Shared/Page';
import styled from 'styled-components';
import PriceGrid from './PriceGrid';
import CoinSportlight from './CoinSportlight';



const CharGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

export default function () {
  return (

    <Page name='dashboard'>
      <PriceGrid />
      <CharGrid>
        <CoinSportlight />
        <div />
      </CharGrid>
    </Page>
  )
}
