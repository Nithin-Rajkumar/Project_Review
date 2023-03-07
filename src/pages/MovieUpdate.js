import React, { useState, useEffect } from "react";
import axios from "axios";

function MovieUpdate() {
  const [movie, setMovie] = useState({
    id: "",
    movie_name: "",
    stars: "",
  });

  const handleChange = (event) => {
    setMovie({ ...movie, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`http://localhost:8080/update`, movie).then((res) => {
      console.log(res.data);
      setMovie({ id: "", movie_name: "", stars: "" });
    });
  };

  return (
    <div>
      <h1>Update Movie</h1>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input type="text" name="id" value={movie.id} onChange={handleChange} />
        </label>
        <label>
          Movie Name:
          <input type="text" name="movie_name" value={movie.movie_name} onChange={handleChange} />
        </label>
        <label>
          Stars:
          <input type="text" name="stars" value={movie.stars} onChange={handleChange} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default MovieUpdate;
