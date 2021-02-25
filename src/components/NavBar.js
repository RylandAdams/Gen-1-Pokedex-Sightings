import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
  return (
    <>
      <div className='containerNav'>
        <div className='headerNav'>
          <h1>Pokedex</h1>
        </div>
        <hr/>
        <div className='linksNav'>
          <Link className='navButton' to='/'>Pokedex</Link>
          <Link className='navButton' to='/sightings'>Sightings</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;