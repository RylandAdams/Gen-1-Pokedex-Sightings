import React from 'react';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';

function CreateSighting(props){

  const firestore = useFirestore();

  function addSightingtoFirestore(event) {
    event.preventDefault();
    props.onNewSightingCreation();

    return firestore.collection('sightings').add({
      name: event.target.name.value,
      region: event.target.region.value,
      details: event.target.details.value,
      timeAdded: firestore.FieldValue.serverTimestamp()
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler = {addSightingtoFirestore}
        buttonText = 'Add Sighting' />
    </>
  );
}

CreateSighting.propTypes = {
  onNewSightingCreation: PropTypes.func
};

export default CreateSighting;