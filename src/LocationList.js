import ReactDOM from "react-dom";
import React, { Component } from "react";

export default class LocationList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="location-div">
          <h3>Student Kennels</h3>
          <h4>Nashville North Location</h4>
          <h5>500 Puppy Way</h5>
        </div>
        <div className="location-div">
          <h3>Main Kennels</h3>
          <h4>Downtown Location</h4>
          <h5>2142 Rosemary Lane</h5>
        </div>
        <div className="location-div">
          <h3>Secondary Kennel Location</h3>
          <h4>East Location</h4>
          <h5>55 Woodland Street</h5>
        </div>
      </React.Fragment>
    );
  }
}
