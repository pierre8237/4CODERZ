import React from "react";
import "../styles/Jumbotron.css";
import Container from "../components/Container";

function Jumbotron(props) {
  return (
    <Container>
      <div className="jumbotron jumbotron-fluid">
        <div className="jumbodisplay">
          <h1 className="display-4">
            Dionysus<i className="fas fa-wine-bottle"></i>
          </h1>
        </div>
      </div>
    </Container>
  );
}

export default Jumbotron;
