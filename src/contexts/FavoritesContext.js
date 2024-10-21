import React, { createContext, useState, useEffect } from 'react';


export const FavoritesContext = createContext();

// Provider Component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = localStorage.getItem('react-movie-app-favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites)); // Parse stored JSON string to array
    } 
  }, []);
   
  // Save favorites to localStorage whenever favorites state changes
  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem('react-movie-app-favorites', JSON.stringify(favorites));
    }
  }, [favorites]);

  // Function to add a movie to favorites
  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  // Function to remove a movie from favorites
  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter((movie) => movie.imdbID !== movieId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
