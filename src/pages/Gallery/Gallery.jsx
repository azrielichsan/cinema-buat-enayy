import gallery from "../../data/gallery";
import { useNavigate } from "react-router-dom";
import "./Gallery.css";

function Gallery() {
  const navigate = useNavigate();

  return (
    <div className="gallery-page">

      <h1>NOW SHOWING</h1>
      <p>the most special person in my life</p>

      <div className="gallery-grid">

        {gallery.map((item) => (
          <div
            className="gallery-card"
            key={item.id}
            onClick={() => navigate(`/gallery/${item.id}`)}
          >
            <img src={item.image} alt={item.title} />

            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}

      </div>

      <button
        className="next-btn"
        onClick={() => navigate("/about-her")}
      >
        CONTINUE →
      </button>

    </div>
  );
}

export default Gallery;