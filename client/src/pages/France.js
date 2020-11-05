import React from "react";
import Header from "../components/Header";
import "../styles/WineCard.css";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Col from "react-bootstrap/Col";
import FranceRed from "../components/WineCards/FranceCards/franceRedWineCard";
import FranceRedb from "../components/WineCards/FranceCards/franceRedWineCard2";
import FranceWhite from "../components/WineCards/FranceCards/franceWhiteWineCard";
import FranceWhiteb from "../components/WineCards/FranceCards/franceWhiteWineCard2";

function France() {
  return (
    <div>
      <Header />
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

      <Footer />
    </div>
  );
}

export default France;
