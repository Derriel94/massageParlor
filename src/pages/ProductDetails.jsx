import React from 'react'

function ProductDetails( {id, productName, price, desc, imgUrl}) {
	return (
			<div className="product-card" key={id}>
								<h1 className="product-title">{productName}</h1>
								<div className="product-desc">
										<h5>Price: {price}.00$ plus tax.</h5>
										<h5>Description: {desc}</h5>
									</div>
								<img className="product-img" src={imgUrl} alt="item"/>
								<div><button style={{marginRight: "10px", cursor: "Pointer"}}>Add To Cart</button><button style={{cursor: "Pointer"}}>CheckOut</button></div>
						   </div>
	)
}

export default ProductDetails