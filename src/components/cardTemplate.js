{
  /* ==============cardHead================    */
}
<div className="card">
  <div className="cardHead">
    <img className="pentagon" src={pentagon} alt="Pentagon" />
    <img className="ellipse" src={ellipse} alt="ellipse" />
    <div className="cardContainer">
      <span className="session text-size--14 bold">18 Sessions</span>
      <span className="discount text-size--16 bold">20% off</span>

      <h3 className="text-secondary bold">Public Speaking Learn</h3>
    </div>
  </div>

  {/* ============cardBody=============== */}
  <div className="cardBody">
    <div className="cardContainer">
      <p className="text-size--14">
        Master the most sought-after 21st century skill oratory, through
        interactive speaking activities
      </p>
      <h4 className="text-size--16 bold">Students will achieve:</h4>
      <ul className="aftermath">
        <li>understand elements and structure of a story </li>
        <li>
          practice weaving stories with the addition of elements and details
        </li>
        <li>
          learn to narrate with confidence using expressions and voice
          modulation
        </li>
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
      <div className="offerPricing">
        <p className="text-primary-LATO color-carbonBlack bold">₹ 9999</p>
        <p className="text-tertiary-LATO color-carbonBlack bold">
          ₹ 200 <span className="color-gray regular">per class</span>
        </p>
      </div>

      <p className="oldOffer text-style--16 color-lightGray">₹ 5999</p>

      <p className="ps">We'll schedule the slots as per your convenience</p>
    </div>
    <div className="values">
      <div className="activity">
        <img src={activity} alt="activity" />
        <span>8 Activities</span>
      </div>
      <div className="game">
        <img src={games} alt="games" />
        <span>3 Games</span>
      </div>
      <div className="certificate">
        <img src={certificate} alt="certificate" />
        <span>1 Certificate</span>
      </div>
    </div>
    <button className="btn">Buy Course</button>
  </div>
</div>;
