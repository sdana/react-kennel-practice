import React, { Component } from "react";
import Location from "./Location"

export default class LocationList extends Component {
  state = {
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
    ]
  }
  render() {
    return (
      <React.Fragment>
        {this.state.locations.map((location, i) =>
            <Location key={location.id} locations={location} />
        )}
      </React.Fragment>
    );
  }
}
