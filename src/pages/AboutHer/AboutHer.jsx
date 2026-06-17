import { useNavigate } from "react-router-dom";
import profile from "../../data/profile";

import "./AboutHer.css";

function AboutHer() {
  const navigate = useNavigate();

  return (
    <div className="about-page">

      <div className="about-left">
        <img
          src={profile.image}
          alt={profile.name}
        />
      </div>

      <div className="about-right">

        <h1>BIRTHDAY GIRL</h1>

        <ul>

          <li>
            <strong>Name:</strong>
            {profile.name}
          </li>

          <li>
            <strong>Role:</strong>
            {profile.role}
          </li>

          <li>
            <strong>Special Skill:</strong>
            {profile.skill}
          </li>

          <li>
            <strong>Hobby:</strong>
            {profile.Hobby}
          </li>

          <li>
            <strong>Super Power:</strong>
            {profile.power}
          </li>

          <li>
            <strong>Fun Fact:</strong>
            {profile.fact}
          </li>

        </ul>

        <button
          onClick={() => navigate("/letter")}
        >
          CONTINUE →
        </button>

      </div>

    </div>
  );
}

export default AboutHer;