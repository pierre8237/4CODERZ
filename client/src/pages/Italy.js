import React from "react";

import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import Col from "../components/Col";
import Row from "../components/Row";
import Footer from "../components/Footer";


import WineCard from "../components/WineCard";
import { wineDb } from "../utils/API";
import "../styles/WineCard.css";

function Italy() {
   return (
      <div>
        <Header />
        {/* <Jumbotron />   */}
        <Container>
        <Col size="lg-2 sm-12">
        </Col>
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
        </Container>

        <Footer />
    </div>
  );
}

export default Italy;
