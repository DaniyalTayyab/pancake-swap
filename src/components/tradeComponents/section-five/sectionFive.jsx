import React from "react";
import "./section-five.css";
import pridictoinImg from "../../../assets/pridictionImg.PNG";
import lotteryImage from "../../../assets/lotteryImage.PNG";

const SectionFive = () => {
  return (
    <div className="section-five">
      <div className="five-container">
        <div className="five-wrap">
          <h2 className="win-text">
            <span className="purple-win">Win</span> millions in prizes
          </h2>
          <div className="prizes-decr">Provably fair, on-chain games.</div>
          <div className="prizes-decr m-b-40">Win big with PancakeSwap.</div>
          <div className="win-prize-card">
            <div className="left-prize-card">
              <div className="top-img">
                <img
                  className="top-img-st"
                  src={pridictoinImg}
                  alt="pridictoinImg"
                />
              </div>
              <div className="earn-card-low-b">
                <div className="pridectin-text">Prediction</div>
                <h2 className="earn-card-price">$600 million</h2>
                <div className="earn-price-description">in BNB won so far</div>
                <div className="pridiction-card-text">
                  Will BNB price rise or fall? guess correctly to win!
                </div>
                <button className="earn-card-btn">Play</button>
              </div>
            </div>
            <div className="right-prize-card">
              <div className="top-img">
                <img
                  className="top-img-st"
                  src={lotteryImage}
                  alt="lotteryImage"
                />
              </div>
              <div className="lottery-card-low-b">
                <div className="lottery-text">Lottery</div>
                <h2 className="lottery-card-price">$87,020</h2>
                <div className="lottery-price-description">
                  in CAKE prizes this round
                </div>
                <div className="lottery-card-text">
                  Buy tickets with CAKE, win CAKE if your numbers match
                </div>
                <button className="lottery-card-btn">Buy Tickets</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
