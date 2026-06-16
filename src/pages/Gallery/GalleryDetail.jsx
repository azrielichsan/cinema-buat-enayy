import { useParams, useNavigate } from "react-router-dom";
import gallery from "../../data/gallery";
import "./GalleryDetail.css";

function GalleryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = gallery.find((g) => g.id === parseInt(id));

  if (!item) {
    return (
      <div className="detail-page center-content">
        <h2>Not Found</h2>
        <button className="back-btn" onClick={() => navigate("/gallery")}>Back</button>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <div className="detail-wrapper">
        
        {/* SISI KIRI: BINGKAI FOTO */}
        <div className="img-container">
          <img src={item.image} alt={item.title} />
          <div className="cinema-overlay"></div>
        </div>

        {/* SISI KANAN: KONTEN BIOSKOP */}
        <div className="detail-content">
          <div className="meta-tags">
            <span className="badge-date"> {item.date || "Masa Kecil"}</span>
          </div>

          <h1 className="movie-title">{item.title}</h1>
          
          <div className="divider-line"></div>

          <p className="movie-story">{item.description}</p>

          <div className="action-area">
            <button className="back-btn" onClick={() => navigate("/gallery")}>
              <span className="icon">←</span> Back to Gallery
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GalleryDetail;