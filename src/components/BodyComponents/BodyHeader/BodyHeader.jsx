import React from "react";
import "./BodyHeader.css";
import BodyHeaderLinks from "./BodyHeaderLinks";
import check from "../../pics/IMAGE (1).svg";
import check1 from "../../pics/IMAGE.svg";
import gtsymbole from "../../pics/Vector (3).svg";
import down from "../../pics/IMAGE (4).svg";

const BodyHeader = () => {
  return (
    <div className="BodyHeader">
      <h1>Best Website builders in the US</h1>
      <div
        className="LastUpdated"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="check-img">
          <img src={check} alt="" />
        </div>
        <div className="text-lastupdate">
          <p>Last Updated - February 22, 2020</p>
        </div>
        <div className="img-Advertising">
          <img src={check1} alt="" />
        </div>
        <div className="text-Advertising">
          <p>Advertising Disclosure</p>
        </div>
        <div className="top-relevant">
          <p>Top-Relevant</p> <img src={down} alt="" />
        </div>
      </div>
      <BodyHeaderLinks />
      <div className="pathProcess">
        <p>Home </p> <img src={gtsymbole} alt="" />
        <p> Hosting for all </p>
        <img src={gtsymbole} alt="" />
        <p> Hosting </p>
        <img src={gtsymbole} alt="" />
        <p> Hosting6 </p>
        <img src={gtsymbole} alt="" />
        <p>Hosting5 </p>
      </div>
    </div>
  );
};

export default BodyHeader;
