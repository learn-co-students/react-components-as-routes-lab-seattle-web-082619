import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        { createMovies() }
    </div>
  );
};

const createMovies = () => {
  return movies.map((movie, index) => {
    return (
      <div key={index}>
        <h3>Name: {movie.title} </h3>
        <p>Time: {movie.time} </p>
        <ul>
          { createGenres(movie.genres) }
        </ul>
      </div>
    )
  })
}

const createGenres = genres => {
  return genres.map((title, index) => <li key= { index }>{ title }</li>)
}

export default Movies;
