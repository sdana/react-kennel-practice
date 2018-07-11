import React, { Component } from "react";

export default class LocationList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.locations.map(location =>
          <div className="location-div">
            <h3>{location.name}</h3>
            <h4>{location.area}</h4>
            <h5>{location.addr}</h5>
          </div>
        )}
      </React.Fragment>
    );
  }
}
