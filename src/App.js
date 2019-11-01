import React, { Component } from 'react';
import './App.css';

const films = [
  {
    title: 'Matrix',
    rate: 10
  },
  {
    title: 'Equilibrium',
    rate: 8
  },
];

const FilmContainer = ({ title, rate }) => {
  return (
    <>
      <h3>{title}</h3>
      <p>Rating: {rate}</p>
    </>
  )
}

export default class App extends Component {

  render() {
    return (
      <div className="App">
        {films.map(film => <FilmContainer {...film} key={Math.random()} />)}
      </div>
    );
  }
}

