import React from "react";
import "./css/CardSelector.css";

const CardSelector = ({ setMinAge, setMaxAge }) => {
  const ageAll = () => {
    setMinAge(5);
    setMaxAge(16);
  };
  const ageJunior = () => {
    setMinAge(5);
    setMaxAge(10);
  };
  const ageSenior = () => {
    setMinAge(10);
    setMaxAge(16);
  };

  return (
    <ul className="cardSelectors">
      <li onClick={ageAll}>
        <h2 className="text-primary color-carbonBlack bold mb-10">All</h2>
        <p className="text-tertiary color-gray">(Age 5-16)</p>
      </li>

      <li onClick={ageJunior}>
        <h2 className="text-primary color-carbonBlack bold mb-10">Junior</h2>
        <p className="text-tertiary color-gray">(Age 5-10)</p>
      </li>

      <li onClick={ageSenior}>
        <h2 className="text-primary color-carbonBlack bold mb-10">Senior</h2>
        <p className="text-tertiary color-gray">(Age 10-16)</p>
      </li>
    </ul>
  );
};

export default CardSelector;
