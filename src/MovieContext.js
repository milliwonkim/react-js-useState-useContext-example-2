import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: 10,
      id: 6543
    },
    {
      name: "The Matrix",
      price: 15,
      id: 9846
    },
    {
      name: "Jumanji",
      price: 12,
      id: 3575
    }
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  )
}