import React,{useState} from 'react'
import Dropdown from "./Dropdown.js";
import { Link } from "react-router-dom";

function Navitems( {items} ) {


	const [dropdown, setDropdown] = useState(false);

	return (
		<div className="mobile-nav-items">
			{items.submenu
			?
			<div>
			<Link onClick={() => setDropdown((prev) => !prev)} to={items.url} role="button" className="mobile-nav-link" style={{backgroundColor: "rgba(255, 0, 180, .8)" ,color: "rgba(0, 255, 240)", textDecoration: "none"}}><h3>{items.title}</h3></Link>
			{' '}
			<Dropdown dropdown={dropdown} submenus={items.submenu} />
			</div>
			:
			<div>
			 <Link to={items.url} role="button" className="mobile-nav-link" style={{backgroundColor: "rgba(255, 0, 180, .8)" ,color: "rgba(0, 255, 240)", textDecoration: "none"}}><h3>{items.title}</h3></Link>
			</div>
			}
		</div>
	)
}

export default Navitems