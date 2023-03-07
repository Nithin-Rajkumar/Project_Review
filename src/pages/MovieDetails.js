import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./NavBar.css";
function MovieDetails() {
 
    const [movies, setMovies] = useState([]);
 
    useEffect(() => {
        axios.get('http://localhost:8080/getvalues')
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
 
    return (
        <div>
            <h1>Movies</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Stars</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie => (
                        <tr key={movie.id}>
                            <td>{movie.id}</td>
                            <td>{movie.movie_name}</td>
                            <td>{movie.stars}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
 
}
 
export default MovieDetails;
