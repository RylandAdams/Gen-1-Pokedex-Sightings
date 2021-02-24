import React from "react";
import PropTypes from "prop-types";

function ReusablePokeForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='number'
          placeholder='Pokemon #' />
        <input
          type='text'
          name='img'
          placeholder='img link' />
        <input
          type='text'
          name='name'
          placeholder='Pokemon name' />
        <textarea
          name='description'
          placeholder='description on pokemon' />
        <input
          type='text'
          name='types'
          placeholder='type/s' />
        <input
          type='text'
          name='weaknesses'
          placeholder='weakness/es' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </>
  );
}

ReusablePokeForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusablePokeForm;