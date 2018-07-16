import React, { Component } from "react"
import DisplaySearchResults from "./DisplaySearchResults";
// import api from "./apiController"
import NavBar from "./nav/NavBar"

export default class SearchResults extends Component {
    state = {
        results: [],
        redirect: false
    }
    componentDidMount() {
        // console.log("it works!")
        this.setState({results: this.props.location.state.referrer})
        // console.log(this.state.animals)
    }
    render() {
        console.log(this.state.results)
        return (
            <React.Fragment>
            <NavBar />
                <h1>Search Results: </h1>
                {this.state.results.map((currentArr) =>{
                    console.log(currentArr)
                    return currentArr.map(currentObj => {
                       return <DisplaySearchResults currentObject={currentObj} />
                    })
                })}
            </React.Fragment>
        )
    }
}