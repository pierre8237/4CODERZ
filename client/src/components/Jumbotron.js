import React from "react";
import "../styles/Jumbotron.css";

function Jumbotron(props) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="jumbodisplay">
        <h1 className="display-4">
          Dionysus <i class="fas fa-wine-bottle"></i>
        </h1>
      </div>
    </div>
  );
}

export default Jumbotron;
