import { LOADING_POKEMONS, GET_POKEMONS, CATCH_ERROR } from '../actions/type';

const initialState = {
  pokemons: [],
  loading: false,
  error:''
};

export default function pokemonReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_POKEMONS:
      return {
        ...state,
        loading:true,
      }
    case GET_POKEMONS:
      return {
        pokemons: [
          ...state.pokemons,
          action.payload,
        ],
        loading: false,
      };
    case CATCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
