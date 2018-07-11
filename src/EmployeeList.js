import React, { Component } from "react";

export default class EmployeeList extends Component {
  render() {
    console.log(this.props.employees);
    return (
      <React.Fragment>
        {
            this.props.employees.map(employee =>
                <div>
                    <h3>{employee.name}</h3>
                </div>
        )
        }
      </React.Fragment>
    );
  }
}
