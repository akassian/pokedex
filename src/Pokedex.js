import React from "react";
import Pokecard from "./Pokecard";

function Pokedex({ pokemons }) {
  return (
    <ul>
      {pokemons.map((p) => (
        <Pokecard pokemon={p} />
      ))}
    </ul>
  );
}

export default Pokedex;
