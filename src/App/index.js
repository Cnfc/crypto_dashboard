import React, { Component } from 'react';
import WelcomeMessage from './WelcomeMessage';
import './App.css';
import { AppProvider } from './AppProvider';

import AppBar from './AppBar';
import AppLayout from './AppLayout';



class App extends Component {

  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <WelcomeMessage />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;