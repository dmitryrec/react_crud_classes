import React, { Component } from 'react';
import './searchForm.css';
import { connect } from 'react-redux';
import { searchMovie } from '../../actions/searchActions'

class SearchForm extends Component {

    onChange = e => {
        this.props.searchMovie(e.target.value)
    }

    render() {
        return (
            <div className="formcontainer">
                <h2 className="formheader">Search movie</h2>
                <input
                    onChange={this.onChange}
                    type="text"
                    placeholder="type text"
                />
                <div className="button">search</div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    text: state.movies.text
})

export default connect(mapStateToProps, {searchMovie})(SearchForm)
