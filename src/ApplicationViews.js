import { Route } from "react-router-dom"
import React, { Component } from "react"
import AnimalList from "./AnimalList"
import LocationList from "./LocationList"
import EmployeeList from "./EmployeeList"

export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={LocationList} />
        <Route path="/animals" component={AnimalList} />
        <Route path="/employees" component={EmployeeList} />
      </React.Fragment>
    )
  }
}
