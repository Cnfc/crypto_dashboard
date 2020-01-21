import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      setPage: this.setPage,
      ...this.savedSettings(),
      confirmFavorites: this.confirmFavorites
    }
  }

  confirmFavorites() {
    console.log('Sejj');
  }

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));

    if (!cryptoDashData) {
      return { page: 'settings', firstVisit: true }
    }
    return {};
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