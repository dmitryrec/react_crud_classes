import React, { Component } from 'react';
import SearchForm from './searchForm';
import { connect } from 'react-redux';

import Loading from '../loading';
import MoviesContainer from '../movies-container';


class Landing extends Component {
    render() {
        const {loading} = this.props;

        return (
            <div>
                <SearchForm/>
                {loading ? <Loading/> : <MoviesContainer/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Landing)
