import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Appointmentform from "./../components/Appointmentform.js";
import Home from "./../pages/Home.js";
import Aboutus from "./../components/Aboutus.js";
import Nav from "./../components/Nav.js";
import ProductDetails from "./../pages/ProductDetails.jsx";
import ProductsList from "./../components/ProductsList.js";
import Checkout from "./../pages/Checkout.js";
import {CMS} from "./../components/CMS.js";
import Shop from "./../pages/Shop.jsx";
import { Routes, Route, Navigate } from "react-router-dom"

const stripePromise = loadStripe("pk_test_51McMorK2iy5RQfund1JgT6UaQc03QWwWuRQbT5dS36itIbTJcMRLFfJGrYlztQnjlzpqSVcQ7tu8nswpZPa94Y8d00fyNqkl10");


function Routers() {

const [clientSecret, setClientSecret] = useState("");

useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "lotion" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

	return (
		 <Routes>
         <Route path="/" element={<Navigate to='home'/>} />
          <Route path="/appform" element={<Appointmentform />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop:id" element={<ProductDetails />} />
          <Route path="/cms" element={<CMS />} />
          <Route path="/checkout" element={clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Checkout />
        </Elements>
      )} />
          <Route path="/home" element={<Home />} />
        </Routes>
	)
}

export default Routers;