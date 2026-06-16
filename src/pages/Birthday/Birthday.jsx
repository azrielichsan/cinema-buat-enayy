import { useEffect } from "react";
import "./Birthday.css";

function Birthday() {

  useEffect(() => {
    const audio = new Audio("/music/happy-birthday.mp3");
    audio.play().catch(() => {
      console.log("Autoplay blocked");
    });
  }, []);

  return (
    <div className="birthday-page">

      <div className="confetti"></div>

      <h1>🎉 HAPPY BIRTHDAY 🎉</h1>

      <h2>You are my favorite person in the world ❤️</h2>

      <p>Today is all about YOU</p>

    </div>
  );
}

export default Birthday;