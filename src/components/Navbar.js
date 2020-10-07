import React from "react";
import "../styles/Navbar.css";


function Navbar() {
  return (
    <nav
      style={{
        background: "#5e1224",
        
      }}
      className="navbar"
    >
      <a href="/" >Pairing.</a>

      <div style={{ width: "200px", float: "right", padding:"20px" }}>
                <form id="search-form" className="form-inline">
                    <div className="form-group mb-2">
                        <label htmlFor="Search" className="sr-only"></label>
                        <input type="text" className="form-control" id="search-query" onChange={this} placeholder="Search by name" />
                    </div>
                </form>
            </div>
    </nav>
    
  );
}

export default Navbar;
