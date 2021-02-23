import React from 'react';
import PropTypes from 'prop-types';

function Sighting(props){
  return (
    <>
      <div onClick = {() => props.whenSightingClicked(props.id)}>
        <h3>{props.name} {props.region}</h3>
        <p>{props.details}</p>
      </div>
      <hr />
    </>
  );
}

Sighting.propTypes = {
  name: PropTypes.string,
  region: PropTypes.string,
  details: PropTypes.string,
  id: PropTypes.string,
  whenSightingClicked: PropTypes.func
};

export default Sighting;