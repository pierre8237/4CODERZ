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
          <ul className="technologies">
            {props.technologies.map(projects => (
              <li key={projects.id}>{projects}</li>
            ))}
          </ul>
        </p>
        <a
          href={props.project_repo}
          className="btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Project Repo
        </a>
        <br></br>
        <a
          href={props.deployed_project}
          className="deploy btn"
          rel="noopener noreferrer"
          target="_blank"
        >
          Deployed Project
        </a>
      </div>
    </div>
  );
}

export default Card;