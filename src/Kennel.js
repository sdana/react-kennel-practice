import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import LocationList from "./LocationList"
import AnimalList from "./AnimalList"

export default class Kennel extends Component {
  render() {
    return (
      <React.Fragment>
        <AnimalList animals={this.state.animals} />
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
      </React.Fragment>
    )
  }
}
