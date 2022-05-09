import React from "react";
import "./cardItem.css";
import hang from "../../assets/hang.png";

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
                <p>CAKE-BNB</p>
              </div>
              <div className="card-info-wrap">
                <div className="card-info-right">
                  <p>&check; one</p>
                </div>
                <div className="card-info-left">40X</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-card">lower card</div>
      </div>
    </div>
  );
};

export default CardItem;
