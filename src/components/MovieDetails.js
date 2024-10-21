import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Loading from './loading'; 


const API_URL = "https://www.omdbapi.com/";
const API_KEY = "66f12840";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setLoading(true); // Start loading
      try {
        console.log("IDDDDD", id);
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&i=${id}&plot=full`);
        const data = await response.json();
       
        // debugging
        console.log("API Dataaaa:", data);

        if (data.Response === "True") {
          setMovie(data);
        } else {
          console.error("Movie not found");
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchMovieDetails();
  }, [id]);

  useEffect(() => {
    const storedRating = localStorage.getItem(`rating-${id}`);
    if (storedRating) {
      setUserRating(parseFloat(storedRating));
    }
  }, [id]);

  if (loading) {
    return <Loading />; 
  }

  if (!movie) {
    return <div>No movie details available.</div>;
  }

  return (
    <div>
      {/* Header Section */}
      <header>
        <div id="top-header">
          <div className="container">
            <ul className="header-links pull-left">
              <li><Link to="#"><i className="fa fa-phone"></i> +021-95-51-84</Link></li>
              <li><Link to="#"><i className="fa fa-envelope-o"></i> email@email.com</Link></li>
              <li><Link to="#"><i className="fa fa-map-marker"></i> 1734 Stonecoal Road</Link></li>
            </ul>
          </div>
        </div>
      
        {/* Main Header */}
        <div id="header">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="header-logo">
                  <Link to="/" className="logo">
                    <img src="/assests/img/logo.png" alt="Logo" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Movie Details Section */} 
      <div style={{
                    display: 'flex', 
                    justifyContent: 'space-between',
                    padding: '30px' 
                    }}>
        <div className='fade-in' style={{ marginRight: '60px' }}>
          <img 
            src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450"} 
            alt={`${movie.Title} poster`} 
            // for the poster
            style={{ width: '350px', height: '450px', borderRadius: '20px' }} 
          />
        </div>
         
        <div className="fade-in" style={{ flex: 1 }}> {/* This div will take the remaining space */}
          <h1>{movie.Title || "Title not available"} ({movie.Year || "Year not available"})</h1>
          <p><strong>Director:</strong> {movie.Director || "N/A"}</p>
          <p><strong>Plot:</strong> {movie.Plot || "N/A"}</p>
          <p><strong>Genre:</strong> {movie.Genre || "N/A"}</p>
          <p><strong>IMDB Rating:</strong> {movie.imdbRating || "N/A"}</p>
          
          {/* User Rating Section */}
          <div id="user-rating" style={{ marginTop: '20px' }}>
            <h2>Your Rating:</h2>
            <div className="rating-group">
              {/* Generate 5 stars */} 
              {[1, 2, 3, 4, 5].map((star, index) => (
                <React.Fragment key={star}> 
                  <label aria-label={`${star} star`} className="rating__label" htmlFor={`user-rating-${star}`}>
                    <i className={index<2 ? 'rating__icon rating__icon--star fa fa-star rated':'rating__icon rating__icon--star fa fa-star not-rated'}></i>
                  </label>
                </React.Fragment>
              ))} 
            </div>
            <p className="desc" style={{ marginBottom: '2rem', fontFamily: 'sans-serif', fontSize: '0.9rem' }}>  
            </p>
          </div>      
        </div>
      </div>

      {/* Footer Section */}
      <footer id="footer">
        <div className="section">
          <div className="container">
            <div className="row">
              {/* About Us */}
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">About Us</h3>
                  <ul className="footer-links">
                    <li><Link to="#"><i className="fa fa-map-marker"></i>1734 Stonecoal Road </Link></li>
                    <li><Link to="#"><i className="fa fa-phone"></i>+021-95-51-84</Link></li>
                    <li><Link to="#"><i className="fa fa-envelope-o"></i>email@email.com</Link></li>
                  </ul>
                </div>
              </div>

              {/* Categories */}
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Categories</h3>
                  <ul className="footer-links">
                    <li><Link to="#">Bollywood movie</Link></li>
                    <li><Link to="#">Hollywood movies</Link></li>
                  </ul>
                </div>
              </div>
              <div className="clearfix visible-xs"></div>

              {/* Legal */}
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Legal</h3>
                  <ul className="footer-links">
                    <li><a href="#">Terms of Use</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Security</a></li>
                  </ul>
                </div>
              </div>

              {/* Download Our App */}
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Download Our App</h3>
                  <ul className="footer__app">
                    <li><Link to="#"><img src="/assests/img/store.svg" alt="store"/></Link></li> 
                    <br />
                    <li><Link to="#"><img src="/assests/img/google-play-badge.png" alt="" className="custom-logo"/></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div id="bottom-footer" className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="footer-payments">
                  <li><Link to="#"><i className="fa fa-cc-visa"></i></Link></li>
                  <li><Link to="#"><i className="fa fa-credit-card"></i></Link></li>
                  <li><Link to="#"><i className="fa fa-cc-paypal"></i></Link></li>
                  <li><Link to="#"><i className="fa fa-cc-mastercard"></i></Link></li>
                  <li><Link to="#"><i className="fa fa-cc-discover"></i></Link></li>
                  <li><Link to="#"><i className="fa fa-cc-amex"></i></Link></li>
                </ul>
                <span className="copyright">
                  &copy; {new Date().getFullYear()} All rights reserved | This template is made with 
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                  by <Link to="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div> 
  );
};

export default MovieDetails;
