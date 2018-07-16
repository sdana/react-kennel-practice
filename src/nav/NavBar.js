import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import "./NavBar.css"
import api from "../apiController"

export default class NavBar extends Component {
  state = {
    query: "",
    redirect: false,
    searchResults: []
  }

  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  submitForm = (e) =>{
    e.preventDefault()
    this.refs.qfield.value = ""
    api.searchDB(this.state.query).then((response) => {
      // console.log(response)
      this.setState({redirect: true, searchResults: response})
    })
  }


  render() {
    if (this.state.redirect){
      return (
        <React.Fragment>
        <nav>
          <Link to="/">Locations</Link>
          <Link to="/animals">Animals</Link>
          <Link to="/employees">Employees</Link>
          <form onSubmit={this.submitForm}>
            <input onKeyUp={this.handleFieldChange} ref="qfield" id="query" type="text" placeholder="Search" />
          </form>
        </nav>
      <Redirect to={{
        pathname: '/searchResults',
        state: { referrer: this.state.searchResults }
      }}
      />
      </React.Fragment>)
    }
    else {
    return <nav>
        <Link to="/">Locations</Link>
        <Link to="/animals">Animals</Link>
        <Link to="/employees">Employees</Link>
        <form onSubmit={this.submitForm}>
          <input onKeyUp={this.handleFieldChange} ref="qfield" id="query" type="text" placeholder="Search" />
        </form>
      </nav>
  }
}
}
