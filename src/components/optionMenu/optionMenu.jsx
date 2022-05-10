import React from "react";
import "./optionMenu.css";
import dotgrid from "../../assets/dotgrid.png";

const OptionMenu = () => {
  return (
    <div className="option-menu">
      <div className="left-cont">
        <button className="btn-grid">
          <img className="dot-grid" src={dotgrid} alt="dotgrid" />
        </button>
        <button className="btn-grid">
          <img className="dot-grid" src={dotgrid} alt="dotgrid" />
        </button>
        <div className="form-check form-switch toogle-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label
            className="form-check-label stakd-only"
            for="flexSwitchCheckDefault"
          >
            Staked only
          </label>
        </div>
      </div>
      <div className="right-cont">div2</div>
    </div>
  );
};

export default OptionMenu;
