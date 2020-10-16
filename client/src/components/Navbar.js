<<<<<<< HEAD
import React from "react";
import "../styles/Navbar.css";


function Navbar() {
  return (
    <nav
      style={{
        background: "#5e1224",
        textAlign: "left"

      }}
      className="navbar"
    >


      <a  href="/" >Pairing</a>

      <ul >
  <li><a  href="#USA" class="tittle">Usa</a></li>
  <li><a  href="#France" class="tittle">France</a></li>
  <li><a  href="#Italy" class="tittle">Italy</a></li>
  <li><a  href="#Spain" class="tittle">Spain</a></li>


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
=======
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  handleClick = () => this.props.onClick(this.props.index)

  render() {
    return (
        <Link to={`/${this.props.name}`}>
          <li
            className={this.props.isActive ? 'active' : ''}
            onClick={this.handleClick}>
            {this.props.name}
          </li>
        </Link>
    );
  }
>>>>>>> aimee
}

export default Navbar;
