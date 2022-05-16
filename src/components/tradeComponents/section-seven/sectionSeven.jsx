import React from "react";
import { Link } from "react-router-dom";
import "./sectionSeven.css";
import connectRightFloat from "../../../assets/connectRightFloat.PNG";
import connectLeftFloat from "../../../assets/connectLeftFloat.PNG";

const SectionSeven = () => {
  return (
    <div className="section-seven">
      <div className="connect-container">
        <div className="connect-wrap">
          <h2 className="connect-title">Start in seconds.</h2>
          <div className="connect-description">
            Connect your crypto wallet to start using the app in seconds.
          </div>
          <div className="connect-description-two">No registration needed.</div>
          <Link className="how-to-start" to="#">
            Learn how to start
          </Link>
          <button className="connect-btn">Connect Wallet</button>
        </div>

        <img
          className="connect-left-float"
          src={connectLeftFloat}
          alt="connectLeftFloat"
        />

        <img
          className="connect-right-float"
          src={connectRightFloat}
          alt="connectRightFloat"
        />
      </div>
    </div>
  );
};

export default SectionSeven;
