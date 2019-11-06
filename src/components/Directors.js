import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const mappedDirectors = () => {
    return directors.map((d, idx) => {
      return (
        <div key={idx}>
          <h2>{d.name}</h2>
          <h3>Movies</h3>
          <ul>
            {d.movies.map((m, idx) => {
              return <li key={idx}>{m}</li>
            })}
          </ul>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Directors Page</h1>
      {mappedDirectors()}
    </div>
  );
}

export default Directors
