import React from 'react';
import PropTypes from "prop-types";
import Sighting from "./Sighting";
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';

function SightingList(props){
  useFirestoreConnect([
    { collection: 'sightings' }
  ]);

  const sightings = useSelector(state => state.firestore.ordered.sightings);

  if (isLoaded(sightings)) {
    return (
      <>
        {sightings.map((sighting) => {
          return <Sighting
          whenSightingClicked = { props.onSightingSelection }
          name = { sighting.name }
          region = { sighting.region }
          details = { sighting.details }
          id = { sighting.id }
          key = { sighting.id }/>
        })}
      </>
    );
  } else {
    return (
      <>
        <h3>Loading...</h3>
      </>
    );
  }
}

SightingList.propTypes = {
  onSightingSelection: PropTypes.func
};

export default SightingList;