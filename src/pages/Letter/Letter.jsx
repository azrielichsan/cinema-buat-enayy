import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "./Letter.css";

function Letter() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const bottomRef = useRef(null);

  const titleText = "Happy Birthday Love";

  const poemText = `I don’t really know how to put everything into words,
but I’m just so incredibly grateful that you exist in my life.

And perhaps, in the eyes of others, you are simply you.
But in my eyes? You are truly a masterpiece,
one of God’s most beautiful creations.
Every time I look at you, I just find myself in awe.

I don’t see only your physical beauty,
I see the childlike innocence in you that is unbelievably adorable,
your playful and charming little habits,
and the way you think and carry yourself with such maturity.

Thank you for being you.
Thank you for staying.

I hope today, on your birthday, reminds you
how much you mean to me, and how special you are.
Because all of that beauty...
so rare, so extraordinary,
and somehow, God chose to pack all of that perfection
into a single, beautiful soul.

A soul that has a name...
Nailah Nur Azizah.`;

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(() => poemText.slice(0, index));
      index++;

      // TEPAT DI SINI KUNCINYA: Diganti jadi poemText.length agar sinkron dengan tombol
      if (index > poemText.length) {
        clearInterval(interval);
      }
    }, 120); 

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [text]);

  return (
    <div className="letter-page">
      <div className="letter-box">
        
        <h1 className="movie-poster-title">{titleText}</h1>
        <div className="title-divider"></div>

        <pre className="typing-text">{text}</pre>

        <div ref={bottomRef} style={{ height: "1px" }} />

        {/* Tombol dijamin langsung muncul begitu ketikan nama "Nailah Nur Azizah." selesai */}
        {text.length === poemText.length && (
          <button onClick={() => navigate("/final-surprise")}>
            Continue →
          </button>
        )}
      </div>
    </div>
  );
}

export default Letter;