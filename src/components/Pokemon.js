import React from 'react';
import PokeDetail from './PokeDetail';

function Pokemon(props){
  return (
    <>
    </>
  );
}

Pokemon.propTypes = {
  number: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  types: PropTypes.array,
  weaknesses: PropTypes.array,
  id: PropTypes.string
};


export default Pokemon;