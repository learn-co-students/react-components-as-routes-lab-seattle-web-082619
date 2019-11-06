import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const displayDirectors = () => {
    return directors.map((director, idx) => (
      <div key={idx}>
        <h3>{director.name}</h3>
        <p>{director.movies.join(', ')}</p>
      </div>
    ))
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors()}
    </div>
  );
}

export default Directors
