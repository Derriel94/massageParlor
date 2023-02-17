import React from 'react'

function Product() {
	return (
		<div className="product-card">
			<div className="product-title"><h1>Skin Love</h1></div>
			<div className="product-desc">
				<h5>Price: 15.00$ plus tax.</h5>
				<h5>Description: This product is so nice! Here's Why!</h5>
			</div>
			<div>
				<img className="product-img" src="./xoxo.png"/>
			</div>
			<div><button style={{marginRight: "10px", cursor: "Pointer"}}>Add To Cart</button><button style={{cursor: "Pointer"}}>CheckOut</button></div>
			<div></div>
		</div>
	)
}

export default Product;