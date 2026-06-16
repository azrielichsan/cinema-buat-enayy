import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LOGO */}
        <div
          className="logo"
          onClick={() => navigate("/home")}
        >
          THE STORY OF ENAYY
        </div>

        {/* MENU */}
        <div className="nav-links">

          <button onClick={() => navigate("/home")}>
            Home
          </button>

          <button onClick={() => navigate("/gallery")}>
            Gallery
          </button>

          <button onClick={() => navigate("/about-her")}>
            About
          </button>
          
          <button
            className="special-btn"
            onClick={() => navigate("/letter")}
          >
            💌 Letter
          </button>

        </div>
      </div>  
    </nav>
  );
}

export default Navbar;