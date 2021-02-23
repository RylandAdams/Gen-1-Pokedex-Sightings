import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';
import { useFirestore } from 'react-redux-firebase';

function EditSightingForm(props){
  const firestore = useFirestore();
  const { sighting } = props;

  function handleEditSightingFormSubmission(event) {
    event.preventDefault();
    props.onEditSighting();
    const propertiesToUpdate = {
      name: event.target.name.value,
      region: event.target.region.value,
      details: event.target.details.value
    }
    return firestore.update({collection: 'sightings', doc: sighting.id }, propertiesToUpdate)
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler = {handleEditSightingFormSubmission}
        buttonText = 'Update Sighting' />
    </>
  );
}

EditSightingForm.propTypes = {
  onEditSighting: PropTypes.func
};

export default EditSightingForm;