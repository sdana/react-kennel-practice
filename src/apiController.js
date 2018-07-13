import React, { Component } from 'react'

export default class ApiController extends Component {
    static getThing = (thing) => {
        return fetch(`http://localhost:3005/${thing}`)
            .then(e => e.json())
    }
}