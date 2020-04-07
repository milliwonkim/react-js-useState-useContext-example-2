import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <h3>Movie List</h3>
      <p>Number Of Movies: {movies.length}</p>
    </div>
  )
}

export default Nav;