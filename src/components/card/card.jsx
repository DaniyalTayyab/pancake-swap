import React from "react";
import CardItem from "../cardItem/cardItem";
import "./card.css";

const Card = () => {
  return (
    <div className="card-container">
      <div>
        <CardItem />
      </div>
      {/* <div>
        <CardItem />
      </div>
      <div>
        <CardItem />
      </div> */}
    </div>
  );
};

export default Card;
