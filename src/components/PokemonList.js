import { connect } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import getpokemons from '../actions/index';
import Pokemon from './Pokemon';

const PokemonList = ({ pokemonsData, getPokemons, loading }) => {
  useEffect(() => {
    getPokemons();
  }, []);
  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return (
    <div>
      {
            pokemonsData.map((pokemon) => (
              <Pokemon
                name={pokemon.name}
                url={pokemon.image}
                key={pokemon.id}
              />
            ))
          }
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemonsData: state.pokemonReducer.pokemons,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getPokemons: () => dispatch(getpokemons()),
});

PokemonList.propTypes = {
  pokemonsData: PropTypes.instanceOf(Array).isRequired,
  getPokemons: PropTypes.func.isRequired,
  loading: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
