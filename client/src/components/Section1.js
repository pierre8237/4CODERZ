import React from "react";
import "../styles/Section1.css";
import mathew from "./Images/team4.jpeg"
import Colin from "./Images/Colin.JPG";
import Aimee from "./Images/Aimee.jpg";
import Pierre from "./Images/Pierre.jpg";




function Section1() {
  return (
    <div>
<div id="myContact" class="container">
  <h2>Contact US.</h2>
      <div id="my-contact" class="row">
        <form action="action_page.php">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" />

          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="example@gmail.com"
          />

          <label for="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something.."
            
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
   </div>

   <br />
   <br />
  
  
<div class="row">
<div class="column">
    <div class="card">
      <img src={Aimee} alt="Aimee"  />
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
      <img src={mathew} alt="Mathew"  />
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
      <img src={Colin} alt="Colin"  />
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
    
  );
}

export default Section1;
