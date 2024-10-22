import React from 'react';


const MovieModal = ({ show, handleClose, movieData }) => {
  return (
    show && (
      <div className="custom-modal">
        <div className="custom-modal-content">
          <span className="close" onClick={handleClose}></span>
          <h2>Movie Details</h2>
          {movieData ? (
            <>
              <h4>{movieData.title}</h4>
              <p>{movieData.description}</p>
              <img src={movieData.posterUrl} alt={movieData.title} />
            </>
          ) : (
            <p>No movie details available.</p>
          )}
          <button className="custom-button" onClick={handleClose}>Close</button>
        </div>
      </div>
    )
  );
};

export default MovieModal;
