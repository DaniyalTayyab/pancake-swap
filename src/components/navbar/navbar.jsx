import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";
import hang from "../../assets/hang.png";
import globe from "../../assets/globe.png";
import gear from "../../assets/gear.png";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={hang} alt="logo" style={{ height: 36 }} />
        <label className="logo">PancakeSwap</label>
      </div>

      <ul className="ul">
        <li className="li-item">Trade</li>
        <li className="li-item active">Earn</li>
        <li className="li-item">Win</li>
        <li className="li-item">NFT</li>
        <li className="li-item active">&#8230;</li>
      </ul>

      <ul className="ul-right">
        <li className="right-li">
          <img className="logo-change" src={hang} alt="logo" />
        </li>
        <li className="right-li">$6.637</li>
        <li className="right-li">
          <img src={globe} alt="globe" />
        </li>
        <li className="right-li">
          <img src={gear} alt="settings" />
        </li>
        <li className="right-li">
          <button className="btn">Connect Wallet</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
