import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import Movies from './pages/Movies';
import Series from './pages/Shows';
import Home from './pages/Home';



const StyledLink = styled(Link)`
color: #fff;
text-decoration: none;
&:hover{
  color: #000;
}
`
const MenuNavegation = styled.nav`
width: 100%;
height:10vh;
display:flex;
justify-content:center;
align-items: center;
 background-color: #696969;

`
const Menu = styled.ul`
width: 300px;
display:flex;
justify-content: space-between;
// background-color: blue;
list-style: none;
`



export default class App extends React.Component {
  
  render() {
    return (
      <Router>    
        <MenuNavegation>
          <Menu>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/movies">Movies</StyledLink>
            </li>
            <li>
            <StyledLink to="/series">Shows</StyledLink>
            </li>
          </Menu>
        </MenuNavegation>

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
        </Routes>     
      </Router>
    );
  }
}
