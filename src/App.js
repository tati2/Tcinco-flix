import React from 'react';
import {BrowserRouter as Router, Link, Routes, Route } from "react-router-dom"
import Movies from './pages/Movies';
import Series from './pages/Shows';

export default class App extends React.Component {
  
  render() {
    return (
      <Router>      
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
            <Link to="/series">Shows</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          {/* <Route path="/" element={<Home/>}/> */}
          <Route path="/movies" element={<Movies/>}/>
          <Route path="/series" element={<Series/>}/>
        </Routes>     
      </Router>
    );
  }
}
