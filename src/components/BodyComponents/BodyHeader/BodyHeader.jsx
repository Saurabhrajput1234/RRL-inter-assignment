import React from 'react';
import "./BodyHeader.css";
import BodyHeaderLinks from './BodyHeaderLinks';
import check from "../../pics/IMAGE (1).svg"
import check1 from "../../pics/IMAGE.svg"

const BodyHeader = () => {
  return (
    <div className='BodyHeader' style={{height:"256px",width:"100%"}}>
    <h1 >Best Website builders in the US</h1>
    <div className="LastUpdated" style={{display:"flex",alignItems:"center"}}>
      <div className="check-img"><img src={check} alt="" /></div><div className="text-lastupdate"><p>Last Updated - February 22, 2020</p></div><div className="img-Advertising"><img src={check1} alt="" /></div><div className='text-Advertising'><p>Advertising Disclosure</p></div>
    </div>
    <BodyHeaderLinks/>
    <div className="pathProcess">
      <p>Home Hosting for all  Hosting  Hosting6  Hosting5</p>
    </div>
    
      
    </div>
  )
}

export default BodyHeader
