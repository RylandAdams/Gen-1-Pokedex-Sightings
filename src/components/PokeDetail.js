import React from 'react';
import PropTypes from 'prop-types';
import Poke from './Poke';

function PokeDetail(props){
  const { poke } = props;

  if (poke == null || poke == undefined) {
    return (
      <>
        <div className='card'>
          <div className='card-header'><strong>#???: UnKnown</strong></div>
          <div className='card-header'>
            <a href='' alt='Photo of unknown'></a>
          </div>
            <div className='card-body'>
              <p>Description: ??????????</p>
              <br/>
              <p>Type: ????????????</p>
              <br/>
              <p>Weaknesses: ???????????</p>
            </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='card'>
          <div className='card-header'><strong>{poke.number}:{poke.name}</strong></div>
          <div className='card-header'>
            <a href='{poke.img}' alt='Photo of {poke.name}'></a>
          </div>
            <div className='card-body'>
              <p>Description: {poke.description}</p>
              <br/>
              <p>Type: {poke.types}</p>
              <br/>
              <p>Weaknesses: {poke.weaknesses}</p>
            </div>
        </div>
      </>
    );
  }
  
  // return (
  //   <>
  //     <div className='card'>
  //       <div className='card-header'><strong>{poke.number}:{poke.name}</strong></div>
  //       <div className='card-header'>
  //         <a href='{poke.img}' alt='Photo of {poke.name}'></a>
  //       </div>
  //         <div className='card-body'>
  //           <p>Description: {poke.description}</p>
  //           <br/>
  //           <p>Type: {poke.types}</p>
  //           <br/>
  //           <p>Weaknesses: {poke.weaknesses}</p>
  //         </div>
  //     </div>
  //   </>
  // );
}

PokeDetail.propTypes = {
  poke: PropTypes.object
};

export default PokeDetail;