import React from "react";
import "./App.css";

const Digimon = (props) => {
  return (
    <div className="digitCard">
      <div className="name">{props.name}</div>
      <div className="level">Level: {props.level}</div>
      <img className="image" src={props.img} alt="" />
    </div>
  );
};

export default Digimon;
