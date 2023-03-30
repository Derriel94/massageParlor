import React, {useState, useEffect} from 'react'
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
				title: 'Products',
				url: '/productslist'
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
		if (display == false) {
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
					    <Link to="/" className="nav-link"><h3>Home</h3></Link>
						<Link to="/aboutus" className="nav-link"><h3>about us</h3></Link>
						<Link to="/productslist" className="nav-link"><h3>Products</h3></Link>
						<Link to="/checkout" className="nav-link"><h3>Checkout</h3></Link>
						<Link to="/appform" className="nav-link"><h3>Appointmentform</h3></Link>
						<Link to="/cms" className="nav-link"><h3>CMS</h3></Link>
				</div>
				<div onClick={handleClick} id="navbutton" className="mobileNavButton">MENU</div>
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