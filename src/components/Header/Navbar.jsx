import React,{useState} from 'react'

import "./Navbar.css";
import SearchPost from './SearchPost';


const Navbar = () => {
   
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };


  return (
   <div style={{height:"57px"}}>
    <div className="navbar" >
      <div className="navbar-container">
        
        <SearchPost />
       
        <div className={`navbar-links ${isNavbarOpen ? 'active' : ''}`}>
        
          
          <a href="/">Categories</a>
          <a href="/Products">Website Builders</a>
          
          <a href="/signin">Today's deals</a>

    


        </div>
        

        <div className="navbar-toggle" onClick={toggleNavbar}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Navbar
