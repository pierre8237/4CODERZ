import React from "react";
import "../styles/Card.css";

function Card(props) {
  console.log(props.image);
  console.log(props);
  return (
    <div key={props.id} className="card">
      <div className="card-body">
        <h4 className="card-title">{props.card_title}</h4>
        <hr></hr>
        <img
          key={props.id}
          alt={props.card_title}
          src={props.image}
          className="card-img-top"
        />
        <p className="card-text">
          {props.card_text}
          <ul className="wines">
            {props.wines.map(wines => (
              <li key={wines.id}>{wines}</li>
            ))}
          </ul>
        </p>
        <a
          href={props.wines}
          className="btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Buy Wine
        </a>
        <br></br>
        <a
          href={props.wines}
          className="deploy btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Visit Winery
        </a>
      </div>
    </div>
  );
}

export default Card;