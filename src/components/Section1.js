import React from "react";
import "../styles/Section1.css";




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
  
  </div>   
    
  );
}

export default Section1;
