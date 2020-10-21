import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
// import Card from "../components/Card";
import WineCard from "../components/WineCard";
import { wineDb } from "../utils/API";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/Row";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import "../styles/WineCard.css";
let db = wineDb.getPairings().then(res => console.log(res.data));

function Usa() {
  const [wines, setWines] = useState([]);
  const [formObject, setFormObject] = useState({
    From: "",
    Brand_Name: "",
    Vintage: "",
    Region: "",
    Soil: "",
    Grape: "",
    Drinking_Temperature: "",
    Price_Point: "",
    Cheese_Pairing: ""
  });

  function loadWine() {
    wineDb.getPairings().then(res => {
      db = res.data;
    });
  }

  wineDb.getPairings();

  return (
    <div>
      <Header />
      <Jumbotron />
      <Container>
        <Col size="lg-2 sm-12"></Col>
        <Col size="lg-10 sm-12">
          <h2 className="page-title">USA</h2>
          <hr />
          <p>
            Featured!!!!
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
          {/* {loadWine()} */}
        </Col>
      </Container>

      <Container>
        <WineCard />
      </Container>

      <Container>
        <WineCard />
      </Container>

      <Footer />
    </div>
  );
}

export default Usa;
