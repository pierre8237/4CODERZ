import React from "react";
import "../styles/Team.css";
import Mathew from "./Images/mathew.jpeg"
import Colin from "./Images/colin.jpeg";
import Aimee from "./Images/aimee.jpg";
import Pierre from "./Images/pierre.jpg";



function Team() {
    return (
<div>

<div className="Row">
  <div class="column">
    <div class="card">
      <img src={Aimee} alt="Aimee"  />
      <div class="container">
        <h2>Aimee Millard</h2>
        <p class="title">Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
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
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>example@example.com</p>
        <p><a href="https://github.com/">GitHub </a></p>
      </div>
    </div>
  </div>
</div>
</div>
   
  )
}

export default Team;