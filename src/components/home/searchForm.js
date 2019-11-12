import React, { Component } from 'react';
import './searchForm.css'

export default class SearchForm extends Component {
    render() {
        return (
            <div className="formcontainer">
                <h2>Search movie</h2>
                <input type="text"/>
                <div className="button">search</div>
            </div>
        )
    }
}
