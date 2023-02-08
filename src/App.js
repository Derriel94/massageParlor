import React from "react";
import Appointmentform from "./components/Appointmentform.js";
import Location from "./components/Location.js";
import Home from "./components/Home.js";
import Aboutus from "./components/Aboutus.js";
import Nav from "./components/Nav.js";
import Footer from "./components/Footer.js";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <div className="App" >
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/appform" element={<Appointmentform />} />
          <Route path="/location" element={<Location />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
      
    </div>    
  );
};

export default App;