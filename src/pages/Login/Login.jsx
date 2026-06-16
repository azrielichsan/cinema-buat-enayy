import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PASSWORD, login } from "../../utils/auth";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (password === PASSWORD) {
      login();
      navigate("/home");
    } else {
      alert("Password Salah wleee");
    }
  };

  return (
    <div className="login-page">

      <div className="overlay"></div>

      <div className="login-card">

        <p className="login-subtitle">
          A PRIVATE CINEMA
        </p>

        <h1>
          THE STORY
          <br />
          OF Nailah Nur Aziizah
        </h1>

        <span>
          Enter the password to watch nanay movie
        </span>

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>
          ENTER CINEMA
        </button>

      </div>

    </div>
  );
}

export default Login;