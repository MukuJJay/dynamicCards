import React, { useState } from "react";
import "./css/CardSelector.css";

const CardSelector = ({ setMinAge, setMaxAge }) => {
  const [active, setActive] = useState();

  const ageAll = () => {
    setMinAge(5);
    setMaxAge(16);
    if (active === "all") {
      setActive("all");
    } else {
      setActive("all");
    }
  };
  const ageJunior = () => {
    setMinAge(5);
    setMaxAge(10);
    if (active === "junior") {
      setActive("junior");
    } else {
      setActive("junior");
    }
  };
  const ageSenior = () => {
    setMinAge(10);
    setMaxAge(16);
    if (active === "senior") {
      setActive("senior");
    } else {
      setActive("senior");
    }
  };

  return (
    <ul className="cardSelectors">
      <li onClick={ageAll} className={active === "all" ? "active" : ""}>
        <h2 className="text-primary color-carbonBlack bold mb-10">All</h2>
        <p className="text-tertiary color-gray">(Age 5-16)</p>
      </li>

      <li onClick={ageJunior} className={active === "junior" ? "active" : ""}>
        <h2 className="text-primary color-carbonBlack bold mb-10">Junior</h2>
        <p className="text-tertiary color-gray">(Age 5-10)</p>
      </li>

      <li onClick={ageSenior} className={active === "senior" ? "active" : ""}>
        <h2 className="text-primary color-carbonBlack bold mb-10">Senior</h2>
        <p className="text-tertiary color-gray">(Age 10-16)</p>
      </li>
    </ul>
  );
};

export default CardSelector;
