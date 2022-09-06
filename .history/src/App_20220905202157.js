import React from "react";
import Digimon from "./Digimon";
import './App.css';

function App() {

  const listDigimon = [
    {
      name: "Agumon",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWj8Br3i_egN7Khzd9AsAwx4z9FvDm0So22A&usqp=CAU",
      level: "Rookie"
    },
    {
      name: "Gabumon",
      img: "https://digimon.shadowsmith.com/img/g...",
      level: "Rookie"
    },
    {
      name: "Biyomon",
      img: "https://digimon.shadowsmith.com/img/b...",
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
         image={e.img}
         />
        )
      }
    </div>
  );
}

export default App;
