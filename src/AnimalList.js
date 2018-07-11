import React, { Component } from "react"

export default class EmployeeList extends Component {
  render() {
    console.log(this.props.employees)
    return (
      <React.Fragment>
        {this.props.animals.map((animal) => (
          <div className="animals-card">
            <h3>Animal: {animal.name}</h3>
            <h4>Owner: {this.props.owners[index].name}</h4>
          </div>
        ))}
      </React.Fragment>
    )
  }
}
