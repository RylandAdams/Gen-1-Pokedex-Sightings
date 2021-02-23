import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <>
      <h1>Pokedex</h1>
      <Link to='/'>Home</Link>
      <Link to='/sightings'>Sightings</Link>
    </>
  );
}

export default NavBar;