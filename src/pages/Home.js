import React,{useEffect} from 'react';
import { Link } from "react-router-dom";
import Header from "./Header.js";


function Home({display, setDisplay}) {
	
	return (
		<div className="Home">
		     <Header />
			<div className="Home1">
				<div style={{marginTop: "100px"}}>
					<div><h1>Macy's Massage Parlor</h1></div>
					<div><h2>Our Mission</h2></div>
					<div>Our mission is not only to heal your skin, from the inside out,
						but to inform and refocus skin care into what it really is. Skin
						CARE! It's all about careing for your skin. </div>
					<div><h2>Some Important title</h2></div>
					<div>Here at MMP we pride ourselves on being the most wholistic only natural
					    skin care and massage parlor in the tri state area. We CARE about skin,
					    we also CARE about knowledg and passing it forward. Click Here to learn more.</div>
				</div>
				<div className="banner">
					<Link to="/appform" style={{color: "black", textDecoration: "none"}}><div className="bannerbtn ">Set Up Appointment</div></Link>
				</div>
			</div>
			<div className="Home2"  style={{marginTop: "100px"}}>
				<div className="location">
					<div><h1>Come see us at Our New Location!</h1></div>
					<iframe 
					id="location"
					title="location"
					src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1674.720829613227!2d-96.7492895022167!3d32.912927519250445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d32.913010799999995!2d-96.74606279999999!5e0!3m2!1sen!2sus!4v1675865961718!5m2!1sen!2sus" 
					width="600" 
					height="450" 
					style={{border: 0}}
					allowFullScreen="yes" 
					loading="lazy" 
					referrerPolicy="no-referrer-when-downgrade"></iframe>
					<div style={{paddingTop: "100px"}}><h3>Click on more option in the top left hand Icon for more.</h3></div>
				</div>
				<div className="Home2-2">
					<div><h1>Why US!</h1></div>
					<div className="toRight" style={{display: "flex"}}>
						<img src="xoxo.png" id="icon" width="50px" height="50px" />
						<h2>We are all Natural!</h2>
					</div>
					<div style={{display: "flex"}}>
						<img src="xoxo.png" id="icon" width="50px" height="50px" />
						<h2>We are linear intergrated!</h2>
					</div>
					<div className="toRight" style={{display: "flex"}}>
						<img src="xoxo.png" id="icon" width="50px" height="50px" />
						<h2>We CARE for your skin!</h2>
					</div>
				</div>
			</div>
			<Link id="headerbtn"to="/appform">Set Up Appointment<i className='fas fa-angle-double-right'></i></Link>

		</div>
	)
}

export default Home;