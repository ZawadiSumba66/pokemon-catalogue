import { GET_POKEMONS } from '../actions/type';
import { CATCH_ERROR } from '../actions/type';

const initialState = {
  pokemons: [],
  loading:true
};

export default function pokemonReducer(state = initialState,action) {
   switch(action.type){
       case GET_POKEMONS:
       return {
        ...state,
        pokemons:action.payload,
        loading:false
       }
       case CATCH_ERROR:
       return{
        loading: false, 
        error: action.payload 
    }
   }
}
