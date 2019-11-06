import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const displayActors = () => {
    return actors.map((actor, idx) => (
      <div key={idx}>
        <h3>{actor.name}</h3>
        <p>{actor.movies.join(', ')}</p>
      </div>
    ))
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {displayActors()}
    </div>
  );
};

export default Actors;
