import React, { Component } from 'react';
import './searchForm.css';
import { connect } from 'react-redux';
import { searchMovie, fetchMovies } from '../../actions/searchActions'

class SearchForm extends Component {

    onChange = e => {
        this.props.searchMovie(e.target.value)
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.fetchMovies(this.props.text)
    }

    render() {
        return (
            <div className="formcontainer">
                <h2 className="formheader">Search movie</h2>
                <form onSubmit={this.onSubmit}>
                    <input
                        onChange={this.onChange}
                        type="text"
                        placeholder="type text"
                    />
                    <div className="button">search</div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, { searchMovie, fetchMovies })(SearchForm)
