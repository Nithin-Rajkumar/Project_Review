import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="welcome-page">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

    <button className="btn">GET</button>
      <button className="btn">POST</button>
      <button className="btn">UPDATE</button>
      <button className="btn">DELETE</button>
      
      <h1>Welcome to Movie Reviews!</h1>
      <p>Discover new movies and share your thoughts with other movie lovers.</p>
      <Link to="/movies" className="btn btn-primary">Explore Movies</Link>
    </div>
  );
};

export default Home;
