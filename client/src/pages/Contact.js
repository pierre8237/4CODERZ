import React from "react";

import Header from "../components/Header";
import Container from "../components/Container";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";



function Contact() {

    return (
    <div>
    <Header />
    {/* <Jumbotron />   */}
    <h1>Contact Us</h1>
    <ContactUs />
    <Footer />
  </div>
);

}

export default Contact;