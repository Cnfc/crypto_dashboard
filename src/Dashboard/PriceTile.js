import React from 'react';
import styled, { css } from 'styled-components';
import { SelectableTile } from '../Shared/Tile';
import { fontSize3 } from '../Shared/Styles';
import { CoinHeaderGrid } from '../Settings/CoinHeaderGrid'


const PriceTileStyled = styled(SelectableTile)`
  ${props => props.compact && css`
    ${fontSize3}
  `}
`;

function PriceTile({ sym, data }) {
  return (
    <PriceTileStyled>
      <CoinHeaderGrid>
        <div> {sym} </div>
        <div> {data.CHANGEPCT24HOUR} </div>
      </CoinHeaderGrid>
    </PriceTileStyled>
  )
}

export default function ({ price, index }) {

  let sym = Object.keys(price)[0];
  let data = price[sym]["USD"];

  return (
    <PriceTile sym={sym} datqa={data}  >
      {sym} {data.PRICE}
    </PriceTile>
  )
}
