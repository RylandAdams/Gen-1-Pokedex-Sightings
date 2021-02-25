import React from 'react';
import PropTypes from "prop-types";
import ReusablePokeForm from "./ReusablePokeForm";
import { useFirestore } from 'react-redux-firebase';


function AddPoke(props){

  const firestore = useFirestore();

  function addPoketoFirestore(event) {
    event.preventDefault();
    props.onNewPokeCreation();

    let typesString = (event.target.types.value);
    
    let typesArray = (typesString) => {
      return typesArray = typesString.split(' ');
    }

    const typeResult = typesArray(typesString);

    let weaknessesString = (event.target.weaknesses.value); 
    
    let weaknessesArray = (weaknessesString) => {
      return weaknessesArray = weaknessesString.split(' ');
    }
    const weaknessResult = weaknessesArray(weaknessesString);

    return firestore.collection('pokemon').add({
      number: event.target.number.value,
      img: event.target.img.value,
      name: event.target.name.value,
      description: event.target.description.value,
      types: typeResult,
      weaknesses: weaknessResult
    });
  }

  return (
    <>
      <ReusablePokeForm
        formSubmissionHandler = {addPoketoFirestore}
        buttonText = 'Add Poke' />
    </>
  );
}

AddPoke.propTypes = {
  onNewPokeCreation: PropTypes.func
};

export default AddPoke;