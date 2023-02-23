import React from 'react'

function Location() {
	return (
		<div className="location">
			<div style={{paddingTop: "100px"}}><h1>Come see us at Our New Location!</h1></div>
			<iframe 
			title="location"
			src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1674.720829613227!2d-96.7492895022167!3d32.912927519250445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d32.913010799999995!2d-96.74606279999999!5e0!3m2!1sen!2sus!4v1675865961718!5m2!1sen!2sus" 
			width="600" 
			height="450" 
			style={{border: 0}}
			allowFullScreen="yes" 
			loading="lazy" 
			referrerPolicy="no-referrer-when-downgrade"></iframe>
			<div style={{paddingTop: "100px"}}><h3>Click on more option in the top left hand corner to get directions</h3></div>
		</div>
	)
}

export default Location