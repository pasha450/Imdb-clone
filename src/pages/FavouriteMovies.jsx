import React from "react";
import { useParams } from "react-router-dom";
import Favourite from "../components/Favourite";
import Header2 from "../components/Header2";
import MovieDetails from "../components/MovieDetails";

const FavouriteMovies = () => {
  const { imdbID } = useParams(); 

  return (
    <>
      <Header2 />
      <Favourite />
      <MovieDetails imdbID={imdbID} />
  
    </>
  );
}

export default FavouriteMovies;
