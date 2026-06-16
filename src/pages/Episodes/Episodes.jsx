import { useNavigate } from "react-router-dom";
import timeline from "../../data/timeline";
import "./Episodes.css";

function Episodes() {
  const navigate = useNavigate();

  return (
    <div className="episodes-page">

      <h1>NOW SHOWING</h1>

      <div className="episode-grid">
        {timeline.map((episode) => (
          <div
            key={episode.id}
            className="episode-card"
            onClick={() => navigate("/gallery")}
          >
            <span>Episode {episode.id}</span>
            <h2>{episode.title}</h2>
            <p>{episode.description}</p>
            <div className="episode-cta">Tonton →</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Episodes;