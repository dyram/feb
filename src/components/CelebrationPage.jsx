import { useEffect, useState } from "react";
import "./CelebrationPage.css";

function CelebrationPage() {
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    // Generate confetti pieces
    const pieces = [];
    for (let i = 0; i < 50; i++) {
      pieces.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 3,
        animationDuration: 3 + Math.random() * 2,
      });
    }
    setConfetti(pieces);
  }, []);

  return (
    <div className="celebration-page">
      {/* Confetti effect */}
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="confetti"
          style={{
            left: `${piece.left}%`,
            animationDelay: `${piece.animationDelay}s`,
            animationDuration: `${piece.animationDuration}s`,
          }}
        >
          {["💕", "💖", "💗", "💝", "💘", "❤️"][Math.floor(Math.random() * 6)]}
        </div>
      ))}

      <div className="celebration-container">
        <div className="success-icon">💕</div>

        <h1 className="celebration-text">Yay! You are my Valentine 💕</h1>

        <div className="hearts-row">
          <span className="bouncing-heart">💖</span>
          <span className="bouncing-heart">💗</span>
          <span className="bouncing-heart">💝</span>
        </div>

        <p className="celebration-message">
          I was hoping you'd say that! You just made me the happiest man on
          earth. ❤️
        </p>
      </div>
    </div>
  );
}

export default CelebrationPage;
