import { selector } from "recoil"; //recoil: atoms
import { requester } from "../../api/requester";
import atomPokemon from "../atoms"; //api

const selectorPokemonLength = selector({
  key: "selectorPokemonLength",
  get: async ({ get }) => {
    const pokemon = get(atomPokemon);
    const data = requester({
      url: `https://pokeapi.co/api/v2`,
    }).get(`/pokemon/${pokemon}`);
    return data;
  },
});

export default selectorPokemonLength;
