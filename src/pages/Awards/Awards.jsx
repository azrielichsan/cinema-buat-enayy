import awards from "../../data/awards";
import { useNavigate } from "react-router-dom";

import "./Awards.css";

function Awards() {
  const navigate = useNavigate();

  return (
    <div className="awards-page">

      <h1>ANNUAL LOVE AWARDS 2026</h1>

      <div className="award-grid">

        {awards.map((award, index) => (
          <div
            className="award-card"
            key={index}
          >
            🏆

            <h3>{award}</h3>
          </div>
        ))}

      </div>

      <button
        onClick={() => navigate("/love100")}
      >
        NEXT →
      </button>

    </div>
  );
}

export default Awards;