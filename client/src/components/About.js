import React from "react";
import "../styles/About.css";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../styles/About.css";

function About() {
  return (
    <Container>
      <div>
        <Container>

          <Row style={{ textAlign: "center" }} className="about" id="about1">
            <Col md={12}>Mission Statement.</Col>
          </Row>
          <Row style={{ textAlign: "center" }}>
            Our mission is to remove the mystery from cheese and wine pairings.
            We want to give you the power to recreate an exceptional cheese,
            charcuterie & wine pairing experience at your home. We also want to
            arm you with the advanced knowledge and theory behind why pairings
            work well, and the ability to share your learnings with the foodie
            friends & family in your life. We’re dedicated to making it easy to
            learn about the topic of cheese and wine pairings and acquired every
            product we feature in order to recreate at home.

          </Row>
        </Container>
      </div>
    </Container>
  );
}

export default About;
