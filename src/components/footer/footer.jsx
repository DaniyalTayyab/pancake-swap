import React from "react";
import tick from "../../assets/tick.png";
import "./footer.css";
import hang from "../../assets/hang.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="continer">
        <div className="footer-row">
          <div className="footer-col">
            <h4>ABOUT</h4>
            <ul>
              <li>
                <a href="#" className="footer-active">
                  Contact
                </a>
              </li>
              <li>
                <a href="#">Brand</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">CAKE Token</a>
              </li>
              <li>&#9135;</li>
              <li>
                <a href="#">Online Store</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>HELP</h4>
            <ul>
              <li>
                <a href="#">Customer Support</a>
              </li>
              <li>
                <a href="#">Troubleshooting</a>
              </li>
              <li>
                <a href="#">Guides</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>DEVELOPERS</h4>
            <ul>
              <li>
                <a href="#">Github</a>
              </li>
              <li>
                <a href="#">Documentation</a>
              </li>
              <li>
                <a href="#">Bug Bounty</a>
              </li>
              <li>
                <a href="#">Audits</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>

          <div className="footer-logo-container">
            <img src={hang} alt="logo" style={{ height: 36 }} />
            <label className="footer-logo">PancakeSwap</label>
          </div>

          <div className="footer-col">
            <div className="social-links">
              <a href="#">
                <img src={tick} alt="tick" className="social-img" />
              </a>
              <a href="#">
                <img src={tick} alt="tick" className="social-img" />
              </a>
              <a href="#">
                <img src={tick} alt="tick" className="social-img" />
              </a>
              <a href="#">
                <img src={tick} alt="tick" className="social-img" />
              </a>
              <a href="#">
                <img src={tick} alt="tick" className="social-img" />
              </a>
              <a href="#">
                <img src={tick} alt="tick" className="social-img" />
              </a>
              <a href="#">
                <img src={tick} alt="tick" className="social-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
