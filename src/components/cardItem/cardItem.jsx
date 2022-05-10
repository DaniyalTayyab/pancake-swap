import React from "react";
import "./cardItem.css";
import hang from "../../assets/hang.png";
import tick from "../../assets/tick.png";
import calculator from "../../assets/calculator.png";

const CardItem = () => {
  return (
    <div className="card-item-container">
      <div className="card-item-inner">
        <div className="upper-card">
          <div className="part-1">
            <div className="card-logo">
              <img src={hang} alt="logo" />
            </div>
            <div className="card-info right">
              <div>
                <h2 className="card-name">CAKE-BNB</h2>
              </div>
              <div className="card-info-wrap">
                <div className="card-info-right">
                  <p className="card-info-tick">
                    <img src={tick} alt="tick" className="tick-stamp" />
                    Core
                  </p>
                </div>
                <div className="card-info-left">40X</div>
              </div>
            </div>
          </div>

          <div className="part-2">
            <div className="apr">APR:</div>
            <div className="apr-value">
              34.33%&emsp;
              <img src={calculator} alt="calculator" />
            </div>
          </div>

          <div className="part-3">
            <div className="earn">Earn</div>
            <div className="earn-value">CAKE + Fees</div>
          </div>

          <div className="part-4">
            <div className="cake-earned-left">
              <p className="cake-p">CAKE EARNED</p>
              <h2 className="cake-p-h2">0.000</h2>
              <p className="cake-p">CAKE-BNB LP STAKED</p>
            </div>
            <div className="cake-earned-right">
              <button className="harv-btn">Harvest</button>
            </div>
          </div>

          <div className="part-5">
            <button>Connect Wallet</button>
          </div>
        </div>
        <div className="lower-card">lower card</div>
      </div>
    </div>
  );
};

export default CardItem;
