import React, { Component } from 'react';
import './searchForm.css'

export default class SearchForm extends Component {
    render() {
        return (
            <div className="formcontainer">
                <h2 className="formheader">Search movie</h2>
                <input type="text" placeholder="type text"/>
                <div className="button">search</div>
            </div>
        )
    }
}
