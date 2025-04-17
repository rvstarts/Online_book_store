import {Routes,Route} from 'react-router-dom'
import React from "react";
import Main from "./Components/Main";
import "./Components/style.css";
import Books from "./Components/Books";
import { Link } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Terms from './Components/Terms';
function App() {
return (
  <>
   <nav>
        <div className="logo-container">
        
          <h1 className="biblio">B!BL!O</h1>
          <h1 className="worm">WORM</h1>
        </div>
        <div className="nav-links">
         <Link to="/">Home</Link>
          <Link to="/Books">Books</Link>
          <Link to="/About">T/C</Link>
          <Link to="/Signup">SignUp</Link>
          <Link to="/loginpage">Login</Link>
        </div>
      </nav>
      
   <Routes>
   <Route path='/' element={<Main/>}/>
      <Route path='/Books' element={<Books/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/loginpage' element={<Login/>}/>
      <Route path='/About' element={<Terms/>}/>
     </Routes>
 <footer>
      <div className="footer-content">
        <div>
          <h3>Website Information</h3>
          <p>
            Full information about the website, services, and contact details
            will written here.
          </p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p>
            <a href="https://facebook.com">Facebook</a> |
            <a href="https://twitter.com">Twitter</a> |
            <a href="https://instagram.com">Instagram</a> |
            <a href="https://linkedin.com">LinkedIn</a>
          </p>
        </div>
        <div>
          <h3>More</h3>
          <p>
            <a href="#privacy">Privacy Policy</a> |
            <a href="#terms">Terms of Service</a> |
            <a href="#about">About Us</a>
          </p>
        </div>
      </div>
      <p>&copy; 2024 BIBLIOWORM All rights reserved.</p>
    </footer>
 
  
  </>
);
} 

export default App;