import PropTypes from 'prop-types';

const Pokemon = ({ name, url }) => (
  <div>
    <img src={url} alt="loading" />
    <p>{name}</p>
  </div>
);

Pokemon.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default Pokemon;
