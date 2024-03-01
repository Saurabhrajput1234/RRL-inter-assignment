import React from "react";
import "./RelatedDeal.css";
import p1image from "../../pics/download 7.svg";

const RelatedDeal = () => {

  const cardData = [
    {
      "Post-no": 1,
      cardname: "Webbuilders 1",
      text:"Computer Modern clasic with wix supports",
      off:"20% off",
      images: p1image,
      price:"$39.96",
      realprice:"$49.96"

      
    },
    {
      "Post-no": 1,
      cardname: "Webbuilders 1",
      text:"Computer Modern clasic with wix supports",
      off:"20% off",
      images: p1image,
      price:"$39.96",
      realprice:"$49.96"
    },
    {
      "Post-no": 1,
      cardname: "Webbuilders 1",
      text:"Computer Modern clasic with wix supports",
      off:"20% off",
      images: p1image,
      price:"$39.96",
      realprice:"$49.96"
    }]
    



  return (
    <div className="Related-deals-container">
      <h2>Related deals you might like for</h2>
      <div className="Cards-Related-deals">
      {cardData.map((card, index) => (
        <div className="card">
          <div className="card-image">
            <img src={card.images} alt="" />
          </div>
          <div className="tags">
            <div className="off-percentage">{card.off}</div>
            <div className="limited-time">Limited time</div>
          </div>
          <div className="card-name">
            <h4> Webbuilder 1</h4>
          </div>
          <div className="card-text">
            Computer Modern clasic with wix supports
          </div>
          <div className="price-box">
            <div className="price">$39.96</div>
            <div className="real-price" style={{"fontSize":"0.7rem","paddingTop":"6px",color:"#9FA9B3"}}>$49.96</div>
            <div className="off-price" style={{color:"red","fontSize":"0.7rem","paddingTop":"6px"}}>(20% Off)</div>
          </div>
          <div className="view-deal">
            <button>View Deal</button>
          </div>
        </div>
      ))}
       
      </div>
    </div>
  );
};

export default RelatedDeal;
