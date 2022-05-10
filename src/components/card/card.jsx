import React, { useEffect, useState } from "react";
import CardItem from "../cardItem/cardItem";
import "./card.css";
import { getData } from "../../card-data/data";

const Card = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(getData());
  }, []);
  // const cards = [...data];
  // console.log("data", cards);
  return (
    <div className="card-container">
      {data.map((card) => (
        <div key={card._id}>
          <CardItem {...card} />
        </div>
      ))}
    </div>
  );
};

export default Card;
