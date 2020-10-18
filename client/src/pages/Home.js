import React from "react";

import Jumbotron from "../components/Jumbotron";
import Map from "../components/Map";
import Wines from "../components/Wines";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Team from "../components/Team";
import About from "../components/About";


 
function Home() {
    return (
       <div>
        <Header />
        <Jumbotron />
        <About />
        <Map />
        <Wines />
        <Team />
        <Contact />
        <Footer />
       </div>
    );
}

 
export default Home;