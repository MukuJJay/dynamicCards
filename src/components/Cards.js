import React, { useEffect, useState } from "react";
import pentagon from "../assets/pentagon.svg";
import ellipse from "../assets/ellipse.svg";
import "./css/Cards.css";
import activity from "../assets/activity.svg";
import games from "../assets/games.svg";
import certificate from "../assets/certificate.svg";
import data from "../data";
import { Rating } from "react-simple-star-rating";

const Cards = ({ minAge, maxAge }) => {
  const cardsArr = [];
  let ratingArr = [];
  const [finalArr, setFinalArr] = useState([]);

  const displayCards = () => {
    data.forEach((elem) => {
      elem.forEach((item) => {
        if (item.min_age >= minAge && item.max_age <= maxAge) {
          ratingArr = item.rating.split(";");
          cardsArr.push(
            <div className="card">
              <div
                className={`cardHead ${
                  item.category_name === "Visual Arts"
                    ? "visualArts"
                    : item.category_name
                }`}
              >
                <img
                  className={`pentagon ${
                    item.category_name === "Visual Arts"
                      ? "visualArtsDarkSvg"
                      : `${item.category_name}DarkSvg`
                  }`}
                  src={pentagon}
                  alt="Pentagon"
                />
                <img
                  className={`ellipse ${
                    item.category_name === "Visual Arts"
                      ? "visualArtsDarkSvg"
                      : `${item.category_name}DarkSvg`
                  }`}
                  src={ellipse}
                  alt="ellipse"
                />
                <div className="cardContainer">
                  <span className="session text-size--14 bold">
                    18 Sessions
                  </span>
                  <span className="discount text-size--16 bold">20% off</span>

                  <h3
                    className={`text-secondary mb-10 bold ${
                      item.category_name === "Visual Arts"
                        ? "visualArtsDarkText"
                        : `${item.category_name}DarkText`
                    }`}
                  >
                    {item.display_name}
                  </h3>
                </div>
                <div style={{ padding: "0 12px 20px" }}>
                  <Rating
                    initialValue={ratingArr[0]}
                    readonly={true}
                    size={20}
                    allowFraction={true}
                    style={{ marginRight: "8px" }}
                  />
                  <span className="text-size--14">
                    &#40;{ratingArr[2]} reviews&#41;
                  </span>
                </div>
              </div>

              {/* ============cardBody=============== */}
              <div className="cardBody">
                <div className="cardContainer">
                  <p className="text-size--14">{item.pitch}</p>
                  <h4 className="text-size--16 bold">Students will achieve:</h4>
                  <ul className="aftermath">
                    {item.curriculum_outcomes.map((list) => {
                      if (
                        list ===
                        item.curriculum_outcomes[
                          item.curriculum_outcomes.length - 1
                        ]
                      ) {
                        return (
                          <li style={{ cursor: "pointer" }}>
                            <details>
                              <summary>+</summary>
                              {list}
                            </details>
                          </li>
                        );
                      }
                      return <li>{list}</li>;
                    })}
                  </ul>
                  <a href="/" className="text-size--14 color-carbonBlack">
                    View Detailed lesson plan
                  </a>

                  <div
                    style={{
                      borderBottom: "1px solid #E0E0E0",
                      paddingBottom: "20px",
                    }}
                  ></div>
                </div>
              </div>

              {/* ============cardFoot============== */}
              <div className="cardFoot">
                <div className="cardContainer">
                  <div className={`offerPricing`}>
                    <p className="text-primary-LATO color-carbonBlack bold">
                      ₹ {item.discounted_price}
                    </p>
                    <p className="text-tertiary-LATO color-carbonBlack bold">
                      ₹ {Math.round(item.discounted_price / item.num_classes)}{" "}
                      <span className="color-gray regular">per class</span>
                    </p>
                  </div>
                  <p className="oldOffer text-style--16 color-lightGray">
                    ₹ {item.original_price}
                  </p>

                  <p className="ps">
                    We'll schedule the slots as per your convenience
                  </p>
                </div>
                <div
                  className={`values ${
                    item.category_name === "Visual Arts"
                      ? "visualArts"
                      : item.category_name
                  }`}
                >
                  <div className="activity">
                    <img src={activity} alt="activity" />
                    <span>8 Activities</span>
                  </div>
                  <div className="game">
                    <img src={games} alt="games" />
                    <span>{item.games_count} Games</span>
                  </div>
                  <div className="certificate">
                    <img src={certificate} alt="certificate" />
                    <span>{item.certificate_count} Certificate</span>
                  </div>
                </div>
                <button className="btn">Buy Course</button>
              </div>
            </div>
          );
          setFinalArr(cardsArr);
        }
      });
    });
  };

  useEffect(() => {
    displayCards();
  }, [minAge, maxAge]);

  return <div className="cardWrapper">{finalArr}</div>;
};

export default Cards;
