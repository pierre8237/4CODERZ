import React from "react";
import "../styles/WineCard.css";
import Header from "../components/Header";
<<<<<<< HEAD
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";

import Col from "../components/Col";
import Row from "../components/Row";
=======

>>>>>>> 9e1dadec0785985f0d3608efa839a917d218b30d
import Footer from "../components/Footer";
import Container from "../components/Container";

<<<<<<< HEAD
import WineCard from "../components/WineCard";
import { wineDb } from "../utils/API";
import "../styles/WineCard.css";

=======
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import SpainRed from "../components/WineCards/SpainCards/SpainRedWineCard";
import SpainWhite from "../components/WineCards/SpainCards/SpainWhiteWineCard";
import SpainRedb from "../components/WineCards/SpainCards/SpainRedWineCard2";
import SpainWhiteb from "../components/WineCards/SpainCards/SpainWhiteWineCard2";


>>>>>>> 9e1dadec0785985f0d3608efa839a917d218b30d
function Spain() {
  return (
    <div>
      <Header />
      {/* <Jumbotron />   */}
      <Container>
        <Col size="lg-2 sm-12"></Col>
        <Col size="lg-10 sm-12">
          <h2 className="page-title">Spain</h2>
          <hr />
          <p>
            Featured
            <a
              href="https://www.worldwidewinetours.com/spain/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              wines
            </a>{" "}
            from Spain
          </p>
        </Col>
      </Container>

      <Container>
        <SpainRed />
      </Container>

      <Container>
        <SpainRedb />
      </Container>

      <Container>
        <SpainWhiteb />
      </Container>

      <Container>
        <SpainWhite />
      </Container>

      <Footer />
    </div>
  );
}

export default Spain;
