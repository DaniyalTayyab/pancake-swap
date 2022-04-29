import React from "react";
import "../App.css";

const ToogleSwitch = () => {
  return (
    <>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
    </>
  );
};

export default ToogleSwitch;
