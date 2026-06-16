import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./OpeningMovie.css";

function OpeningMovie() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/trailer");
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="opening-page">

      <div className="curtain-left"></div>
      <div className="curtain-right"></div>

      <div className="opening-content">

        <h3>AZRIEL PICTURES</h3>

        <span>PRESENTS</span>

        <h1>THE STORY OF ENAYY</h1>

        <p>
          Based on a true story❤️
        </p>

      </div>

    </div>
  );
}

export default OpeningMovie;