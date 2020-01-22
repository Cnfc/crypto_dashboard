import React from 'react';
import { AppContext } from '../App/AppProvider';
import styled, { css } from 'styled-components';
import { backgroundColor2, fontSize2 } from '../Shared/Styles';
import _ from 'lodash';
import fuzzy from 'fuzzy';


const SearchGrid = styled.div`
  dispay: grid;
  grid-template-columns: 200px, 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1px solid;
  heigth: 25px;
  color: #1163c9;
  place-self: center left;
`;


const handleFilter = _.debounce((inputValue, coinList, setFilteredCoins) => {
  let coinSymbols = Object.keys(coinList);

  let coinNames = coinSymbols.map(sym => coinList[sym].CoinName)
  let allStringToSearch = coinSymbols.concat(coinNames);

  let fuzzyResult = fuzzy.filter(inputValue, allStringToSearch, {});
  console.log(fuzzyResult)

}, 500);

function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;
  handleFilter(e, setFilteredCoins, coinList)

}

export default function () {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) =>

        <SearchGrid>
          <h2>Search all Coins</h2>
          <SearchInput onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)} />
        </SearchGrid>
      }
    </AppContext.Consumer>
  )
}