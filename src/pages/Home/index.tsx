import { useRecoilState, useRecoilValueLoadable } from "recoil";
import atomPokemon from "../../store/atoms";
import selectorGetPokemon from "../../store/selectors";

const HomePage = () => {
  const [pokemon, setPokemon] = useRecoilState(atomPokemon);
  const getLoadablePokemon = useRecoilValueLoadable(selectorGetPokemon);
  return (
    <div>
      <input type="text" onChange={(event) => setPokemon(event.target.value)} />
      {pokemon}
    </div>
  );
};

export default HomePage;
