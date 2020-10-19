import React from "react";
import "../styles/Team.css";
import Row from "../components/Row";
import Col from "../components/Col";
import Img from "../components/Img";
import Container from "../components/Container";
import Card from "../components/Card";
import Wrapper from "../components/Wrapper";

import Mathew from "./Images/mathew.jpeg"
import Colin from "./Images/colin.jpeg";
import Aimee from "./Images/aimee.jpg";
import Pierre from "./Images/pierre.jpg";



function Team() {
    return (
<Container>

<div className="Row">
  <div class="column">
    <div class="card">
      <img src={Aimee} alt="Aimee"  />
      <div class="container">
        <h2>Aimee Millard</h2>
        <p class="title">Developer</p>
        <p>text that describes me</p>
        <p>example@example.com</p>
        <p><a href="https://github.com/">GitHub </a></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={Mathew} alt="Mathew"  />
      <div class="container">
        <h2>Mathew Poovathany</h2>
        <p class="title">Developer</p>
        <p>text that describes me</p>
        <p>Poovathanymathew@gmail.com</p>
        <p><a href="https://github.com/mathewpoovathany">GitHub </a></p> 
      </div>
    </div>
  </div>
 
   <div class="column">
    <div class="card">
      <img src={Pierre} alt="Pierre" />
      <div class="container">
        <h2>Pierre Calmles</h2>
        <p class="title">Developer</p>
        <p>text that describes me</p>
        <p>example@example.com</p>
        <p><a href="https://github.com/">GitHub </a></p> 
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src={Colin} alt="Colin"  />
      <div class="container">
        <h2>Colin</h2>
        <p class="title">Developer</p> 
        <p>text that describes me</p>
        <p>example@example.com</p>
        <p><a href="https://github.com/">GitHub </a></p>
      </div>
    </div>
  </div>
</div>
</Container>
   
  )
}

export default Team;