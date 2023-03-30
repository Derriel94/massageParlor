import React,{useState, useEffect} from 'react'
import { Link } from "react-router-dom";

function Dropdown( {submenus, dropdown, display, setDisplay,navitem} ) {
	
	const [shiftlink, setShiftLink] = useState(false);

	const shiftLink =()=> {
		if (display == true) {
			setShiftLink(true);
		} else {
			setShiftLink(false)
		}
	}
	const refreshpage =()=> {
			setDisplay(false)
	}

	useEffect(() => {
		shiftLink()
		return () => {
			
		};
	}, [display])
	return (
		<div className={`mobilenavlinkcontainerdiv${navitem.title} ${shiftlink ? "shiftlink" : ""}`}>
			<Link to={navitem.url} role="button" onClick={refreshpage} className={`mobile-nav-link`}>{navitem.title}</Link>		
		</div>
	)
}

export default Dropdown