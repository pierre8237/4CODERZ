import React, { Component } from "react";
import "../styles/Wines.css";
import wineImages from "../wineImages.js";
import Row from "../components/Row";
import Col from "../components/Col";
import Img from "../components/Img";
import Container from "../components/Container";

import Wrapper from "../components/Wrapper";

class Wines extends Component {
  state = {
    wineImages,
  };

  render() {
    return (
      <Container>
        <div className="col-sm-12">
          <div className="col col-sm-12">
            <div className="col col-sm-12">
              {this.state.wineImages.map(wineImgs => (
                <Img image={wineImgs.image} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    );
  }
}

export default Wines;
