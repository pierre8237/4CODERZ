import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "../components/Gallery";

function Gallery() {
  return (
    <div>
      <Header />
      <h1>Picture Gallery</h1>
      <Image />
      <Footer />
    </div>
  );
}

export default Gallery;
