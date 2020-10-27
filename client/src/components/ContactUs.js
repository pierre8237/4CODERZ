import React from "react";
import "../styles/ContactUs.css";
import Row from "./Row";
import Col from "./Col";
import Img from "./Img";
import Container from "./Container";

import Wrapper from "./Wrapper";

function ContactUs() {
  return (
    <Container>
      <div>
        <div id="myContact" class="container">
          {/* <h2>Contact Us</h2> */}
          <div id="my-contact" class="row">
            <form id="form" action="action_page.php">
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
    </Container>
  );
}

export default ContactUs;
