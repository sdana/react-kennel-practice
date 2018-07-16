import React, { Component } from "react"
import Employee from "./Employee"
import api from "./apiController"

export default class EmployeeList extends Component {
    state = {
      employees: []
    }

  deleteEmployee = (employeeId) => {
    // Delete the specified animal from the API
    fetch(`http://localhost:3005/employees/${employeeId}`, {
      method: "DELETE"
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:3005/employees")
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(response => {
        console.log(response)
        this.setState({
          employees: response
        })
      })
  }

  componentDidMount() {
    api.getThing("employees")
      .then(employees => this.setState({ employees: employees }))
  }

  render() {
    return (
      <React.Fragment>
        {this.state.employees.map((employee, i) => (
            <Employee key={employee.id} employee={employee} deleteEmployee={this.deleteEmployee}>
              {employee.name}
            </Employee>
        ))}
      </React.Fragment>
    )
  }
}
