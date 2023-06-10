import React,{useState, useEffect} from 'react'
import Navitems from './Navitems';
import Dropdown from "./Dropdown.js";
import { Link } from "react-router-dom";

function Nav() {
 const [display, setDisplay] = useState(false);

	const submenu = [
			{
				title: 'Home',
				url: '/',
			},
			{
				title: 'AboutUs',
				url: '/aboutus'
			},
			{
				title: 'Shop',
				url: '/shop'
			},
			{
				title: 'Checkout',
				url: '/checkout'
			},
			{
				title: 'Appointments',
				url: '/appform'
			},
			{
				title: 'CMS',
				url: '/cms'
			},

		];

	const handleClick = (e) => {
		if (display === false) {
			setDisplay(true);
		} else {
			setDisplay(false);
		}
	}

	// useEffect(()=>{
	// 	if (display) {
	// 		setDisplay(false)
	// 	}
	// },[display])

	return (
			<div className="navigation">
				<div className="nav">
					    <Link to="/" className="nav-link">Home</Link>
						<Link to="/aboutus" className="nav-link">about us</Link>
						<Link to="/shop" className="nav-link">Shop</Link>	
						<Link to="/appform" className="nav-link">Appointmentform</Link>
						<div style={{display:"flex"}}>
							<Link to="/signin" className="nav-link">Sign in</Link>
							<Link to="/checkout"><img className="nav-link" src="./cart.png" alt="cart" width="50px" height="50px" style={{zindex: "-2", marginLeft: "40px", marginTop: "10px"}}/></Link>
						</div>
				</div>
				<div className="mobileNavHeader"><div className="mobileNavButton" onClick={handleClick} id="menu">MENU</div><div className="mobileNavButton" id="signin">SIGN IN</div></div>
				<div className={`dropdown ${display ? "show" : ""}`}>
					  {/*<Link to="/" className="mobile-nav-link" style={{backgroundColor: "rgba(255, 0, 180, .8)" ,color: "rgba(0, 255, 240)", textDecoration: "none"}}><h3>Home</h3></Link>*/}
					{submenu.map((navitem, index)=> {
						return <Dropdown display={display} setDisplay={setDisplay} key={index} navitem={navitem} />
					})}
					</div>					
			</div>
	)
}

export default Nav