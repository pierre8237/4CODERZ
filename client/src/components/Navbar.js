import React from "react";
import "../styles/Navbar.css";
import logo from "./Images/logo.png"

function Navbar() {
  return (
    <nav
      style={{
        background: "#5e1224",
        textAlign: "left"
      }}
      className="navbar">

      
      <img src={logo} alt="logo" height="90px" />
      
      <a  href="/" >Dionysus</a>

    <ul>
      
  <li><a  href="#Mission" class="tittle">Mission STM</a></li>
  <li><a  href="#Wines" class="tittle">Wines</a></li>
  <li><a  href="#Map" class="tittle">Map</a></li>
  <li><a  href="#Contact" class="tittle">Contact</a></li>

      <div style={{ width: "200px", float: "right", padding:"20px" }}>
                <form id="search-form" className="form-inline">
                    <div className="form-group mb-2">
                        <label htmlFor="Search" className="sr-only"></label>
                        <input type="text" className="form-control" id="search-query" onChange={this} placeholder="Search by name" />
                    </div>
                </form>
            </div>
    </ul>
          
            
    </nav>

    
  );
}

export default Navbar;