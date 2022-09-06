import React from "react";
import "./App.css";

const Digimon = (props) => {
  return (
    <div className="digitCard">
      <div className="name">{props.name}</div>
      <div className="level">{props.level}</div>
   <img className src="" alt="" />
    </div>
  )
};

export default Digimon;
