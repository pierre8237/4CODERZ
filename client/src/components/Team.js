import React from "react";
import "../styles/Team.css";
import Mathew from "./Images/mathew (1).png";
import Aimee from "./Images/aimee (1).png";
import Pierre from "./Images/pierre (1).png";
import Container from "./Container";
function Team() {
  return (
    <div class="container">
      <div class="heading-title text-center">
        <p class="p-top-30 half-txt"></p>
        <h3 class="text-uppercase">Our Team Members </h3>
      </div>
      <div class="row">
        <div class="col-md-4 col-sm-4">
          <div class="team-member">
            <div class="team-img">
              <img src={Aimee} alt="team member" class="img-responsive" />
            </div>
            <div class="team-hover">
              <div class="desk">
                <h4>Hi There !</h4>
                <p>I love to introduce myself as a fullstack Developer.</p>
              </div>
              <div class="s-link">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="team-title">
            <span>Developer</span>
            <h5>Aimee Millard</h5>
            <span>an.millard19@gmail.com</span> <br />
            <span>
              <a href="https://github.com/aimeemillard">GitHub </a>
            </span>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="team-member">
            <div class="team-img">
              <img src={Mathew} alt="team member" class="img-responsive" />
            </div>
            <div class="team-hover">
              <div class="desk">
                <h4>Hi There !</h4>
                <p>I love to introduce myself as a fullstack Developer.</p>
              </div>
              <div class="s-link">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="team-title">
            <span>Developer</span>
            <h5>Mathew Poovathany</h5>
            <span>Poovathanymathew@gmail.com</span>
            <br />
            <span>
              <a href="https://github.com/mathewpoovathany">GitHub </a>
            </span>
          </div>
        </div>
        <div class="col-md-4 col-sm-4">
          <div class="team-member">
            <div class="team-img">
              <img src={Pierre} alt="team member" class="img-responsive" />
            </div>
            <div class="team-hover">
              <div class="desk">
                <h4>Hi There !</h4>
                <p>I love to introduce myself as a fullstack Developer.</p>
              </div>
              <div class="s-link">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-google-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="team-title">
            <span>Developer.</span>
            <h5>Pierre Calmels</h5>
            <span>pierre8237@yahoo.com</span> <br />
            <span>
              <a href="https://github.com/pierre8237">GitHub </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Team;
