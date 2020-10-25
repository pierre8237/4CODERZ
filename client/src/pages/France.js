import React from "react";
import Header from "../components/Header";
// import Wrapper from "../components/Wrapper";
// import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
// import Jumbotron from "../components/Jumbotron";
import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";

import FranceRed from "../components/WineCards/FranceCards/franceRedWineCard";
import FranceRedb from "../components/WineCards/FranceCards/franceRedWineCard2";
import FranceWhite from "../components/WineCards/FranceCards/franceWhiteWineCard";
import FranceWhiteb from "../components/WineCards/FranceCards/franceWhiteWineCard2";

import YelpApp from "../YelpApp";
import WineryList from "../components/WineryList";
import SearchForm from "../components/SearchForm";

function France() {
  return (
    <div>
      <Header />
      {/* <Jumbotron />   */}
      <Container>
        <Col size="lg-2 sm-12"></Col>
        <Col size="lg-10 sm-12">
          <h2 className="page-title">France</h2>
          <hr />
          <p className="description">
            Featured
            <a
              href="https://www.worldwidewinetours.com/france/"
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
              wines
            </a>{" "}
            from France
          </p>
        </Col>
      </Container>

      <Container>
        <FranceRed />
      </Container>

      <Container>
        <FranceRedb />
      </Container>

      <Container>
        <FranceWhite />
      </Container>

      <Container>
        <FranceWhiteb />
      </Container>

      <Container>
        <YelpApp />
      </Container>

      <Footer />
    </div>
  );

}

export default France;
