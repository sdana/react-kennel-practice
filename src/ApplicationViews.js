import { Route } from "react-router-dom"
import React, { Component } from "react"
import AnimalList from "./AnimalList"
import Animal from "./Animal"
import LocationList from "./LocationList"
import Location from "./Location"
import EmployeeList from "./EmployeeList"
import Employee from "./Employee"

export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={LocationList} />
        <Route path="/locations/:locationId" render={(props)=>{return <Location locations={props.location.state.locations} />}} />
        <Route exact path="/animals" component={AnimalList} />
        <Route path="/animals/:animalId" render={(props) => {return <Animal animal={props.location.state.animal} />}} />
        <Route exact path="/employees" component={EmployeeList} />
        <Route path="/employees/:employeeId" render={(props) => {return <Employee employee={props.location.state.employee} />}} />
      </React.Fragment>
    )
  }
}
