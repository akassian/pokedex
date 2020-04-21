import React from "react";
import "./Pokecard.css";

// TODO
// Pass in individual items rather than entire object!!!
// Shallow better than whole object
// Comment on what function does, etc. ROLE OF COMPONENT
function Pokecard({ pokemon }) {
  let baseURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <img src={`${baseURL}${pokemon.id}.png`} alt="" />
      <p>Name: {pokemon.name}</p>
      <p>Type: {pokemon.type}</p>
      <p>EXP: {pokemon.base_experience}</p>
    </div>
  );
}

export default Pokecard;
