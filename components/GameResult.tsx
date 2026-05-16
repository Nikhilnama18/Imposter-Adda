"use client";
import { useState } from 'react';

interface GameResultProps {
  randomStartPlayer: string;
  imposterName: string;
  onPlayAgain: () => void;
}

export default function GameResult({ randomStartPlayer, imposterName, onPlayAgain }: GameResultProps) {
  const [isImposterRevealed, setIsImposterRevealed] = useState(false);

  return (
    <div className="game-result">
      <div className="start-player-card glass-panel animate-fade-in">
        <h2 className="title">Game Starts With</h2>
        <div className="player-name-highlight">
          {randomStartPlayer}
        </div>
        <p className="instruction">
          Say a word or sentence related to the secret! Then the player next to you goes.
        </p>
      </div>

      <div className="reveal-section animate-fade-in" style={{ animationDelay: '0.3s' }}>
        {!isImposterRevealed ? (
          <button
            className="btn-danger reveal-btn"
            onClick={() => setIsImposterRevealed(true)}
          >
            Reveal Imposter
          </button>
        ) : (
          <div className="imposter-reveal-card glass-panel">
            <h2 className="title">The Imposter is</h2>
            <div className="imposter-name-highlight">
              {imposterName}
            </div>
          </div>
        )}
      </div>

      <div className="action-container animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <button className="btn-secondary play-again-btn" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>

      <style jsx>{`
        .game-result {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
        }

        .start-player-card, .imposter-reveal-card {
          padding: 2rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .title {
          font-size: 1.2rem;
          color: #cbd5e1;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1rem;
        }

        .player-name-highlight {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--accent-saffron);
          margin-bottom: 1rem;
          text-shadow: 0 0 20px rgba(255, 153, 51, 0.4);
        }

        .instruction {
          color: white;
          font-size: 1rem;
          line-height: 1.5;
        }

        .reveal-section {
          display: flex;
          justify-content: center;
          min-height: 150px;
        }

        .reveal-btn {
          padding: 16px 32px;
          font-size: 1.3rem;
          align-self: center;
        }

        .imposter-reveal-card {
          width: 100%;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(0, 0, 0, 0.3));
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        .imposter-name-highlight {
          font-size: 3rem;
          font-weight: 800;
          color: #ef4444;
          text-shadow: 0 0 30px rgba(239, 68, 68, 0.5);
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }

        @keyframes popIn {
          0% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        .action-container {
          display: flex;
          justify-content: center;
          margin-top: 2rem;
        }

        .play-again-btn {
          width: 100%;
          max-width: 300px;
          padding: 14px;
        }
      `}</style>
    </div>
  );
}
