import React, { useState } from 'react';
import axios from 'axios';

const MovieDel = () => {
  const [id, setId] = useState('');
   

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/delete?id=${id}`)
      .then(response => {
        alert('Movie deleted successfully!');
        setId('');
         
      })
      .catch(error => {
        alert('Failed to delete movie.');
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Delete Movie</h1>
      <form>
        <div>
          <label htmlFor="id">ID:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={event => setId(event.target.value)}
          />
        </div>
         
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
    </div>
  );
};

export default MovieDel;
