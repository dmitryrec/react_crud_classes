import React, { Component } from 'react'

export default class MovieCard extends Component {
    render() {
        const {movie} = this.props
        return (
            <div>
                <h3>{movie.Title}</h3>
                <img src={movie.Poster}/>
                <p>year: {movie.Year}</p>
            </div>
        )
    }
}
