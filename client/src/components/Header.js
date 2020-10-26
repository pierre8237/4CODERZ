import React, { Component } from "react";

import Navbar from "./Navbar";
import "../styles/Header.css";

// class Header extends Component {
//   state = {
//     activeIndex: null
//   };
//   handleClick = index => this.setState({ activeIndex: index });
//   render() {
//     const clickables = [
//       { name: "Home" },
//       { name: "France" },
//       { name: "Italy" },
//       { name: "Spain" },
//       { name: "Usa" },
//       { name: "Gallery" },
//       { name: "Contact" }
//     ];
//     return (
//       <div className="Main">
//         <ul>
//           {clickables.map((clickable, i) => {
//             return (
//               <Navbar
//                 key={clickable.name}
//                 name={clickable.name}
//                 index={i}
//                 isActive={this.state.activeIndex === i}
//                 onClick={this.handleClick}
//               />
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

// export default Header;

function Header() {
  return (
    <header className="Header">
      <img src={require("./Images/logo3.png")} className="Logo" alt="logo" />
      <nav className="Nav">
        <a href={["/home"]}>Home</a>
        <a href="/france">France</a>
        <a href="/italy">Italy</a>
        <a href="/spain">Spain</a>
        <a href="/usa">USA</a>
        <a href="/gallery">Gallery</a>
        <a href="/search">Search</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
export default Header;
