import React from "react";
import Card from "../card/card";
import OptionMenu from "../optionMenu/optionMenu";
import "./farm.css";

const Farm = () => {
  return (
    <div className="farm-conatiner">
      <OptionMenu />
      <Card />
    </div>
  );
};

export default Farm;
