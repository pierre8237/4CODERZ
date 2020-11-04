import React from "react";
import "../styles/WineCard.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Col from "react-bootstrap/Col";
import ItalyRed from "../components/WineCards/ItalyCards/italyRedWineCard";
import ItalyRedb from "../components/WineCards/ItalyCards/italyRedWineCard2";
import ItalyWhite from "../components/WineCards/ItalyCards/italyWhiteWineCard";
import ItalyWhiteb from "../components/WineCards/ItalyCards/italyWhiteWineCard2";

function Italy() {
  return (
    <div>
      <Header />
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
      </Container>

      <Footer />
    </div>
  );
}

export default Italy;
