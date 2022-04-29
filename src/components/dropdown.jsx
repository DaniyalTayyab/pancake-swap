import React from "react";

const DropDown = () => {
  return (
    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          APR
        </a>
        <a className="dropdown-item" href="#">
          Multiplier
        </a>
        <a className="dropdown-item" href="#">
          Earned
        </a>
      </div>
    </div>
  );
};

export default DropDown;
