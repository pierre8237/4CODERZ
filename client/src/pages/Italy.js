import React from "react";

// import "../styles/WineCard.css";

import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
<<<<<<< HEAD

import Col from "../components/Col";
import Row from "../components/Row";
import Footer from "../components/Footer";

import WineCard from "../components/WineCard";
import { wineDb } from "../utils/API";
import "../styles/WineCard.css";
=======

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import ItalyRed from "../components/WineCards/ItalyCards/italyRedWineCard";
import ItalyRedb from "../components/WineCards/ItalyCards/italyRedWineCard2";
import ItalyWhite from "../components/WineCards/ItalyCards/italyWhiteWineCard";
import ItalyWhiteb from "../components/WineCards/ItalyCards/italyWhiteWineCard2";
>>>>>>> 9e1dadec0785985f0d3608efa839a917d218b30d

function Italy() {
  return (
    <div>
      <Header />
      {/* <Jumbotron />   */}
      <Container>
        <Col size="lg-2 sm-12"></Col>
        <Col size="lg-10 sm-12">
          <h2 className="page-title">Italy</h2>
          <hr />
          <p>
            Featured
            <a
              href="https://www.worldwidewinetours.com/italy/italian-wine/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              wines
            </a>{" "}
            from Italy
          </p>
        </Col>
<<<<<<< HEAD
      </Container>

      <Container>
        <WineCard />
      </Container>

      <Container>
        <WineCard />
      </Container>

      <Container>
        <WineCard />
      </Container>

      <Container>
        <WineCard />
=======

      </Container>

      <Container>
        <ItalyRed />
      </Container>

      <Container>
        <ItalyRedb />
      </Container>

      <Container>
        <ItalyWhite />
      </Container>

      <Container>
        <ItalyWhiteb />
>>>>>>> 9e1dadec0785985f0d3608efa839a917d218b30d
      </Container>

      <Footer />
    </div>
  );
}

export default Italy;
