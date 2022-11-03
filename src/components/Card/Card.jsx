import React from "react";
import "./Card.scss";

const Card = ({ name, id, image }) => {
  return (
    <div className="card_container">
      <img src={image} alt="places" />
      <div className="contentWrapper">
        <h1>id : {id}</h1>
        <h1>name : {name}</h1>
      </div>
    </div>
  );
};

export default Card;
