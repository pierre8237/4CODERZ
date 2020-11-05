import React from "react";
import "../styles/WineCard.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Col from "react-bootstrap/Col";
import UsaRed from "../components/WineCards/USACards/UsaRedWineCard";
import UsaRedb from "../components/WineCards/USACards/UsaRedWineCard2";
import UsaWhite from "../components/WineCards/USACards/UsaWhiteWineCard";
import UsaWhiteb from "../components/WineCards/USACards/UsaWhiteWineCard2";

function Usa() {
  return (
    <div>
      <Header />
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
