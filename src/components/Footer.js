import React from 'react';
import Nav from "./Nav.js";

function Footer() {
	return (
		<div className="footer" style={{marginTop: "100px"}}>
			<Nav />
			<div className="socialDiv">
				<a href="https://www.facebook.com/profile.php?id=100080613782116" target="_blank" rel="noreferrer" className="navLink">
		          <img src="./fb.png" alt="facebook" />
		        </a>
		        <a href="https://www.linkedin.com/in/techmospage/" target="_blank" rel="noreferrer" className="navLink">
		          <img src="./ln.png" alt="linkden" />
		        </a>
		        <a href="https://github.com/Derriel94" target="_blank" rel="noreferrer" className="navLink">
		          <img src="./gh.png" alt="github" />
		        </a>
			</div>
			<div className="derrielcollins">
				<p>
					Copyright 2023©
					This website was Created by:
				</p>
				<a href="https://derrielcollins.site" target="_blank"  rel="noopener noreferrer">
					Derriel Collins
				</a>
			</div>
			
		</div>
	)
}

export default Footer;