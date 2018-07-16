import React, { Component } from "react"
// import DisplaySearchResults from "./DisplaySearchResults";
// import api from "./apiController"
import NavBar from "./nav/NavBar"
import Employee from "./Employee";
import Location from "./Location";
import Animal from "./Animal";

export default class SearchResults extends Component {
    state = {
        results: [],
        redirect: false
    }
    componentDidMount() {
        // console.log("it works!")
        this.setState({results: this.props.results})
        // console.log(this.state.animals)
    }
    render() {
        console.log(this.state.results)
        return (
            <React.Fragment>
                <h1>Search Results: </h1>
                {this.state.results.map((currentArr, i) =>{
                  if (currentArr.length !== 0){
                    switch (i){
                        case 0:
                             return currentArr.map(currentObj => {
                                return <Employee key={currentObj.id} employee={currentObj} />
                            })
                            break
                        case 1:
                             return currentArr.map(currentObj => {
                                return <Location key={currentObj.id} locations={currentObj} />
                            })
                            break
                        case 2:
                             return currentArr.map(currentObj => {
                                return <Animal key={currentObj.id} animal={currentObj} />
                            })
                            break
                        default:
                            break
                    }
                  }
                })}
            </React.Fragment>
        )
    }
}