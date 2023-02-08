import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
	return (
		<div className="Home">
			<div style={{marginTop: "100px"}}><h1>Macy's Massage Parlor</h1></div>

			<div className="banner">
				<Link to="/appform" style={{color: "black", textDecoration: "none"}}><div className="bannerbtn ">Set Up Appointment</div></Link>
			</div>
		</div>
	)
}

export default Home;