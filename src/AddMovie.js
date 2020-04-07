import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = e => {
    setName(e.target.value);
  };

  const updatePrice = e => {
    setPrice(e.target.value);
  };

  const AddMovie = e => {
    e.preventDefault();
    setMovies(prevMovies => [
      ...prevMovies,
      { name: name, price: price, id: Date.now() }
    ]);
  };

  return (
    <form onSubmit={AddMovie}>
      <input type="text" name="name" value={name} onChange={updateName} />
      <input type="text" name="price" value={price} onChange={updatePrice} />
      <button>Add Movie</button>
    </form>
  );
};

export default AddMovie;
