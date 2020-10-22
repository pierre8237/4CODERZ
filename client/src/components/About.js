import React from "react";
import Row from "../components/Row";
import "../styles/About.css";


import Col from "../components/Col";
import Img from "../components/Img";
import Container from "../components/Container";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";
import "../styles/About.css"

function About() {
    return (
<Container>     
<div>
      <Row>
      <h2 className="about text-center" id="about1" > Mission Statement.</h2>
      <h4 className="about text-center">Our mission is to remove the mystery from cheese and wine pairings.
      We want to give you the power to recreate an exceptional cheese, charcuterie & wine pairing experience at your home.
     We also want to arm you with the advanced knowledge and theory behind why pairings work well, and the ability to share your
      learnings with the foodie friends & family in your life. We’re dedicated to making it easy to learn about the topic of cheese 
      and wine pairings and acquired every product we feature in order to recreate at home.</h4>
      
      </Row>
</div>
</Container> 
)
}

export default About;