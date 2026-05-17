"use client";
import { useState, useEffect, useRef } from 'react';

interface GamePlayProps {
  currentPlayerName: string;
  isImposter: boolean;
  secretWord: string;
  imposterHint: string;
  onNextPlayer: () => void;
  isLastPlayer: boolean;
}

export default function GamePlay({ currentPlayerName, isImposter, secretWord, imposterHint, onNextPlayer, isLastPlayer }: GamePlayProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasViewed, setHasViewed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset state when player changes
    setIsFlipped(false);
    setHasViewed(false);
    setTimeLeft(5);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [currentPlayerName]);

  const handleCardClick = () => {
    if (hasViewed) return; // Can only view once

    setIsFlipped(true);
    setHasViewed(true);
    setTimeLeft(5);

    // Start countdown
    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    timeoutRef.current = setTimeout(() => {
      setIsFlipped(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }, 5000);
  };

  const textToShow = isImposter ? imposterHint : secretWord;
  const labelToShow = isImposter ? "Your Hint" : "Secret Word";

  return (
    <div className="game-play">
      <h2 className="turn-indicator animate-fade-in">
        <span className="text-saffron">{currentPlayerName}&apos;s</span> Turn
      </h2>
      <p className="instruction">Tap the card to reveal your secret.</p>

      <div className="card-container" onClick={handleCardClick}>
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>

          <div className="flip-card-front glass-panel">
            <div className="card-pattern">
              <span>?</span>
            </div>
            <p className="tap-text">{hasViewed ? "Already viewed" : "Tap to reveal"}</p>
          </div>

          <div className={`flip-card-back glass-panel ${isImposter ? 'imposter-bg' : 'citizen-bg'}`}>
            <span className="card-label">{labelToShow}</span>
            <h3 className="card-word">{textToShow}</h3>
            {isImposter && <p className="imposter-warning">You are the Imposter!</p>}
            <p className="timer-text">Hiding in {timeLeft} sec...</p>
          </div>

        </div>
      </div>

      <div className="action-container" style={{ marginTop: '1rem', minHeight: '60px' }}>
        {hasViewed && !isFlipped && (
          <button className="btn-primary next-btn animate-fade-in" onClick={onNextPlayer}>
            {isLastPlayer ? 'Start Discussion' : 'Next Player'}
          </button>
        )}
      </div>

      <style jsx>{`
        .game-play {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .turn-indicator {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .text-saffron {
          color: var(--accent-saffron);
        }

        .instruction {
          color: #94a3b8;
          margin-bottom: 2rem;
        }

        .card-container {
          perspective: 1000px;
          width: 100%;
          max-width: 320px;
          height: 420px;
          margin-bottom: 2rem;
          cursor: pointer;
        }

        .flip-card {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.6s cubic-bezier(0.4, 0.2, 0.2, 1);
          transform-style: preserve-3d;
        }

        .flip-card.flipped {
          transform: rotateY(180deg);
        }

        .flip-card-front, .flip-card-back {
          width: 100%;
          height: 100%;
          position: absolute;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          border-radius: 20px;
        }

        .flip-card-front {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
          border: 2px solid var(--accent-blue);
        }

        .card-pattern {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          color: var(--accent-saffron);
          margin-bottom: 2rem;
        }

        .tap-text {
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .citizen-bg {
          background: linear-gradient(135deg, rgba(19, 136, 8, 0.2), rgba(0, 0, 0, 0.4));
          border: 2px solid var(--accent-green);
        }

        .imposter-bg {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(0, 0, 0, 0.4));
          border: 2px solid #ef4444;
        }

        .card-label {
          font-size: 1rem;
          color: #cbd5e1;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
        }

        .card-word {
          font-size: 2.2rem;
          font-weight: 800;
          text-align: center;
          color: white;
          margin-bottom: 2rem;
        }

        .imposter-warning {
          color: #ef4444;
          font-weight: bold;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .timer-text {
          position: absolute;
          bottom: 20px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
        }

        .action-container {
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .next-btn {
          width: 100%;
          max-width: 300px;
          padding: 16px 24px;
        }
      `}</style>
    </div>
  );
}
