import React, { Component } from "react"
import Animal from "./Animal"

export default class AnimalList extends Component {
  state = {
    animals: [
      { id: 1, name: "Panther" },
      { id: 2, name: "Cat" },
      { id: 3, name: "Dog" },
      { id: 4, name: "CatDog" },
      { id: 5, name: "Buffalo" },
      { id: 6, name: "Beefalo" }
    ]
    //   owners: [
    //     { id: 1, name: "Ryan Tanay" },
    //     { id: 2, name: "Emma Beaton" },
    //     { id: 3, name: "Dani Adkins" },
    //     { id: 4, name: "Adam Oswalt" },
    //     { id: 5, name: "Fletcher Bangs" },
    //     { id: 6, name: "Angela Lee" }
    //   ],
    //     ownersAndAnimals: [
    //       { id: 1, animalId: 3, ownerId: 4 },
    //       { id: 2, animalId: 1, ownerId: 2 },
    //       { id: 3, animalId: 5, ownerId: 6 },
    //       { id: 4, animalId: 2, ownerId: 3 },
    //       { id: 5, animalId: 6, ownerId: 1 },
    //       { id: 6, animalId: 4, ownerId: 5 }
    //     ]
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
