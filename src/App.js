import React,{useState,useEffect} from "react";
import Appointmentform from "./components/Appointmentform.js";
import Home from "./pages/Home.js";
import Aboutus from "./components/Aboutus.js";
import Nav from "./components/Nav.js";
import ProductsList from "./components/ProductsList.js";
import Checkout from "./pages/Checkout.js";
import {CMS} from "./components/CMS.js";
import {loadStripe} from '@stripe/stripe-js';
import Footer from "./components/Footer.js";
import Layout from './components/Layout.jsx'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom"


// const stripePromise = loadStripe('pk_test_51McMorK2iy5RQfund1JgT6UaQc03QWwWuRQbT5dS36itIbTJcMRLFfJGrYlztQnjlzpqSVcQ7tu8nswpZPa94Y8d00fyNqkl10');

const App = () => {
  const [display, setDisplay] = useState(false);

  const options = {
    // passing the client secret obtained from the server
    clientSecret: '',
  };

  return (
    <div className="App">
        <Nav display={display} setDisplay={setDisplay}/>  
        <Layout display={display} setDisplay={setDisplay}/>   
    </div>    
  );
};

export default App;