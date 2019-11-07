import React from 'react';
import { directors } from '../data';


const Directors = () => {
  return (
    <div>
      <h1>Director</h1>      
        {directors.map( (director, index) => (
        <div key = {index}>
        <div><h3>Name: {director.name}</h3></div>  
        
        <ul>
          {director.movies.map( (movie,index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
        </div>
        ))}
     </div>   
  )
   



}

export default Directors
