import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Inventory from './Products.js';

const CMS = ({display, setDisplay}) => {

	// axios.defaults.withCredentials = true;

	const [productl, setproductl] = useState([{
    id: 1,
    productName: 'Skin Love',
    price: 15.00,
    imgUrl: './xoxo.png',
    desc: `For your lovely skin!`
  	}]);

  	const [newProduct, setNewProduct] = useState([{
    id: '',
    productName: '',
    price: '',
    imgUrl: '',
    desc: ``
  	}]);

	const [productName, setProductName] = useState('');
	const [price, setPrice] = useState(0);
	const [id, setId] = useState(0);
	const [desc, setDesc] = useState('');
	const [imgUrl, setImageUrl] = useState('');
	const [imgFile, setImgFile] = useState('');
	const [imgFileName, setImgFileName] = useState('');

	const saveImageFile = (e) => {
		setImgFile(e.target.files[0]);
		setImgFileName(e.target.files[0].name);

	};
		console.log(imgFile)
		console.log(imgFileName)
  	const addItemToInventory = async (e) => {

  		

  		fetch(`http://localhost:4242/addNewProduct`,{
  			method: 'post',
  			headers: {'Content-Type':'application/json'},
  			body: JSON.stringify({
  				id: id,
  				productName: productName,
  				price: price,
  				desc: desc,
  			}),
  			
  		})
  		.then((response) => {
  			console.log(response);
  		})

  		const formData = new FormData();
  		formData.append("file", imgFile);

  		
  		try {
  			const responese = await fetch(`http://localhost:4242/addNewProductImage`,{
  			method: 'post',
  			headers: {'Content-Type':'application/json'},
  			body: JSON.stringify({
  				formData,
  			}),
  			
  		})
  		.then((response) => {
  			console.log(response);
  		})
				
  		} catch (ex) {
  			console.log(ex);
  		}

  		
  		
  	}
  	console.log(newProduct)
	return (
		<div className="cms">
			<div id="cmsform">
				<h1>Inventory Management</h1>
				<div id="cmsform1">
					<h2>Add Item:</h2>
					Name
					<input type="text" name="name" onChange={(e)=>setProductName(e.target.value)} />
					Price
					<input type="number" name="price" onChange={(e)=>setPrice(e.target.value)} />
					Description
					<textarea  name="desc" onChange={(e)=>setDesc(e.target.value)} />
					Id
					<input type="number" name="id" onChange={(e)=>setId(e.target.value)} />
					Image
					<input type="file" name="file" onChange={saveImageFile}/>
					<div><button onClick={addItemToInventory}>Submit</button></div>
				</div>
			</div>

			<div>
			{productl.map(({ products, id, productName, desc, imgUrl, price } )=>{
					return (<div className="product-card" key={id}>
								<p className="product-title">{productName}</p>
								<div className="product-desc">
										<p>Price: {price}.00$ plus tax.</p>
										<p>Description: {desc}</p>
									</div>
								<img className="product-img" src={imgUrl} alt="item"/>
								<div><button style={{marginRight: "10px", cursor: "Pointer"}}>Add To Cart</button><button style={{cursor: "Pointer"}}>CheckOut</button></div>
						   </div>);	
				})}
			</div>
		</div>
	)
}

export {
	CMS,
}