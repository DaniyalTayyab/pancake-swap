import React from "react";
import "./sectionSix.css";
import buycakecoin from "../../../assets/buycakecoin.PNG";

const SectionSix = () => {
  return (
    <div className="section-six">
      <div className="buy-cake-container">
        <div className="buy-cake-upper">
          <div className="buy-cake-left">
            <h2 className="buy-cake-title">CAKE makes our world go round.</h2>
            <div className="buy-cake-description">
              CAKE token is at the heart of the PancakeSwap ecosystem. Buy it,
              win it, farm it, spend it, stake it... heck, you can even vote
              with it!
            </div>
            <div className="buy-cake-btn-wrap">
              <button className="buy-cake-btn">Buy CAKE</button>
              <button className="buy-cake-learn-btn">Learn</button>
            </div>
          </div>
          <div className="buy-cake-right">
            <img className="buy-cake-img" src={buycakecoin} alt="buycakecoin" />
          </div>
        </div>
        <div className="buy-cake-lower">
          <div className="buy-lower-wrap">
            <div className="buy-table-title">Total supply</div>
            <div className="buy-table-lower">294,776,502</div>
          </div>
          <div className="buy-lower-wrap border-l">
            <div className="buy-table-title">Burned to date</div>
            <div className="buy-table-lower">459,975,897</div>
          </div>
          <div className="buy-lower-wrap border-l">
            <div className="buy-table-title">Market cap</div>
            <div className="buy-table-lower">$1.3 billion</div>
          </div>
          <div className="buy-lower-wrap border-l">
            <div className="buy-table-title">Current emissions</div>
            <div className="buy-table-lower">14.25/block</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
