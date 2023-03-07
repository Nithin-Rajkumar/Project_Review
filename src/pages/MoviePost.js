import React, { useState } from 'react';

function MoviePost() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [stars, setStars] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      id: id,
      movie_name: name,
      stars: stars
    };

    fetch('http://localhost:8080/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    
    <form onSubmit={handleSubmit}>
        <text >Please Enter Movie Details</text>
        <br></br><br/>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" name="id" value={id} onChange={event => setId(event.target.value)} />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={event => setName(event.target.value)} />
      </div>
      <div>
        <label htmlFor="stars">Stars:</label>
        <input type="text" id="stars" name="stars" value={stars} onChange={event => setStars(event.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MoviePost;
