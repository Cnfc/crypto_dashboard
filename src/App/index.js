import React, { Component } from 'react';
import './App.css';
import { AppProvider } from './AppProvider';

import AppBar from './AppBar';
import AppLayout from './AppLayout';
import Settings from '../Settings';
import Content from '../Shared/Content';



class App extends Component {

  render() {
    return (
      <AppLayout>
        <AppProvider>
          <AppBar />
          <Content>
            <Settings />
          </Content>
        </AppProvider>
      </AppLayout>
    );
  }
}

export default App;