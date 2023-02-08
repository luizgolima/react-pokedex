import { useRecoilState, useRecoilValueLoadable } from "recoil"; //recoil: atoms
import { atomPokemon } from "../../store/atoms"; //recoil: selectors
import { selectorGetPokemon } from "../../store/selectors";
import React, { useState } from "react";

const HomePage = () => {
  //recoil: local states
  const [searchPokemon, setSearchPokemon] = useState("");
  //recoil: states
  const [pokemon, setPokemon] = useRecoilState(atomPokemon);
  //recoil: loadable
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);

  console.log(getLoadablePokemon);
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setSearchPokemon(event.target.value)}
      />
      <button>Procurar</button>
    </div>
  );
};

export default HomePage;
