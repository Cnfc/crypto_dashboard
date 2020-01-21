import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage';
import './App.css';

import AppBar from './AppBar';

import AppLayout from './AppLayout';
import styled, { css } from 'styled-components';


class App extends Component {

  render() {
    return (
      <AppLayout>
        <AppBar />
        <WelcomeMessage />
      </AppLayout>
    );
  }
}

export default App;