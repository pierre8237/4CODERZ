import React from "react";


import Header from "../components/Header";
import Map from "../components/Map";
import Wines from "../components/Wines";
// import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


 
function Home() {
    return (
       <div>
        <Header />
        <Map />
        <Wines />
        <Contact />
        <Footer />
       </div>
    );
}

 
export default Home;