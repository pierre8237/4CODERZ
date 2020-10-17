import React from "react";
import "../styles/Img.css";

function Img(props) {
  console.log(props.image);
  return (
    <img
      className="t-funk shadow"
      src={props.image}
      alt={props.id}
      key={props.id}
    ></img>
  );
}

export default Img;