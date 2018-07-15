import React, { Component } from 'react'
import api from "./apiController"

export default class SearchDB extends Component {
    state = {
        allTheThings: []
    }

    static fullSearch = () => {
       api.searchDB(this.props.query).then(response => this.setState(response))
    }
}