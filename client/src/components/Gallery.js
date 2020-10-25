import React, { Component } from "react";
import "../styles/Gallery.css";
import Col from "./Col";
import GalleryImg from "../GalleryImg";
import Img from "./Img1";
import Container from "./Container";
import Wrapper from "./Wrapper";



class Gallery extends Component {
  state = {
    GalleryImg
  };

  render() {
    return (
      
      // <Wrapper>
      <Container>
      <div id="gallery" style={{display: "inline-block"}}>
      <div className="row">
      <div className="col-sm-12" >

       {this.state.GalleryImg.map(GalleryImg => (
            <Img image={GalleryImg.image} />
       ))}
      
     </div>
     </div>
     </div>
      </Container>
      // </Wrapper>
    );
    }
  }

  export default Gallery;