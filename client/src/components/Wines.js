import React, { Component } from "react";
import "../styles/Wines.css";
import wineImages from "../wineImages.js";
import Img from "../components/Img";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class Wines extends Component {
  state = {
    wineImages,
  };

  render() {
    return (
      <Container>
        <Col sm={12}>
          {this.state.wineImages.map(wineImgs => (
            <Img image={wineImgs.image} />
          ))}
        </Col>
      </Container>
    );
  }
}

export default Wines;
