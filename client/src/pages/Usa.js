<<<<<<< HEAD
// import React from "react";
import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";

import Col from "../components/Col";
import Row from "../components/Row";
import Footer from "../components/Footer";

import WineCard from "../components/WineCard";
import { wineDb } from "../utils/API";
=======
import React from "react";
>>>>>>> 9e1dadec0785985f0d3608efa839a917d218b30d
import "../styles/WineCard.css";
import Header from "../components/Header";

<<<<<<< HEAD
let db = wineDb.getPairings().then(res => console.log(res.data));

function Usa() {
  const [wines, setWines] = useState([]);
  const [formObject, setFormObject] = useState({
    Brand_Name: "",
    Cheese_Pairing: "",
    Drinking_Temperature: "",
    From: "",
    Grape: "",
    Price_Point: "",
    Vintage: "",
    Region: "",
    Soil: "",
    Vintage: "",

    Price_Point: "",
  });

  function loadWine() {
    wineDb.getPairings().then(res => {
      db = res.data;
    });
  }

  wineDb.getPairings();

=======
import Footer from "../components/Footer";
import Container from "../components/Container";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import UsaRed from "../components/WineCards/USACards/UsaRedWineCard";
import UsaRedb from "../components/WineCards/USACards/UsaRedWineCard2";
import UsaWhite from "../components/WineCards/USACards/UsaWhiteWineCard";
import UsaWhiteb from "../components/WineCards/USACards/UsaWhiteWineCard2";

function Usa() {
>>>>>>> 9e1dadec0785985f0d3608efa839a917d218b30d
  return (
    <div>
      <Header />
      {/* <Jumbotron /> */}
      <Container>
        <Col size="lg-2 sm-12"></Col>
        <Col size="lg-10 sm-12">
          <h2 className="page-title">USA</h2>
          <hr />
          <p>
            Featured
            <a
              href="https://www.worldwidewinetours.com/california/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              wines
            </a>{" "}
            from USA
          </p>
        </Col>
      </Container>

      <Container>
        <UsaRed />
      </Container>

      <Container>
        <UsaRedb />
      </Container>

      <Container>
        <UsaWhite />
      </Container>

      <Container>
        <UsaWhiteb />
      </Container>

      <Footer />
    </div>
  );
}

export default Usa;
