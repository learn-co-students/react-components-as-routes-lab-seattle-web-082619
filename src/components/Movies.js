import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const displayMovies = () => {
    return movies.map((movie, idx) => (
      <div key={idx}>
        <h2>{movie.title}</h2>
        <p>{movie.time}</p>
        <p>{movie.genres.join(', ')}</p>
      </div>
    ))
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {displayMovies()}
    </div>
  );
};

export default Movies;
