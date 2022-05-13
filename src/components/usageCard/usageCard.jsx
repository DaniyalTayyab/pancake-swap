import React from "react";
import "./usageCard.css";
import usageUeser from "../../assets/usageUeser.PNG";

const UsageCard = (props) => {
  const { photo, price, label, quantity } = props;
  return (
    <div className="usage-card">
      <div className="usage-user-img">
        <img className="usageUeser" src={photo} alt="usageUeser" />
      </div>
      <div className="usage-card-data">
        <h2 className="usage-card-quantity">{price}</h2>
        <h2 className="usage-card-label">{label}</h2>
      </div>
      <div className="usage-card-time-left">{quantity}</div>
    </div>
  );
};

export default UsageCard;
