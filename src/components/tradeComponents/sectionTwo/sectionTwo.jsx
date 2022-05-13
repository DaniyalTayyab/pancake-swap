import React, { useEffect, useState } from "react";
import "./sectionTwo.css";
import shutBunny from "../../../assets/shutBunny.png";
import UsageCard from "../../usageCard/usageCard";
import { usageCardData } from "../../../card-data/usageCardData";

const SectionTwo = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    setCardData(usageCardData());
  }, []);

  return (
    <div className="section-two">
      <div className="usage-container">
        <img className="shut-bunny" src={shutBunny} alt="shut-bunny" />
        <h2 className="usage-bold">Used by millions.</h2>
        <h2 className="usage-bold">Trusted with billions.</h2>
        <div className="usage-description top-margin">
          PancakeSwap has the most users of any decentralized platform, ever.
        </div>
        <div className="usage-description">
          And those users are now entrusting the platform with over $4.3 billion
          in funds.
        </div>
        <div className="usage-description-below">Will you join them?</div>

        <div className="usage-card-container">
          <div className="usage-card-wrap">
            {cardData.map((data) => (
              <UsageCard {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
