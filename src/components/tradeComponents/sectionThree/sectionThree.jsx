import React from "react";
import "./sectionThree.css";
import coinOne from "../../../assets/coinOne.png";

const SectionThree = () => {
  return (
    <section className="s-three-container">
      {/* custom curve */}
      <div class="custom-shape-divider-top-1652715559">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>

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
    </section>
  );
};

export default SectionThree;
