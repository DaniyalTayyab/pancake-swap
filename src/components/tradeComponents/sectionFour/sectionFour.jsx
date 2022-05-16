import React from "react";
import "./sectionFour.css";
import earnImage from "../../../assets/earnImage.png";
import updown from "../../../assets/updown.PNG";

const SectionFour = () => {
  return (
    <section className="s-four-wrapper">
      {/* custom curve */}
      <div class="custom-shape-divider-top-1652714844">
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
            <div className="earn-lower-one">
              <span className="top-text">Top</span> Farms &nbsp; &nbsp;
              <img className="updown" src={updown} alt="updown" />
            </div>
            <div className="earn-lower-two">
              <div className="lower-two-container">
                <div className="lower-eran-first">WZRD-BUSD LP</div>
                <div>
                  <div className="apr-precntage">373.715%</div>
                  <div className="apr-text">APR</div>
                </div>
              </div>
              <div className="lower-two-container earn-border-right">
                <div className="lower-eran-first">GAL-BNB LP</div>
                <div>
                  <div className="apr-precntage">302.251%</div>
                  <div className="apr-text">APR</div>
                </div>
              </div>
              <div className="lower-two-container earn-border-right">
                <div className="lower-eran-first">GMT-USDC LP</div>
                <div>
                  <div className="apr-precntage">257.139%</div>
                  <div className="apr-text">APR</div>
                </div>
              </div>
              <div className="lower-two-container earn-border-right">
                <div className="lower-eran-first">UST-BUSD LP</div>
                <div>
                  <div className="apr-precntage">254.299%</div>
                  <div className="apr-text">APR</div>
                </div>
              </div>
              <div className="lower-two-container">
                <div className="lower-eran-first">HOTCROSS-BNB LP</div>
                <div>
                  <div className="apr-precntage">202.745%</div>
                  <div className="apr-text">APR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
