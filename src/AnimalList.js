import React, { Component } from "react"
import Animal from "./Animal"
import api from "./apiController"

export default class AnimalList extends Component {
  state = {
    animals: []
  }

  componentDidMount(){
    api.getThing("animals").then((animals) => this.setState({animals: animals}))
  }
  render() {
    return (
      <ul>
        {this.state.animals.map((animal) => (
          <Animal key={animal.id} animal={animal} />
      ))}
        </ul>
    )
  }
}
