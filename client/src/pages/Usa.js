import React from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import { wineDb } from "../utils/API";
// import Header from "./components/Header";
// import Map from "./components/Map";
// import Navbar from "./components/Navbar";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

let db = wineDb.getPairings().then(res => console.log(res.data));

function Usa() {
  return (
    <div>
      <Header />
      <Wrapper />
      <h1>United States</h1>
      <p>Featured wines from the UNited States</p>
    </div>
  );
}

export default Usa;
