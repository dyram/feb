import { useRef, useState, useEffect } from "react";
import "./QuestionPage.css";

function QuestionPage({ onYes }) {
  const noButtonRef = useRef(null);
  const [offset, setOffset] = useState(0); // Track offset (horizontal or vertical)
  const [moveRight, setMoveRight] = useState(true); // Track direction
  const [isMobile, setIsMobile] = useState(false); // Track if mobile device

  // Check screen width on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle click - move button left/right (desktop) or top/bottom (mobile)
  const handleNoClick = (e) => {
    e.preventDefault();

    if (moveRight) {
      // First click: move 200px right (desktop) or down (mobile)
      setOffset(200);
      setMoveRight(false);
    } else {
      // Toggle between positions
      setOffset((prevOffset) => (prevOffset > 0 ? -500 : 200));
    }
  };

  // Handle touch for mobile
  const handleNoTouch = (e) => {
    e.preventDefault();
    handleNoClick(e);
  };

  return (
    <div className="question-page">
      {/* Background floating hearts */}
      <div className="floating-heart">💗</div>
      <div className="floating-heart">💕</div>
      <div className="floating-heart">💖</div>
      <div className="floating-heart">💝</div>
      <div className="floating-heart">💗</div>
      <div className="floating-heart">💕</div>
      <div className="floating-heart">💖</div>
      <div className="floating-heart">💝</div>
      <div className="floating-heart">💗</div>

      <div className="question-container">
        <div className="heart-decoration">💝</div>

        <h1 className="question-text">Hey Sophie, Will you be my Valentine?</h1>

        <div className="buttons-container">
          <button className="yes-button" onClick={onYes}>
            💖 Yes
          </button>

          {/* 
            No button behavior:
            DESKTOP (width > 768px):
            - First click: moves 200px to the right
            - Second click: moves 500px to the left
            - Third click: moves 200px to the right
            - Continues alternating left/right
            
            MOBILE (width <= 768px):
            - First click: moves 200px down
            - Second click: moves 500px up
            - Third click: moves 200px down
            - Continues alternating up/down
            
            Uses CSS transform: translateX (desktop) or translateY (mobile)
            Stays in relative position (doesn't leave document flow)
          */}
          <button
            ref={noButtonRef}
            className="no-button"
            onClick={handleNoClick}
            onTouchStart={handleNoTouch}
            style={{
              transform: isMobile
                ? `translateY(${offset}px)`
                : `translateX(${offset}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            😈 No
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
