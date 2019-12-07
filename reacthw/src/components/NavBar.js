import React, { Component } from 'react';
//import "../styles/Header.css";

function NavBar (handleFormSubmit){
    return (
      <nav>
          <button>Search by Name</button>
          <button>Search by Job</button>

          <input type="name" className="form-control" />
          <input type="name" className="form-control" />
      </nav>
    )
}

export default NavBar;