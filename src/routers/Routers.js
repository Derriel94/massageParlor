import React from "react";
import Appointmentform from "./../components/Appointmentform.js";
import Home from "./../pages/Home.js";
import Aboutus from "./../components/Aboutus.js";
import Nav from "./../components/Nav.js";
import ProductDetails from "./../pages/ProductDetails.jsx";
import Checkout from "./../pages/Checkout.js";
import {CMS} from "./../components/CMS.js";
import {loadStripe} from '@stripe/stripe-js';
import Shop from "./../pages/Shop.jsx";
import { Routes, Route, Navigate } from "react-router-dom"

function Routers() {
	return (
		 <Routes>
         <Route path="/" element={<Navigate to='home'/>} />
          <Route path="/appform" element={<Appointmentform />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop:id" element={<ProductDetails />} />
          <Route path="/cms" element={<CMS />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/home" element={<Home />} />
        </Routes>
	)
}

export default Routers;