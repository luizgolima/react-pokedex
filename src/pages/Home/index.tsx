import { useRecoilState, useRecoilValueLoadable } from "recoil"; //recoil: atoms
import atomPokemon from "../../store/atoms"; //recoil: selectors
import selectorGetPokemon from "../../store/selectors";
import { useState } from "react";

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
      <input type="text" onChange={(event) => setPokemon(event.target.value)} />
      <button
        onClick={() => {
          setPokemon(searchPokemon);
        }}
      >
        Procurar
      </button>
      {pokemon}
    </div>
  );
};

export default HomePage;
