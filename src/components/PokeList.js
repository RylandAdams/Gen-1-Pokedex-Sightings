import React from 'react';
import PropTypes from 'prop-types';
import Poke from './Poke';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useFirestore } from 'react-redux-firebase';


function PokeList(props){
  const firestore = useFirestore();
  useFirestoreConnect([
    { collection: 'pokemon' }
  ]);

  // firestore = firestore.collection.orderByChild('number');

  const pokemon = useSelector(state => state.firestore.ordered.pokemon);
  

  if (isLoaded(pokemon)) {
    return(
      <>
        <hr />
        {pokemon.map((poke) => {
          return <Poke 
          whenPokeClicked = { props.onPokeSelection }
          number = { poke.number }
          img = { poke.img }
          name = { poke.name }
          description = { poke.description }
          types = { poke.types }
          weaknesses = { poke.weaknesses }
          id = { poke.id }
          key = { poke.id }/>
        })}
      </>
    );
  } else {
    return (
      <>
        <h3>Catching them all...</h3>
      </>
    );
  }
}

PokeList.propTypes = {
  onPokeSelection: PropTypes.func
};

export default PokeList;