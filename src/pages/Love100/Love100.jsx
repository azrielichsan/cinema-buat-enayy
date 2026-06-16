import reasons from "../../data/reasons";

import "./Love100.css";

function Love100() {
  return (
    <div className="love-page">

      <div className="love-left">

        <h1>
          100
        </h1>

        <h2>
          THINGS
          <br />
          I LOVE
          <br />
          ABOUT YOU
        </h2>

      </div>

      <div className="love-right">

        {reasons.map((reason, index) => (
          <div
            key={index}
            className="reason-card"
          >
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <p>{reason}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Love100;