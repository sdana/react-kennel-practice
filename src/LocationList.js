import React, { Component } from "react";
import Location from "./Location"
import api from "./apiController"

export default class LocationList extends Component {
  state = {
    locations: []
  }

  componentDidMount(){
   api.getThing("locations").then((locations) => {this.setState({locations: locations})})
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
