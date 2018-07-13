import React, { Component } from "react"
import Employee from "./Employee"
import api from "./apiController"

export default class EmployeeList extends Component {
    state = {
      employees: []
    }

  componentDidMount() {
    api.getThing("employees")
      .then(employees => this.setState({ employees: employees }))
  }

  render() {
    return (
      <React.Fragment>
        {this.state.employees.map((employee, i) => (
            <Employee key={employee.id} employee={employee}>
              {employee.name}
            </Employee>
        ))}
      </React.Fragment>
    )
  }
}
