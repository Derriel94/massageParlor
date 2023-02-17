import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div className="nav" style={{display: "flex", justifyContent: "space-around", width: "100vw", color: "white", backgroundColor: "rgb(255, 0, 180,.7)"}}>
			    <Link to="/" className="nav-link" style={{color: "rgba(0, 255, 240,.5)", textDecoration: "none"}}><h3>Home</h3></Link>
				<Link to="/location" className="nav-link" style={{color: "rgba(0, 255, 240,.5)", textDecoration: "none"}}><h3>location</h3></Link>
				<Link to="/aboutus" className="nav-link" style={{color: "rgba(0, 255, 240,.5)", textDecoration: "none"}}><h3>about us</h3></Link>
				<Link to="/productslist" className="nav-link" style={{color: "rgba(0, 255, 240,.5)", textDecoration: "none"}}><h3>Products</h3></Link>
				<Link to="/appform" className="nav-link" style={{color: "rgba(0, 255, 240,.5)", textDecoration: "none"}}><h3>Appointmentform</h3></Link>
		</div>
	)
}

export default Nav