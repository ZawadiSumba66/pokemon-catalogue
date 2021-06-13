import axios from 'axios';
import { LOADING_POKEMONS, GET_POKEMONS, CATCH_ERROR } from './type';

const getpokemons = () => async (dispatch) => {
  dispatch({
    type: LOADING_POKEMONS,
  });
  const perpage = 15
  await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${perpage}`)
    .then((response) => {
      dispatch({
        type: GET_POKEMONS,
        payload: response.data,
      });
    }).catch((error) => {
      dispatch({
        type: CATCH_ERROR,
        payload: error.message,
      });
    });
};

export default getpokemons;
