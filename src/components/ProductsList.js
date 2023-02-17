import React, {useState} from 'react'
import Product from './Product.js';

function ProductsList() {

	const [productsList, setProductsList] = useState([]);

	return (
		<div style={{display: "flex", justifyContent: "center", paddingTop: "20px"}}>
			<Product/>
		</div>
	)
}

export default ProductsList;