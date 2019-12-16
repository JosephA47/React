import React, { Component } from 'react';
import "../style/header.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>View your employees.</p>
      </div>
    )
  }
}
