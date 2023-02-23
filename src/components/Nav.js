import React, {useState} from 'react'
import { Link } from "react-router-dom";

function Nav() {

	const [display, setDisplay] = useState(false);
	const dropDownItems = [
		{
		title: 'Home',
		url: '/',
		submenu: [
			{
				title: 'About Us',
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
				title: 'Appointment Form',
				url: '/appform'
			},
			{
				title: 'CMS',
				url: '/cms'
			},

		]},
	];

	const submenu = [
			{
				title: 'About Us',
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
				title: 'Appointment Form',
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

	return (
			<div className="navigation">
				<div className="nav">
					    <Link to="/" className="nav-link" style={{color: "rgba(0, 255, 240)", textDecoration: "none"}}><h3>Home</h3></Link>
						<Link to="/aboutus" className="nav-link" style={{color: "rgba(0, 255, 240)", textDecoration: "none"}}><h3>about us</h3></Link>
						<Link to="/productslist" className="nav-link" style={{color: "rgba(0, 255, 240)", textDecoration: "none"}}><h3>Products</h3></Link>
						<Link to="/checkout" className="nav-link" style={{color: "rgba(0, 255, 240)", textDecoration: "none"}}><h3>Checkout</h3></Link>
						<Link to="/appform" className="nav-link" style={{color: "rgba(0, 255, 240)", textDecoration: "none"}}><h3>Appointmentform</h3></Link>
						<Link to="/cms" className="nav-link" style={{color: "rgba(0, 255, 240)", textDecoration: "none"}}><h3>CMS</h3></Link>
				</div>
				<div onClick={handleClick} className="mobileNav">
					  <Link to="/" className="mobile-nav-link" style={{backgroundColor: "rgba(255, 0, 180, .8)" ,color: "rgba(0, 255, 240)", textDecoration: "none"}}><h3>Home</h3></Link>
						{display
						?
						submenu.map((item, index) => {
							return (
							<Link to={item.url} key={index} className="mobile-nav-link" style={{backgroundColor: "rgba(255, 0, 180,.5)", textDecoration: "none"}}><h3>{item.title}</h3></Link>
							)
						})
						:
						<div style={{display: "none"}}></div>
						}
				</div>
			</div>
	)
}

export default Nav