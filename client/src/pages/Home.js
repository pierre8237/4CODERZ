import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "../components/Container";

// import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map";
import Wines from "../components/Wines";
import Header from "../components/Header";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Team from "../components/Team";
import About from "../components/About";


 
function Home() {
    return (
       <div>
        <Header />
        <Jumbotron fluid>
        <Container>
        <h1>Dionysus</h1>
        <h3>
        Featuring wines from the top selling regions.
        </h3>
        </Container>
        </Jumbotron>
        <About />
        <Map />
        <Wines />
        <Team />
        {/* <Contact /> */}
        <Footer />
       </div>
    );
}

 
export default Home;