import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Favourite = () => {
  const { favorites, removeFromFavorites } = useContext(FavoritesContext);

//   alert for remove the movies 
  const handleRemove = (movieId) => {
  const confirmRemoval = window.confirm("Are you sure you want to remove this movie from favourites?");
    if (confirmRemoval) {
      removeFromFavorites(movieId);
    }
  };

  return (
    <>   
      <section className="section section--first section--bg" data-bg="img/section/section.jpg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section__wrap">
                <h2 className="section__title">Favourite
				        <img src="./assests/img/fav.gif" 
                 
                  style={{ width: '10%',}} 
                />
						    </h2> 
				          <ul className="breadcrumb">
                  <li className="breadcrumb__item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb__item breadcrumb__item--active" style={{ color: 'rgb(188 16 16)', fontWeight: 'bold', fontSize: '2em' }}>Favourite</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Favourite Movies Section */}
      <div className="catalog">
        <div className="container">
          <div className="row">
            {favorites.length === 0 ? (
              <div className="col-md-12 text-center">
                <h3>You have no favourite movies yet.</h3>
              </div> 
            ) : (
              favorites.map((movie) => (
                <div className="col-md-4 col-xs-6 mb-4" key={movie.imdbID}>
                  <div className="shop">
                    <div className="shop-img">
                      <img
                        src={movie.Poster !== "N/A" ? movie.Poster : "./assests/img/badnews.jpg"}
                        alt={movie.Title}
                        style={{ width: "355px", height: "400px", objectFit: "cover" }} // Set a fixed size

                        className="img-fluid"
                      />	
                    </div>
                    <br />
                    <h4 className="card__title">
						<br></br>
                      <Link to={`/movie/${movie.imdbID}`}>{movie.Title} ({movie.Year})</Link>
                    </h4>
                    <span className="card__category d-flex justify-content-between align-items-center">
                      <Link to={`/movie/${movie.imdbID}`} className="text-decoration-none">Movie</Link>
                      <button
                        type="button"
                        className="btn btn-sm btn-danger"
                        style={{
                          padding: "0px 10px",
                          color: "#fff",
                          borderRadius: "3px",
                          height: "30px",
						              marginLeft: "10px"
                        }}
					            	onClick={() => handleRemove(movie.imdbID)} 
                        >
                        Remove
                      </button>
                    </span>
                    <span className="card__rate">
                      <i className="fa-solid fa-star"></i> {movie.imdbRating ? movie.imdbRating : 'N/A'}
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Footer Section */}
     
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

export default Favourite;
