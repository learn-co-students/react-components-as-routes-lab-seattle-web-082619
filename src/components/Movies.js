import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const mappedMovies = () => {
    return movies.map((m, i) => {
      return (
        <div key={i}>
          <h2>{m.title}</h2>
          <h3>Runtime: {m.time} minutes</h3>
          <h3>Genres</h3>
          <ul>{m.genres.map((g, i) => {
            return (
              <li key={i}>{g}</li>
            )
          })}</ul>
        </div>
      )
    })
  }

  return (
    <div>
        <h1>Movies Page</h1>
        {mappedMovies()}
    </div>
  );
};

export default Movies;
