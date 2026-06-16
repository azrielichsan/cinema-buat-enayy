import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./FinalSurprise.css";

function FinalSurprise() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  
  // State untuk mengatur transisi dari teks intro ke video
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // 1. Tampilkan teks intro dulu selama 3 detik, lalu munculkan video
    const introTimer = setTimeout(() => {
      setShowVideo(true);
    }, 3000);

    return () => clearTimeout(introTimer);
  }, []);

  // 2. Fungsi yang otomatis jalan saat video kamu SELESAI diputar
  const handleVideoEnded = () => {
    navigate("/birthday"); // Otomatis pindah ke halaman puisi/ulang tahun
  };

  return (
    <div className="final-page">
      {!showVideo ? (
        /* INTRO TEKS SEBELUM VIDEO MUNCUL */
        <div className="glow-text fade-out-anim">
          <h1>ONE LAST SURPRISE</h1>
          <p>Something special is about to begin...</p>
        </div>
      ) : (
        /* PEMUTAR VIDEO UTAMA */
        <div className="video-container fade-in-anim">
          <video
            ref={videoRef}
            src="/videos/surprise.mp4" /* Path video kamu di folder public */
            autoPlay /* Langsung putar otomatis */
            controls /* Biar Nayla bisa pause/atur volume kalau kekecilan */
            onEnded={handleVideoEnded} /* Trigger saat video habis */
            className="cinema-video"
          />
        </div>
      )}
    </div>
  );
}

export default FinalSurprise;