import React, { Component } from 'react';
import './App.css';
import { AppProvider } from './AppProvider';

import AppBar from './AppBar';
import AppLayout from './AppLayout';
import Settings from '../Settings';



class App extends Component {

  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Settings />
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;