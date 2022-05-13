import React from "react";
import "./sectionFour.css";
import earnImage from "../../../assets/earnImage.png";

const SectionFour = () => {
  return (
    <div className="section-four">
      <div className="earn-container">
        <div className="upper-earn-container">
          <div className="left-earn">
            <img className="earn-image" src={earnImage} alt="earnimage" />
          </div>
          <div className="right-earn">
            <h2 className="upper-earn-title">
              <span className="earn-purple">Earn</span> passive income <br />
              with crypto.
            </h2>
            <div className="uper-earn-description">
              PancakeSwap makes it easy to make your crypto work for you
            </div>
            <div className="upper-earn-btns">
              <button className="earn-left-btn">Explore</button>
              <button className="earn-right-btn">
                <a href="#">Learn</a>
              </button>
            </div>
          </div>
        </div>
        <div className="lower-earn-container">
          <div className="earn-lower-one">earn lower one</div>
          <div className="earn-lower-two">earn lower two</div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
