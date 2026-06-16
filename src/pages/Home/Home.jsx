import { useNavigate } from "react-router-dom";

import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-subtitle">
            A SPECIAL CINEMATIC EXPERIENCE
          </span>

          <h1 className="hero-title">
            THE STORY
            <br />
            OF ENAYY
          </h1>

          <p className="hero-description">
            Happy birthday, my love. I am so incredibly grateful to the universe that you were born. Every smile, every laugh, every moment with you
            became the most beautiful chapter of my life. 
        
          </p>

          <div className="hero-buttons">

            <button
              className="watch-btn"
              onClick={() => navigate("/opening-movie")}
            >
              ▶ Watch Movie
            </button>

            <button
              className="surprise-btn"
              onClick={() => navigate("/letter")}
            >
              🎁 Birthday Surprise
            </button>

          </div>

        </div>

        <div className="hero-right">

          <div className="image-wrapper">
            <img
              src="/images/profile/fotoprofile.png"
              alt="Birthday Girl"
            />
          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;