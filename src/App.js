import React from "react";
import Appointmentform from "./components/Appointmentform.js";
import Home from "./components/Home.js";
import Aboutus from "./components/Aboutus.js";
import Nav from "./components/Nav.js";
import Header from "./components/Header.js";
import ProductsList from "./components/ProductsList.js";
import Checkout from "./components/Checkout.js";
import {CMS} from "./components/CMS.js";
import {loadStripe} from '@stripe/stripe-js';
import Footer from "./components/Footer.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"


const stripePromise = loadStripe('pk_test_51McMorK2iy5RQfund1JgT6UaQc03QWwWuRQbT5dS36itIbTJcMRLFfJGrYlztQnjlzpqSVcQ7tu8nswpZPa94Y8d00fyNqkl10');

const App = () => {

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '',
  };

  return (
    <div className="App" >
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/appform" element={<Appointmentform />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/productslist" element={<ProductsList />} />
          <Route path="/cms" element={<CMS />} />
          <Route path="/checkout" element={<Checkout options={options} stripePromise={stripePromise} />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      
    </div>    
  );
};

export default App;