import React,{useState} from 'react'
import Dropdown from "./Dropdown.js";
import { Link } from "react-router-dom";

function Navitems( {items, display, setDisplay} ) {


	const [dropdown, setDropdown] = useState(false);

	return (
		<div className="mobile-nav-items">
			{items.submenu
			?
			<>
			<Dropdown display={display} setDisplay={setDisplay} Dropdown={dropdown} submenus={items.submenu} />
			</>
			:
			<div>
			 <Link to={items.url} role="button" className="mobile-nav-link"><h3>{items.title}</h3></Link>
			</div>
			}
		</div>
	)
}

export default Navitems