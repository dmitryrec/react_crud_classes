import React, { Component } from 'react';
import './App.css';


import Navbar from './components/navbar';
import Landing from './components/home/landing';

export default class App extends Component {

  render() {

    return (
      <div className="App">
        <Navbar/>
        <Landing/>
      </div>
    );
  }
}

