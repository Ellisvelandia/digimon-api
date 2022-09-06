import React from "react";
import "./App.css";

const Digimon = (props) => {
  return (
    <div className="digitCard">
      <div className="name">{props.name}</div>
      <div className="level">{props.level}</div>
      <div className="image"></div>
    </div>
  )
};

export default Digimon;
