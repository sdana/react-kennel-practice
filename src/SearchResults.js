import React, { Component } from "react"
import DisplaySearchResults from "./DisplaySearchResults";
// import api from "./apiController"

export default class SearchResults extends Component {
    state = {
        animals: [],
        redirect: false
    }
    componentDidMount() {
        // console.log("it works!")
        this.setState({animals: this.props.location.state.referrer})
        // console.log(this.state.animals)
    }
    render() {
        return (
            <React.Fragment>
                <h1>Search Results: </h1>
                {this.state.animals.map((currentArr, index) =>{
                    {/* console.log(currentArr) */}
                    if (currentArr.length !== 0){
                        {/* console.log(currentArr[index].name) */}
                        currentArr.map(thing =>{
                            {/* console.log(thing.name) */}
                           <DisplaySearchResults thing={thing}>
                        })
                        {/* return <h2 key={index}>{currentArr[index].name}</h2> */}
                    }
                    })}
            </React.Fragment>
        )
    }
}