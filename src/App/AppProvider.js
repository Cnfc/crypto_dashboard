import React, { Component } from 'react';
import _ from 'lodash';
const cc = require('cryptocompare');



const MAX_FAVORITES = 10;

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      favorites: ['BTC', 'ETH'],
      ...this.savedSettings(),
      confirmFavorites: this.confirmFavorites,
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      coinList: null
    }
  }

  componentDidMount() {
    this.fetchCoins();
  }

  isInFavorites = key => _.includes(this.state.favorites, key)

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList })
    console.log(coinList)
  }

  addCoin = (key) => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites })
    }
  }

  removeCoin = (key) => {
    let favorites = [...this.state.favorites];
    this.setState({ favorites: _.pull(favorites, key) })
  }


  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
      favorites: this.state.favorites
    }))
  }

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));

    if (!cryptoDashData) {
      return { page: 'settings', firstVisit: true }
    }
    let { favorites } = cryptoDashData;

    return { favorites };
  }

  setPage = page => this.setState({ page })

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    )
  }

}