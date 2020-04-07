import React from "react";
import MovieList from './MovieList';
import Nav from './Nav';
import { MovieProvider } from './MovieContext';
import AddMovie from './AddMovie';

import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </div>
  );
}

export default App;