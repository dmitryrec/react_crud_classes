import React, { Component } from 'react';
import './App.css';

import Navbar from './components/navbar';
import Landing from './components/home/landing';
import store from './store';
import { Provider } from 'react-redux'

export default class App extends Component {

  render() {

    return (
      <div className="App">
        <Provider store={store}>
          <Navbar/>
          <Landing/>
        </Provider>
      </div>
    );
  }
}

