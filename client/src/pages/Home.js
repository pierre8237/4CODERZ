import React from "react";

import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map";
import Wines from "../components/Wines";
// import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


 
function Home() {
    return (
       <div>
        <Header />
        <Jumbotron />
        {/* <Wrapper /> */}
        <Map />
        <Wines />
        <Contact />
        <Footer />
       </div>
    );
}

 
export default Home;