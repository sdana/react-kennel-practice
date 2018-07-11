import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import EmployeeList from "./EmployeeList"
import LocationList from './LocationList';

export default class Kennel extends Component {
    render() {
        return (
            <React.Fragment>
                <LocationList />
                <EmployeeList />
            </React.Fragment>
        );
    }
}