import React from "react";
import "../styles/Header.css"
import cheese from "./Images/cheese-plate.jpg";



function Header() {
  return (
    <div class = "mainimage" >
      <img src={cheese} alt="Wine and Chease" width = "1845px"  />
    </div>
  );
}



export default Header;
