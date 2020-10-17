import React from "react";
import Row from "../components/Row";
import "../styles/About.css";

function About() {
    return (
       
<div>
      <Row>
      <h2 className="about text-center"> Mission Statement.</h2>
      <h4 className="about text-center">Our mission is to remove the mystery from cheese and wine pairings.</h4>
      <h4 className="about text-center">We want to give you the power to recreate an exceptional cheese, charcuterie & wine pairing experience at your home.</h4>
      <h4 className="about text-center">We also want to arm you with the advanced knowledge and theory behind why pairings work well, and the ability to share your</h4>
      <h4 className="about text-center">learnings with the foodie friends & family in your life. We’re dedicated to making it easy to learn about the topic of cheese </h4>
      <h4 className="about text-center">and wine pairings and acquired every product we feature in order to recreate at home.</h4>
      
      </Row>
</div>
    )
}

export default About;