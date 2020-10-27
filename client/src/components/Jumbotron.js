import React from "react";
import "../styles/Jumbotron.css";

import Row from "../components/Row";
import Col from "../components/Col";
import Img from "../components/Img";
import Container from "../components/Container";

import Wrapper from "../components/Wrapper";

function Jumbotron(props) {
  return (
    <Container>
      <div className="jumbotron jumbotron-fluid">
        <div className="jumbodisplay">
          <h1 className="display-4">
            Dionysus <i className="fas fa-wine-bottle"></i>
          </h1>
        </div>
      </div>
    </Container>
  );
}

export default Jumbotron;
