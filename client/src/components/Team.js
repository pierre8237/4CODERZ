import React from "react";
import "../styles/Team.css";

import Mathew from "./Images/mathew (1).png";
import Colin from "./Images/colin (1).png";
import Aimee from "./Images/aimee (1).png";
import Pierre from "./Images/pierre (1).png";
import Container from "./Container";

function Team() {
  return (
    <Container>


 
<div class="row">
<div class="column">
    <div class="card">
      <img src={Aimee} alt="Aimee" height="330px"  />
      <div class="container">
        <h2>Aimee Millard</h2>
        <p class="title">Developer</p>
        <p></p>
        <p>an.millard19@gmail.com</p>
        <p><a href="https://github.com/aimeemillard">GitHub </a></p>
        
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={Mathew} alt="Mathew" height="330px"  />
      <div class="container">
        <h2>Mathew Poovathany</h2>
        <p class="title">Developer</p>
        <p></p>
        <p>Poovathanymathew@gmail.com</p>
        <p><a href="https://github.com/mathewpoovathany">GitHub </a></p> 
      </div>
    </div>
  </div>

  
  <div class="column">
    <div class="card">
      <img src={Pierre} alt="Pierre" height="330px" />
      <div class="container">
        <h2>Pierre Calmles</h2>
        <p class="title">Developer</p>
        <p></p>
        <p>pierre8237@yahoo.com</p>
        <p><a href="https://github.com/pierre8237">GitHub </a></p>
        
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src={Colin} alt="Colin" height="330px"  />
      <div class="container">
        <h2>Colin Schlank</h2>
        <p class="title">Developer</p>
        <p></p>
        <p>colinschlank@yahoo.com</p>
        <p><a href="https://github.com/colinschlank">GitHub </a></p>

      </div>
      </div>
      </div>
      </div>
    </Container>
  );
}

export default Team;
