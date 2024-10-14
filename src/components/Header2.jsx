import React from "react";
import { Link } from "react-router-dom";


const Header2 = () =>{
    return(
        <>
           <header>
			<div id="top-header">
				<div className="container">
					<ul className="header-links pull-left">
						<li><Link to ="#"><i className="fa fa-phone"></i> +021-95-51-84</Link ></li>
						<li><Link to ="#"><i className="fa fa-envelope-o"></i> email@email.com</Link ></li>
						<li><Link to ="#"><i className="fa fa-map-marker"></i> 1734 Stonecoal Road</Link ></li>
					</ul>
				</div>
			</div>
		
			{/* <!-- MAIN HEADER --> */}
			<div id="header">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="header-logo">
							<Link to= "/" className="logo">
								<img src="/assests/img/logo.png" alt="Logo" />
							</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
        </>
    )
}
export default Header2;