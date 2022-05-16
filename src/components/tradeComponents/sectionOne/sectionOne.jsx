import React from "react";
import "./sectionOne.css";
import right from "../../../assets/right.png";
import flybunny from "../../../assets/flybunny.png";

const SectionOne = () => {
  return (
    <div className="section-one-container">
      <div className="top-banner">
        <div className="top-inner-banner">
          <h2 className="lottery-text">Win $60,000 in Lottery</h2>
          <div className="timer-container">
            <h2 className="timer-digit">23</h2>
            <h2 className="timer-sub">h</h2>
            <h2 className="timer-digit">46</h2>
            <h2 className="timer-sub">m</h2>
            <h2 className="timer-digit">40</h2>
            <h2 className="timer-sub">s</h2>
          </div>
          <button className="play-btn">
            Play now <img src={right} alt="right-arrow" />
          </button>
        </div>
      </div>

      <div className="moon-section">
        <div className="left-moon">
          <h2 className="moon-heading">The moon is made of pancakes.</h2>
          <h2 className="moon-description">
            Trade, earn, and win crypto on the most popular decentralized
            platform in the galaxy.
          </h2>
          <div className="moon-btns">
            <button className="left-moon-btn">Connect wallet</button>
            <button className="right-moon-btn">Trade now</button>
          </div>
        </div>
        <div className="right-moon">
          <img className="fly-bunny" src={flybunny} alt="flybunny" />
        </div>
      </div>
      {/* custom divider */}
      <div className="custom-shape-divider-bottom-1652367446">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SectionOne;
