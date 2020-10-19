import React from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Card from "../components/Card";
import Col from "../components/Col";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Row from "../components/Row";
import Container from "../components/Container";
import Jumbotron from "../components/Jumbotron";


function Italy() {
   return (
      <div>
        <Header />
        <Jumbotron />  
        <Container>
       
        <Col size="lg-2 sm-12">
      
        </Col>
        <Col size="lg-10 sm-12">
        <h2 className="page-title">Italy</h2>
          <hr />
          <p>Featured
          <a href="https://www.worldwidewinetours.com/italy/italian-wine/"
            rel="noopener noreferrer"
            target="_blank">
            {" "}
            wines
            </a>{" "}
            from Italy
            </p>
        </Col>
        </Container>
        
        <Container>
            <p>Wine cards</p>
        </Container>

        <Container>
    
      </Container>

        <Footer />
      </div>
    );
}
 
export default Italy;