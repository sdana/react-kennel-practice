import React, { Component } from "react"
import Animal from "./Animal"
import api from "./apiController"

export default class AnimalList extends Component {
  state = {
    animals: []
  }

  checkOutAnimal = (animalId) => {
    // Delete the specified animal from the API
    fetch(`http://localhost:3005/animals/${animalId}`, {
      method: "DELETE"
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:3005/animals")
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(animalList => {
        this.setState({
          animals: animalList
        })
      })
  }

  kennelAnimal = (e, animalName, animalBreed)=>{
    e.preventDefault()
    this.refs.animalName.value = ""
    this.refs.animalBreed.value = ""
    console.log(animalName, animalBreed)
    fetch("http://localhost:3005/animals/", {
      method: "POST",
      body: JSON.stringify({
        name: animalName,
        breed: animalBreed
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(() => api.getThing("animals").then((animals) => this.setState({ animals: animals })))
  }

  componentDidMount(){
    api.getThing("animals").then((animals) => this.setState({animals: animals}))
  }
  render() {
    return (
      <React.Fragment>
        <h3>Kennel Your Animal:</h3>
        <form onSubmit={(e) => {this.kennelAnimal(e, this.refs.animalName.value, this.refs.animalBreed.value)}}>
          <input type="text" ref="animalName" placeholder="Animal Name"/>
          <input type="text" ref="animalBreed" placeholder="Animal Breed" />
          <button type="submit">Submit</button>
        </form>
        <ul>
          {this.state.animals.map((animal) => (
            <Animal key={animal.id} animal={animal} checkOutAnimal={this.checkOutAnimal}/>
        ))}
          </ul>
      </React.Fragment>
    )
  }
}
