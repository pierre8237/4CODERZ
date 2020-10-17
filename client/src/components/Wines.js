import React, { Component } from "react";
import "../styles/Wines.css";
import Row from "../components/Row";
import Col from "../components/Col";
import wineImages from "../wineImages.js";
import Img from "../components/Img";

// import wine1 from "./Images/mythicus.jpg"
// import wine2 from "./Images/cakebread.jpeg"
// import wine3 from "./Images/weinbach.jpg"
// import wine4 from "./Images/ramey.png"
// import wine5 from "./Images/chateau.gif"
// import wine6 from "./Images/domaine.jpg"
// import wine7 from "./Images/plantea.jpeg"



class Wines extends Component {
  state = {
    wineImages
  };

  render() {
    return (
      <div>
      <hr />
      <Row>
        {this.state.wineImages.map(wineImgs => (
          <Col size="lg-4 sm-12">
            {" "}
            <Img image={wineImgs.image} />
          </Col>
        ))}
      </Row>
      </div>
    );
    }
  }

  export default Wines;