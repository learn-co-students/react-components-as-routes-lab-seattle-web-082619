import React from 'react';
import { NavLink } from 'react-router-dom';


      // {/*{/, /movies, /directors, /actors}*/}

const NavBar = () => {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add prop for activeStyle */
        activeStyle={{
          background: 'orange'
        }}
      >Home</NavLink>
      <br/>
      <NavLink
        to="/movies"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add prop for activeStyle */
        activeStyle={{
          background: 'red'
        }}
      >Movies</NavLink>
      <br/>
      <NavLink
        to="/directors"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add prop for activeStyle */
        activeStyle={{
          background: 'Pink'
        }}
      >Directors</NavLink>
      <br/>

      <NavLink
        to="/actors"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add prop for activeStyle */
        activeStyle={{
          background: 'green'
        }}
      >Actors</NavLink>
      <br/>
      

    </div>
  );
};

export default NavBar;
