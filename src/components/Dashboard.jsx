import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import Header from "./Header"; 
import { FavoritesContext } from "../contexts/FavoritesContext";
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import Loading from "./loading";


const API_URL = "https://www.omdbapi.com/?apikey=66f12840";

const Dashboard = () => {
  const [movies, setMovies] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 

  const { favorites, addToFavorites, removeFromFavorites } = useContext(FavoritesContext); 
  
  // Function to search movies based on title and type 
  const searchMovies = async (title, type = "movie") => {
    setLoading(true); 
    setError(null); 
    if(title == ''){
      setError("Please Enter the Movie Title");
      setLoading(false); 
      return false;
    }
    try {
      const response = await fetch(`${API_URL}&s=${encodeURIComponent(title)}&type=${type}&y=2024`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search); 
        console.log(data.Search, "Movies fetched!");
      } else {
        setMovies([]); 
        setError(data.Error || "No results found.");
        console.log("No results found.");
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError("An error occurred while fetching data.");
      setMovies([]);
    } finally {
      setLoading(false); 
    }
  };
   
  // Fetch default movies 
  useEffect(() => {
    searchMovies("Batman", "movie"); 
  }, []);

  // for add the loader in this file 
  if (loading) {
    return <Loading />; 
  }

  // Check if a movie is already in favorites
  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.imdbID === movieId);
  };

  // Handle add/remove favorite with toaster notifications
  const handleFavoriteClick = (movie) => {
    if (isFavorite(movie.imdbID)) {
      removeFromFavorites(movie.imdbID);
      toast.error("Removed from Favorites!");
    } else {
      addToFavorites(movie);
      toast.success("Added to Favorites!");
    }
  };

  return (
    <>
      <Header onSearch={searchMovies} />
      <ToastContainer position="top-right" autoClose={3000} /> {/* Toast container */}
      
      <nav id="navigation">
        <div className="container">
          <div id="responsive-nav">
            <ul className="main-nav nav navbar-nav">
              <li className="active"><Link to="#">Home</Link></li>
              <li><Link to="/favourite">Favourite</Link></li>
              <li><Link to="#">Help</Link></li>
            </ul>
          </div>
        </div>
      </nav>
       
      <div className="section">
        <div className="container">
          <div className="row">
            {loading && (
              <div className="col-md-12">
                <img src={"../assests/img/load.gif"} alt="Loading..." style={{ width: "50px", height: "50px" }} />
              </div> 
            )}
            {error && !loading && <div className="col-md-12"><h2>{error}</h2></div>}

            {!loading && !error && movies.length > 0 && (
              movies.map((movie) => ( 
                <div className="col-md-4 col-xs-6" key={movie.imdbID}>
                  <div className="shop">
                    <div className="shop-img">
                      <img
                        src={movie.Poster !== "N/A" ? movie.Poster : "./assests/img/badnews.jpg"}
                        alt={movie.Title}
                        style={{ width: "355px", height: "400px", objectFit: "cover" }}
                      />
                    </div>
                    <br />
                    <h4 className="card__title">
                      <Link to={`/movie/${movie.imdbID}`}>{movie.Title} ({movie.Year})</Link>
                    </h4>
                    <span className="card__category">
                      <button
                        type="button"
                        className={`btn btn-sm ${isFavorite(movie.imdbID) ? 'btn-danger' : 'btn-success'}`}
                        style={{
                          padding: "0px 10px",
                          color: "#fff",
                          borderRadius: "3px",
                          height: "30px",
                        }}
                        onClick={() => handleFavoriteClick(movie)}
                      >
                        {isFavorite(movie.imdbID) ? 'Remove from Favourite' : 'Add to Favourite'}
                      </button>
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      
      {/* Footer  */} 
      <footer id="footer">
			<div className="section">
				<div className="container">
					<div className="row">
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

						<div className="col-md-3 col-xs-6">
							<div className="footer">
								<h3 className="footer-title">Download Our App</h3>
									<ul class="footer__app">
							<li><Link to="#"><img src="./assests/img/store.svg" alt=""/></Link></li> <br></br>
							<li><Link to ="#"><img src="./assests/img/google-play-badge.png" alt="" className="custom-logo"/></Link></li>
						</ul>
				                 	</div>
								
							</div>
						</div>
					</div>
				</div>
			

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
								Copyright &copy;
                                <script>
                                    document.write(new Date().getFullYear());</script>
                                     All rights reserved | This template is made with 
                                     <i className="fa fa-heart-o" aria-hidden="true"></i>
                                      by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
							</span>
						</div>
					</div>
				</div>
			</div>
		</footer>

      
    </>
  );
};

export default Dashboard;
