import React from "react";
import "./sectionThree.css";
import coinOne from "../../../assets/coinOne.png";

const SectionThree = () => {
  return (
    <div className="section-three">
      <div className="secion-three-container">
        <div className="left-coin-container">
          <h2 className="coin-title">
            <span className="trade-text-blue">Trade</span> anything. No <br />
            registration, no hassle.
          </h2>
          <div className="trade-coin-description">
            Trade any token on BNB Smart Chain in seconds, just by <br />
            connecting your wallet.
          </div>
          <div className="trade-coin-btns">
            <button className="trade-left-coin-btn">Trade now</button>
            <button className="trade-right-coin-btn">
              <a href="#">Learn</a>
            </button>
          </div>
        </div>
        <div className="right-coin-container">
          <img src={coinOne} alt="coinOne" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
