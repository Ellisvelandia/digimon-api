import React from "react";
import Digimon from "./Digimon";
import './App.css';

function App() {

  const listDigimon = [
    {
      name: "Agumon",
      img: "https://digimon.shadowsmith.com/img/agumon.jpg",
      level: "Rookie"
    },
    {
      name: "Gabumon",
      img: "https://digimon.shadowsmith.com/img/gabumon.jpg",
      level: "Rookie"
    },
    {
      name: "Biyomon",
      img: "",
      level: "Rookie"
    },
    {
      name: "Tentomon",
      img: "https://digimon.shadowsmith.com/img/t...",
      level: "Rookie"
    },
    {
      name: "Palmon",
      img: "https://digimon.shadowsmith.com/img/p...",
      level: "Rookie"
    },
    {
      name: "Gomamon",
      img: "https://digimon.shadowsmith.com/img/g...",
      level: "Rookie"
    },
    {
      name: "Patamon",
      img: "https://digimon.shadowsmith.com/img/p...",
      level: "Rookie"
    }
]
  return (
    <div className="App">
      {
        listDigimon.map((e) => 
         <Digimon
         name={e.name}
         level={e.level}
         img={e.img}
         />
        )
      }
    </div>
  );
}

export default App;
