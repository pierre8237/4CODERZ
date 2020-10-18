import React from "react";
import "../styles/Team.css";
import Mathew from "./Images/mathew (1).png"
import Colin from "./Images/colin (1).png";
import Aimee from "./Images/aimee (1).png";
import Pierre from "./Images/pierre (1).png";



function Team() {
    return (
<div>

 
<div class="row">
<div class="column">
    <div class="card">
      <img src={Aimee} alt="Aimee" height="360px"  />
      <div class="container">
        <h2>Aimee Millard</h2>
        <p class="title">Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>an.millard19@gmail.com</p>
        <p><a href="https://github.com/aimeemillard">GitHub </a></p>
        
      </div>
    </div>
  </div>


  <div class="column">
    <div class="card">
      <img src={Mathew} alt="Mathew"  />
      <div class="container">
        <h2>Mathew Poovathany</h2>
        <p class="title">Developer</p>
        <p>Worked on UI. Which includes HTML and CSS coding in react app.</p>
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
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>pierre8237@yahoo.com</p>
        <p><a href="https://github.com/pierre8237">GitHub </a></p>
        
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
      <img src={Colin} alt="Colin" height="360px"  />
      <div class="container">
        <h2>Colin</h2>
        <p class="title">Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>colinschlank@yahoo.com</p>
        <p><a href="https://github.com/colinschlank">GitHub </a></p>
      </div>
    </div>
  </div>
</div>
</div>
   
  )
}

export default Team;