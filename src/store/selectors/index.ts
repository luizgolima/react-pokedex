import { selector } from "recoil"; //recoil: atoms
import { requester } from "../../api/requester";
import atomPokemon from "../atoms"; //api

const selectorGetPokemon = selector({
  key: "selectorGetPokemon",
  get: async ({ get }) => {
    const pokemon = get(atomPokemon);
    if (pokemon) {
      const { data } = await requester({
        url: `https://pokeapi.co/api/v2`,
      }).get(`/pokemon/${pokemon.toLowerCase().trim()}`);
      return data;
    }
  },
});

export default selectorGetPokemon;
