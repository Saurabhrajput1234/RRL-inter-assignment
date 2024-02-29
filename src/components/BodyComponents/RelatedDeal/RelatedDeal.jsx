import React from 'react';
import "./RelatedDeal.css";
import p1image from "../../pics/download 7.svg"

const RelatedDeal = () => {
  return (
    <div className='Related-deals-container'>
    <h2>Related deals you might like for</h2>
    <div className="Cards-Related-deals">
      <div className='card'>
      <div className='card-image'><img src={p1image} alt="" /></div>
      <div className="tags">
      <div className='off-percentage'>20% Off</div>
      <div className="limited-time">Limited time</div>
      </div>
      <div className="card-name"><h4> Webbuilder 1</h4></div>
      <div className="card-text">Computer Modern clasic with wix supports</div>
      <div className="price-box">
        <div className="price">$39.96</div>
        <div className="real-price">$49.96</div>
        <div className="off-price">(20% Off)</div>
      </div>
      <div className="view-deal">
        <button>View Deal</button>
      </div>
      
        
      </div>
      <div className='card'>
      <div className='card-image'><img src={p1image} alt="" /></div>
      <div className="tags">
      <div className='off-percentage'>20% Off</div>
      <div className="limited-time">Limited time</div>
      </div>
      <div className="card-name"><h4> Webbuilder 1</h4></div>
      <div className="card-text">Computer Modern clasic with wix supports</div>
      <div className="price-box">
        <div className="price">$39.96</div>
        <div className="real-price">$49.96</div>
        <div className="off-price">(20% Off)</div>
      </div>
      <div className="view-deal">
        <button>View Deal</button>
      </div>
      
        
      </div><div className='card'>
      <div className='card-image'><img src={p1image} alt="" /></div>
      <div className="tags">
      <div className='off-percentage'>20% Off</div>
      <div className="limited-time">Limited time</div>
      </div>
      <div className="card-name"><h4> Webbuilder 1</h4></div>
      <div className="card-text">Computer Modern clasic with wix supports</div>
      <div className="price-box">
        <div className="price">$39.96</div>
        <div className="real-price">$49.96</div>
        <div className="off-price">(20% Off)</div>
      </div>
      <div className="view-deal">
        <button>View Deal</button>
      </div>
      
        
      </div>
    </div>
      
    </div>
  )
}

export default RelatedDeal
