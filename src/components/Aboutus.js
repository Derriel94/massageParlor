import React,{useEffect} from 'react';


function Aboutus({display, setDisplay}) {

	return (
		<div className="aboutus">
			<div className="aboutus1">
				<div className="aboutus1-1">
					<div><h1>All Natural Product Line</h1></div>
					<div style={{width: "300px", margin: "auto",paddingTop: "20px" }}><h3>We only use Natural products for our guests. No more getting home 
							 and feeling like you have a chemical burn on your skin. No more oil filled
						 skin. We garuntee relaxation and comfort with all our massuses!</h3></div>
				</div>
				<div className="aboutus1-2">
					<div>
						<div id="subtitle">
							<img src="xoxo.png" id="icon" width="100px" height="100px" />
							<p>Sugar Based!</p>
						</div>
						<p>When waxing we use raw organic sugar, from our own
						   sugar farm. We grow the plant. Gather the sugar ship it to our stores
						   then our knowledgeable sugaristas do the rest!</p>
					</div>
					<div>
						<div id="subtitle">
							<img src="xoxo.png" id="icon" width="100px" height="100px" />
							<p>Natural Oils!</p>
						</div>
						<p>Our oils are also gathered in house! We know how importnant it is to
						  find products that will clean the skin without striping it of its Natural essence,
						  so we created the perfect solution. Merca Oil!</p>
					</div>
				</div>
			</div>

			<div className="aboutus2" style={{marginTop:"100px", color: "black"}}>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
				    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				    consequat.</p>
			</div>
		</div>
	)
}

export default Aboutus