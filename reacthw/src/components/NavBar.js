import React, { Component } from 'react';
import employeeData from "../API/employees";
import "../style/NavBar.css";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    for (var i = 0; i < employeeData.length; i++)
      this.state = {
        name: "",
        job: "",
        email: ""
      };
  }

  handleFormName = (event) => {
    event.preventDefault();
    const input = event.target.value

    for (var i = 0; i < employeeData.length; i++) {
      if (input === employeeData[i].name) {

        this.setState({
          name: employeeData[i].name,
          job: employeeData[i].job,
          email: employeeData[i].email
        })
      }
    }
  }

  handleFormJob = (event) => {
    event.preventDefault();
    const input = event.target.value

    for (var i = 0; i < employeeData.length; i++) {
      if (input === employeeData[i].job) {

        this.setState({
          name: employeeData[i].name,
          job: employeeData[i].job,
          email: employeeData[i].email
        })
      }
    }
  }
  render() {
    return (
      <div>
        <nav>
          <form id="byName">
            <input type="name" className="form-control" placeholder="Search By Name" onChange={this.handleFormName} />
          </form>
          <form id="byJob">
            <input type="job" className="form-control" placeholder="Search by Job" onChange={this.handleFormJob} />
          </form>
          <div>
            <td id="search"><h2>{this.state.name}</h2></td>
            <td id="search"><h2>{this.state.job}</h2></td>
            <td id="search"><h2>{this.state.email}</h2></td>
          </div>
        </nav>
        <tr>
          <tr>
            <td id="name">Name</td>
            <td id="job">Job</td>
            <td id="email">Email</td>
          </tr>
          {
            Object.keys(employeeData).map((i) => {
              return <tr id="data-table" >
                <td id="info"><h2>{employeeData[i].name}</h2></td>
                <td id="info"><h2>{employeeData[i].job}</h2></td>
                <td id="info"><h2>{employeeData[i].email}</h2></td>
              </tr>
            })
          }
        </tr>
      </div>
    )
  }
}


