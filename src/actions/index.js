import { GET_POKEMONS } from './type';
import { CATCH_ERROR } from './type';
export const getpokemon = (dispatch) => {
       const res = axios.get('https://pokeapi.co/api/v2/')
       .then(response=>{
           dispatch({
               type: GET_POKEMONS,
               payload: response.data
           })
       }).catch(error=>{
           dispatch({
            type: CATCH_ERROR,
            payload: error.message
           })
       })
 
};
