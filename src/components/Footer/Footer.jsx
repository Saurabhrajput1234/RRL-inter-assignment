import React, { useState } from 'react'
import "./Footer.css";


function Footer() {
  const [selectedCountry, setSelectedCountry] = useState('United States');

  
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return (
    <div>
      <div className="footer">
       <div className="categories">
       <div className="Body-footer">
      <ul>
      <li style={{"color":"#FFFFFF"}}>CATEGORIES</li>
        <li><a href="/">Web Builder</a></li>
        <li><a href="/">Hosting</a></li>
      
        <li><a href="/">Data Center</a></li>
        <li><a href="/">Robotic-Automation</a></li>
        
      </ul>
    </div>
       </div>
       <div className="contact"><div className="Body-footer">
      <ul>
        <li style={{"color":"#FFFFFF"}}>CONTACT</li>
        <li><a href="/">Contact</a></li>
        <li><a href="/">Privacy Policy</a></li>
        <li><a href="/">Terms Of Service</a></li>
        <li><a href="/">Categories</a></li>
        <li><a href="/">About</a></li>
        
      </ul>
    </div></div>
       <div className="united">
       <div>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="United States">United States</option>
        <option value="Canada">Canada</option>
        <option value="United Kingdom">United Kingdom</option>
        <option value="Australia">Australia</option>
      </select>
    </div>
       </div>
       
      </div>
    </div>
  )
}

export default Footer
