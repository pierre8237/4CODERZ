import React from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
import Footer from "../components/Footer";
import Image from "../components/Gallery"
import Container from "../components/Container"




function Gallery () {
   return (
      <div>
         <Header />
         {/* <Wrapper /> */}
         <h1>Picture Gallery</h1>
         
         <Image />

         <Footer />
      </div>
   );
}
 
export default Gallery;