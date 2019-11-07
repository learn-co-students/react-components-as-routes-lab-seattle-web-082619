import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { createActors() }
    </div>
  );
};

const createActors = () => {
  return actors.map((actor, index) => {
    return (
      <div key={ index }>
        <h3>Name: { actor.name }</h3>
        <p>Movies:</p>
        <ul>
          { createMovies(actor.movies) }
        </ul>
      </div>
    )
  })
}

const createMovies = movies => {
  return movies.map((title, index) => <li key={ index }>{ title }</li>)
}

export default Actors;
