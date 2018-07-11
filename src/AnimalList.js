import React, { Component } from "react"

export default class EmployeeList extends Component {
  render() {
    console.log(this.props.employees)
    return (
      <React.Fragment>
        {this.props.ownersAndAnimals.map((item, index) => {
          let currentAni = item.animalId - 1
          let currentOwn = item.ownerId - 1
          console.log(currentAni)
          console.log(currentOwn)
          return (
            <div className="animals-card">
              <h3>{this.props.animals[currentAni].name}</h3>
              <h4>{this.props.owners[currentOwn].name}</h4>
            </div>
          )
        })}
      </React.Fragment>
    )
  }
}
