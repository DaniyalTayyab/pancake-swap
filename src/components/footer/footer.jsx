import React from "react";
import tick from "../../assets/tick.png";
import "./footer.css";
import hang from "../../assets/hang.png";
import twitter from "../../assets/twitter.png";
import telegram from "../../assets/telegram.png";
import reddit from "../../assets/reddit.png";
import instagram from "../../assets/instagram.png";
import github from "../../assets/github.png";
import discord from "../../assets/discord.png";
import medium from "../../assets/medium.png";
import right from "../../assets/right.png";

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
                <img src={twitter} alt="tick" className="social-img" />
                {/* <i class="fa-brands fa-twitter"></i> */}
              </a>
              <a href="#">
                <img src={telegram} alt="tick" className="social-img" />
              </a>
              <a href="#">
                <img src={reddit} alt="tick" className="social-img" />
              </a>
              <a href="#">
                <img src={instagram} alt="tick" className="social-img" />
              </a>
              <a href="#">
                <img src={github} alt="tick" className="social-img" />
              </a>
              <a href="#">
                <img src={discord} alt="tick" className="social-img" />
              </a>
              <a href="#">
                <img src={medium} alt="tick" className="social-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-row-lower">
        <div className="lower-row-left">left</div>
        <div className="lower-rwo-right">
          <div className="lower-right-grid">
            <div className="lower-right-logo-box">
              <img className="footer-logo footer-blnc" src={hang} alt="logo" />
              <div className="footer-blnc">$6.637</div>
            </div>
            <div>
              <button className="footer-btn">
                Buy CAKE{" "}
                <img src={right} alt="right-arrow" className="right-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
