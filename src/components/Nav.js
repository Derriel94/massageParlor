import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
	return (
		<div className="nav" style={{display: "flex", justifyContent: "space-around", width: "100vw", color: "white", backgroundColor: "black"}}>
			    <Link to="/" style={{color: "white", textDecoration: "none"}}><h3>Home</h3></Link>
				<Link to="/location" style={{color: "white", textDecoration: "none"}}><h3>location</h3></Link>
				<Link to="/aboutus" style={{color: "white", textDecoration: "none"}}><h3>about us</h3></Link>
				<Link to="/appform" style={{color: "white", textDecoration: "none"}}><h3>Appointmentform</h3></Link>
		</div>
	)
}

export default Nav