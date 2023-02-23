import React,{useState} from 'react'
import Inventory from './Products.js';
import productl from './CMS.js'


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
			{productl.map(({ products, id, productName, desc, imgUrl, price } )=>{
					return (<div className="product-card" key={id}>
								<h1 className="product-title">{productName}</h1>
								<div className="product-desc">
										<h5>Price: {price}.00$ plus tax.</h5>
										<h5>Description: {desc}</h5>
									</div>
								<img className="product-img" src={imgUrl} alt="item"/>
								<div><button style={{marginRight: "10px", cursor: "Pointer"}}>Add To Cart</button><button style={{cursor: "Pointer"}}>CheckOut</button></div>
						   </div>);	
				})}
		</div>
	)
}

export default ProductsList;