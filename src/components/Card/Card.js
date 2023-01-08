import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="cardBody">
        <img src={props.img} alt="cardImg" />
        <div className="about">
          <h2 className="cardTitle">{props.title}</h2>
          <p className="cardDescription">{props.description}</p>
        </div>
        <button>See the details</button>
      </div>
    </div>
  );
}

export default Card;
