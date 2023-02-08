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
          <div>
            <img
              src={getLoadablePokemon?.contents?.sprites?.front_default}
              width="150px"
              alt={`pokemon-${getLoadablePokemon?.contents?.name}`}
            />
            <h3>{getLoadablePokemon?.contents?.name}</h3>
          </div>
        )}
      {pokemon}
    </div>
  );
};

export default HomePage;
