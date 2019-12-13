import React, { Component } from 'react';
import Data from "./data";
import employeeData from "../API/employees";
//import "../styles/Header.css";

export default class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      handleFormSubmit: event => {
        event.preventDefault();
        const input = event.target.value

        for(var i = 0; i < employeeData.length; i++) {
          return 
        }
        console.log(input)

      }
    }
  }
  render() {
    return (
      <div>
        <nav>
          <form>
            <input type="name" className="form-control" placeholder="Search By Name" onChange={this.handleFormSubmit}></input>
            <button onClick={this.handleFormSubmit}>submit</button>
          </form>

          <form>
            <input type="job" className="form-control" placeholder="Search by Job" />
            <button onClick={this.handleFormSubmit}>submit</button>
          </form>
        </nav>
        <Data/>
      </div>
    )
  }
}