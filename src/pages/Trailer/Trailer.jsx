import { useNavigate } from "react-router-dom";

import "./Trailer.css";

function Trailer() {
  const navigate = useNavigate();

  return (
    <div className="trailer-page">

      <div className="trailer-box">

        <span>OFFICIAL TRAILER</span>

        <h1>HAPPY BIRTDAY LOVE</h1>

        <p>
          Every chapter with you
          became my favorite memory.
        </p>

        <video
          loop
          controls
        >
          <source src="/videos/trailer.mp4" type="video/mp4" />
        </video>

        <button
          onClick={() => navigate("/gallery")}
        >
          CONTINUE
        </button>

      </div>

    </div>
  );
}

export default Trailer;