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


// import YelpApp from "../Yelp/YelpApp";
// import WineryList from "../components/WineryList";
// import SearchForm from "../components/SearchForm";

function France() {

    return (
      <div>
        <Header />
        {/* <Jumbotron />   */}
        <Container>
        <Col size="lg-2 sm-12">
        </Col>
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

      {/* <Container>
        <YelpApp />
      </Container> */}

      <Footer />
    </div>
  );

}

export default France;
