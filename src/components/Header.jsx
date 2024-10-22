// src/components/Header.js

import React, { useState } from "react";
import { Link } from "react-router-dom";
import MovieModal from "./MovieModal";



const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [movieData, setMovieData] = useState({
    title: 'movie',
    description: 'A mind-bending thriller by Christopher Nolan.',
    posterUrl: './assests/img/badnews.jpg'
  });

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);


  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedTerm = searchTerm.trim();
    if (trimmedTerm) {
      onSearch(trimmedTerm);
    }
  };
   
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    // Call the onSearch prop with the current input value
    onSearch(value);
};

  return (
    <header>
      {/* Top Header */}
      <div id="top-header">
        <div className="container">
          <ul className="header-links pull-left">
            <li>
              <Link to="#">
                <i className="fa fa-phone"></i> +021-95-51-84
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-envelope-o"></i> email@email.com
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="fa fa-map-marker"></i> 1734 Stonecoal Road
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Header */}
      <div id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="header-logo">
              <Link to=" " className="logo">
                <img src="/assests/img/logo.png" alt="Logo" />
              </Link>
              </div>
            </div>
            {/* Search Bar */}
            <div className="col-md-6">
              <div className="header-search">
                <form onSubmit={handleSubmit}>
              <select class="search-type-dropdown">
                <option value ="All">All</option>
                <option value="movie">Movie</option>
                <option value="series">Series</option>
                <option value="episode">Episode</option>
              </select>
                  <input
                    className="input"
                    type="text"
                    placeholder="Search for a movie, TV Series"
                    value={searchTerm}
                    onChange={handleInputChange}
                  />
                  <i class="fa-solid fa-magnifying-glass-location custom-icon  icon-spacing" ></i>
                </form>
                {/* <div class="card">
                  <h5 class="card-header">Featured</h5>
                  <div class="card-body">
                    <h5 class="card-title">Movie</h5>
                    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MovieModal show={showModal} handleClose={closeModal} movieData={movieData} />
    </header>
  );
};

export default Header;
