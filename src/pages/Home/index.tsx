import { useRecoilState } from "recoil";
import atomPokemon from "../../store/atoms";

const HomePage = () => {
  const [pokemon, setPokemon] = useRecoilState(atomPokemon);
  return (
    <div>
      <input type="text" onChange={(event) => setPokemon(event.target.value)} />
      {pokemon}
    </div>
  );
};

export default HomePage;
