import React from 'react';
import PropTypes from 'prop-types';

function Poke(props){
  return (
    <>
      <div id='listItem' className='card'>
        <div onClick = {() => props.whenPokeClicked(props.id)}>
          <h3>{props.number}: {props.name}</h3>
        </div>
      </div>
      <hr />
    </>
  );
}

Poke.propTypes = {
  number: PropTypes.string,
  img: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  types: PropTypes.array,
  weaknesses: PropTypes.array,
  id: PropTypes.string,
  whenPokeClicked: PropTypes.func
};


export default Poke;