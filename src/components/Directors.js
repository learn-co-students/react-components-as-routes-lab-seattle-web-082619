import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { createDirectors() }
    </div>
  )
}

const createDirectors = () => {
  return directors.map((director, index) => {
    return (
      <div key={index}>
        <h3>Name: { director.name }</h3>
        <p>Movies:</p>
        <ul>
          { createMovies(director.movies) }
        </ul>
      </div>
    )
  })
}

const createMovies = movies => {
  return movies.map((title, index) => <li key={ index }>{ title }</li>)
}

export default Directors
