import React from "react";
import { Link } from "react-router-dom";
import "../styles/Cover.css";

function Cover() {
  return (
    <div
      style={{ fontFamily: "'URW Chancery L', cursive" }}
      className="coverpage text-left"
    >
      <div className="text">
        <h1>Dionysus</h1>
        <br />
        <h5>MUST BE OF LEGAL DRINKING AGE TO ENTER THIS SITE</h5>

        <h6>
          <Link to="/HOME" className="coverBtn">
            Enter
          </Link>
        </h6>
      </div>
    </div>
  );
}

export default Cover;
