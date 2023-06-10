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
import {registerUser} from "./firebaseConfig.js";


const App = () => {
  const [display, setDisplay] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  registerUser(email, password);

  return (
    <div className="App">
        <Nav display={display} setDisplay={setDisplay}/> 
        <Layout display={display} setDisplay={setDisplay}/>   
    </div>    
  );
};

export default App;