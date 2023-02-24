import React from 'react'
import { Link } from "react-router-dom";

function Dropdown( {submenus, dropdown} ) {
	return (
		<div className={`dropdown ${dropdown ? "show" : ""}`}>
			{submenus.map((submenu, index)=> {

				return (
					<div className={`dropdown ${dropdown ? "show" : ""}`}>
					<Link to={submenu.url} role="button" className="mobile-nav-link" style={{backgroundColor: "rgba(255, 0, 180, .8)" ,color: "rgba(0, 255, 240)", textDecoration: "none"}}><h3>{submenu.title}</h3></Link>
					</div>
					);
			})}
		</div>
	)
}

export default Dropdown