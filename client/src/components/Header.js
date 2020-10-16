<<<<<<< HEAD
import React from "react";
import "../styles/Header.css";
import cheese from "./Images/cheese-plate.jpg";



function Header() {
  return (
    
      <img src={cheese} alt="Wine and Chease" width="1888 px" />
    
  );
}



export default Header;
=======
import React, { Component } from 'react';
import Navbar from './Navbar';
import "../styles/Header.css";

class Header extends Component {
  state = {
    activeIndex: null
  }
  handleClick = (index) => this.setState({ activeIndex: index });
  render() {
    const clickables = [
    { name: "Home" },
    { name: "France" },
    { name: "Italy" },
    { name: "Spain" },
    { name: "Usa" }
  ];
  return (
    <div>
    <ul>
      { clickables.map((clickable, i) => {
          return <Navbar 
            key={ clickable.name }
            name={ clickable.name }
            index={ i }
            isActive={ this.state.activeIndex === i }
            onClick={ this.handleClick }
          />
        })
      }
  </ul>
</div>
  )
  }
}

export default Header;
>>>>>>> aimee
