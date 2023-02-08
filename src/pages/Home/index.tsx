import { useRecoilState, useRecoilValueLoadable } from "recoil"; //recoil: atoms
import atomPokemon from "../../store/atoms"; //recoil: selectors
import selectorGetPokemon from "../../store/selectors";
import React, { useState } from "react";
import Card from "../../components/Card";

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
      <button
        onClick={() => {
          setPokemon(searchPokemon);
        }}
      >
        Procurar
      </button>
      {getLoadablePokemon?.state === "loading" && <p>Loading...</p>}
      {getLoadablePokemon?.state === "hasValue" &&
        getLoadablePokemon?.contents !== undefined && (
          <Card
            image={
              getLoadablePokemon?.contents?.sprites?.other?.dream_world
                ?.front_default
            }
            name={getLoadablePokemon?.contents?.name}
          />
        )}
      {pokemon}
    </div>
  );
};

export default HomePage;
