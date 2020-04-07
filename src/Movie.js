import React from 'react';

const Movie = props => {
  return (
    <div key={props.id}>
      <h3>{ props.name }</h3>
      <p>{ props.price }</p>
    </div>
  );
};

export default Movie;