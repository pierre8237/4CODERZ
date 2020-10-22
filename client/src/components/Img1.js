import React from "react";
import "../styles/Img1.css";

function Img(props) {
  console.log(props.image);
  return (
    <img style={{display: "inline-block"}}
      className="wines1"
      src={props.image}
      alt={props.id}
      key={props.id}
    ></img>
  );
}

export default Img;