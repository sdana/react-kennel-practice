import React, { Component } from "react"
import EmployeeList from "./EmployeeList"
import LocationList from "./LocationList"
import AnimalList from "./AnimalList"

export default class Kennel extends Component {
  state = {
    employees: [
      { id: 1, name: "Jessica Younker" },
      { id: 2, name: "Jordan Nelson" },
      { id: 3, name: "Zoe LeBlanc" },
      { id: 4, name: "Blaise Roberts" }
    ],
    locations: [
      {
        id: 1,
        name: "Student Kennels",
        area: "Nashville North Location",
        addr: "500 Puppy Way"
      },
      {
        id: 2,
        name: "Nashville South",
        area: "South Nashville",
        addr: "2142 Rosemary Lane"
      },
      {
        id: 3,
        name: "East Side Kennel",
        area: "East Nashville",
        addr: "50 Woodland Street"
      }
    ],
    animals: [
      { id: 1, name: "Panther" },
      { id: 2, name: "Cat" },
      { id: 3, name: "Dog" },
      { id: 4, name: "CatDog" },
      { id: 5, name: "Buffalo" },
      { id: 6, name: "Beefalo" }
    ],
    owners: [
      { id: 1, name: "Ryan Tanay" },
      { id: 2, name: "Emma Beaton" },
      { id: 3, name: "Dani Adkins" },
      { id: 4, name: "Adam Oswalt" },
      { id: 5, name: "Fletcher Bangs" },
      { id: 6, name: "Angela Lee" }
    ],
    ownersAndAnimals: [
      { id: 1, animalId: 3, ownerId: 4 },
      { id: 2, animalId: 1, ownerId: 2 },
      { id: 3, animalId: 5, ownerId: 6 },
      { id: 4, animalId: 2, ownerId: 3 },
      { id: 5, animalId: 6, ownerId: 1 },
      { id: 6, animalId: 4, ownerId: 5 }
    ]
  }
  render() {
    return (
      <React.Fragment>
        <AnimalList animals={this.state.animals} owners={this.state.owners} ownersAndAnimals={this.state.ownersAndAnimals} />
        <LocationList locations={this.state.locations} />
        <EmployeeList employees={this.state.employees} />
      </React.Fragment>
    )
  }
}
