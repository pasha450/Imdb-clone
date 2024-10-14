// for fetched the movie details

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = "https://www.omdbapi.com/"
const API_KEY = "66f12840";


const MovieDetails = () => {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null); 
  
//   fetched data 
  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}`);
        const data = await response.json();

        if (data.Response === "True") {
          setMovie(data);
        } else {
          console.error("Movie not found");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } 
    };
    fetchMovieDetails(); 
  }, [id]);

  if (!movie) {
    return <div>No movie details available.</div>; 
  }

  return (
    <div>
      {/* <h1>{movie.Title} ({movie.Year})</h1> */}
      {/* <img src={movie.Poster} alt={`${movie.Title} poster`} /> */}
      <h1>{movie.Title || "Title not available"} ({movie.Year || "Year not available"})</h1>
      <img 
        src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"} 
        alt={`${movie.Title} poster`} 
      />
      <p><strong>Director:</strong> {movie.Director}</p>
      {/* <p><strong>Director:</strong> {movie.Director || "N/A"}</p> */}
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <p><strong>Rating:</strong> {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
