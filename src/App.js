import React from "react";
import "./App.css";
import Pokedex from "./Pokedex";
import pokemonList from "./pokemonList";

function App() {
  return <Pokedex pokemons={pokemonList} />;
}

export default App;
