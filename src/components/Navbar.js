import React from "react";
import "../styles/Navbar.css";


function Navbar() {
  return (
    <nav
      style={{
        background: "#5e1224",
        textAlign: "center"
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

// <nav class="navbar navbar-expand-lg navbar-light bg-light">
// <a class="navbar-brand" href="#">Navbar</a>
// <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//   <span class="navbar-toggler-icon"></span>
// </button>
// <div class="collapse navbar-collapse" id="navbarNav">
//   <ul class="navbar-nav">
//     <li class="nav-item active">
//       <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="#">Features</a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link" href="#">Pricing</a>
//     </li>
//     <li class="nav-item">
//       <a class="nav-link disabled" href="#">Disabled</a>
//     </li>
//   </ul>
// </div>
// </nav>
    
  );
}

export default Navbar;
