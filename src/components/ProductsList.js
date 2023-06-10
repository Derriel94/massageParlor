import React,{useState} from 'react'
import Inventory from './Products.js';
import productl from './CMS.js'
import { Link } from "react-router-dom";



function ProductsList(  ) {

	const [productl, setproductl] = useState([{
    id: 1,
    productName: 'Skin Love',
    price: 15.00,
    imgUrl: './xoxo.png',
    desc: `For your lovely skin!`
  	}]);

	return (
		<div style={{textAlign:"center", display: "flex", justifyContent: "space-around", flexFlow: "wrap", paddingTop: "20px"}}>
			{Inventory.products.map(({ products, id, productName, desc, imgUrl, price } )=>{
					return (<div className="product-card" key={id}>
								<div className="product-title">{productName}</div>
								<Link to="" ><img className="product-img" src={imgUrl} alt="item"/> </Link>
						   </div>);	
				})}
		</div>
	)
}

export default ProductsList;