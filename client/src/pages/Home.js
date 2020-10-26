import React from "react";
import Header from "../components/Header";
// import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";
import About from "../components/About";
import Map from "../components/Map";
import Wines from "../components/Wines";
import Team from "../components/Team";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Jumbotron fluid>
        <Container>
          <h1>Dionysus</h1>
          <h3>Featuring wines from the top selling regions.</h3>
        </Container>
      </Jumbotron>
      <About />
      <Map />
      <Wines />
      <Team />
      <Footer />
    </div>
  );
}

export default Home;
