import { GET_POKEMONS } from './type';

export const getpokemon = (value) => ({
  type: GET_POKEMONS,
  value,
});
