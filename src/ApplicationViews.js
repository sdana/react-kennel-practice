import { Route } from "react-router-dom"
import React, { Component } from "react"
import AnimalList from "./AnimalList"
import Animal from "./Animal"
import LocationList from "./LocationList"
import Location from "./Location"
import EmployeeList from "./EmployeeList"
import Employee from "./Employee"
import Login from "./Login"
import SearchResults from "./SearchResults"
import NavBar from "./nav/NavBar"

export default class ApplicationViews extends Component {
  isAuthenticated = () => {
    if (
      localStorage.getItem("credentials") ||
      sessionStorage.getItem("credentials") !== null
    ) {
      return true
    }
  }

  render() {
    if (this.isAuthenticated()) {
      return (
        <React.Fragment>
        <Route path="/" component={NavBar}/>
          <Route path="/login" component={Login} />
          <Route path="/searchResults" render={(props) => { return <SearchResults key={Date.now()} results={props.location.state.referrer}/>}} />
          <Route exact path="/" component={LocationList} />
          <Route
            path="/locations/:locationId"
            render={props => {
              return (
                <Location locations={props.location.state.locations}>
                  {props.location.state.locations}
                </Location>
              )
            }}
          />
          <Route exact path="/animals" component={AnimalList} />
          <Route
            path="/animals/:animalId"
            render={props => {
              return (
                <Animal animal={props.location.state.animal}>
                  {props.location.state.animal.name}
                </Animal>
              )
            }}
          />
          <Route exact path="/employees" component={EmployeeList} />
          <Route
            path="/employees/:employeeId"
            render={props => {
              return (
                <Employee employee={props.location.state.employee}>
                  {props.location.state.employee.name}
                </Employee>
              )
            }}
          />
        </React.Fragment>
      )
    } else {
      return <Route path="/" component={Login} />
    }
  }
}
