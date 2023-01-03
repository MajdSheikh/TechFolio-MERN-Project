import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Update from './views/Update';

import Form from './views/Form'
import Portfolio from './views/Portfolio'

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import AllPortfolios from './views/AllPortfolios';


function App(props) {



  return (
    <div className="App">
      <h1>Welcome to TechFolio</h1>     
      {/* <div><img src={`http://localhost:8000/${post.photo}`} alt="ss" width="100%" height="100%"></img></div> */}

      <Routes>
        <Route path="/" element={<SignIn/>}></Route>
        <Route path="/registration" element={<SignUp/>}></Route>
        <Route path="/Form" element={<Form/>}></Route>
        <Route path="/PortfolioLists" element={<AllPortfolios/>}></Route>
        <Route path="/portfolio/:portfolioId" element={<Portfolio/> } ></Route>
        <Route path="/api/portfolio/:portfolioId" element={<Update/> } ></Route>

      </Routes>
    </div>
  );
}

export default App;
