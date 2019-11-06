import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)

  return (
    <div>
      <h1>Actors Page</h1>
      {
        actors.map((a, idx) => {
          return (
            <div key={idx}>
              <h2>Name: {a.name}</h2>
              <h3>Movies</h3>
              <ul>
                {a.movies.map((m, idx) => {
                  return <li key={idx}>{m}</li>
                })}
              </ul>
            </div>
          )
        })
      }
    </div>
  );
};

export default Actors;
