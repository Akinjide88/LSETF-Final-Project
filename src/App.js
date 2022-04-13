import "antd/dist/antd.css"
import React from 'react';
import styled from 'styled-components';
import Card from "./Components/Card/Card.js";
import { GlobalStyle } from './GlobalStyle.js';
import Home from './Components/Home/Home.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './Components/NavBar/Navbar.js';

function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <hr/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/participant' element={<Card/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App;

export const MainContainer = styled.div`
width: 100%;
background-color: yellowgreen;
/* display: flex; */
`