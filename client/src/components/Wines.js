import React, { Component } from "react";
import "../styles/Wines.css";
// import Row from "../components/Row";
import Col from "../components/Col";
import wineImages from "../wineImages.js";
import Img from "../components/Img";
import Container from "../components/Container";
// import Card from "../components/Card";
import Wrapper from "../components/Wrapper";


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
      
      <Wrapper>
      <Container>
      <div style={{display: "inline-block"}}>
      <div className="row">
           <div className="col-sm-12" >
       {this.state.wineImages.map(wineImgs => (
         
        
            <Img image={wineImgs.image} />
      
        //  <Col col size="lg-4 sm-12">
        //    {" "}
        //    <Img image={wineImgs.image} />
         
        //  </Col>
       ))}
      
     </div>
     </div>
           </div>
      </Container>
      </Wrapper>
    );
    }
  }

  export default Wines;