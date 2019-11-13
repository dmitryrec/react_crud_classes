import React, { Component } from 'react';
import './movies-card.css';

export default class MovieCard extends Component {
    render() {
        const {movie} = this.props
        return (
            <div className="moviesCardItem">
                <h3>{movie.Title}</h3>
                <img src={movie.Poster} alt="poster"/>
                <p>year: {movie.Year}</p>
            </div>
        )
    }
}
