"use client";
import { useState } from 'react';

export default function GameHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <h1 className="title">
            <span className="text-saffron">Imposter</span> Who
          </h1>
          <p className="subtitle">Indian Edition 🇮🇳</p>
        </div>
        <button
          className="btn-secondary how-to-play-btn"
          onClick={() => setIsModalOpen(true)}
        >
          How to Play
        </button>
      </header>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content glass-panel animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>How to Play</h2>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <ol>
                <li><strong>Setup:</strong> Enter player names (2-10 players) and select at least 3 topics.</li>
                <li><strong>The Secret:</strong> All players except one (Imposter) will see the same secret word.</li>
                <li><strong>The Imposter:</strong> The Imposter will see a hint related to the secret word instead.</li>
                <li><strong>Viewing Phase:</strong> Pass the device around. Each player clicks to view their card secretly, then clicks "Next Player".</li>
                <li><strong>Discussion Phase:</strong> Once everyone has viewed their card, the game tells you who starts. Players may choose to speak a single clue word or talk around the secret word without giving it away.</li>
                <li><strong>The Goal:</strong> Regular players try to figure out who the Imposter is without giving away the secret word. The Imposter tries to blend in and guess what the word might be based on others' clues!</li>
                <li><strong>Voting:</strong> Vote on who the Imposter is. Finally, click "Reveal Imposter" to see who it was!</li>
              </ol>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--card-border);
        }
        
        .logo-container {
          display: flex;
          flex-direction: column;
        }

        .title {
          font-size: 2.2rem;
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.5px;
        }

        .text-saffron {
          color: var(--accent-saffron);
        }

        .subtitle {
          font-size: 0.9rem;
          color: var(--accent-green);
          font-weight: 500;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .how-to-play-btn {
          font-size: 0.85rem;
          padding: 8px 16px;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .modal-content {
          max-width: 500px;
          width: 100%;
          background: var(--bg-color);
          padding: 2rem;
          border: 1px solid var(--card-border);
          position: relative;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .modal-header h2 {
          color: var(--accent-saffron);
          font-size: 1.8rem;
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--text-color);
          font-size: 2rem;
          line-height: 1;
          opacity: 0.7;
        }

        .close-btn:hover {
          opacity: 1;
        }

        .modal-body ol {
          padding-left: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .modal-body li {
          line-height: 1.5;
          font-size: 0.95rem;
          color: #cbd5e1;
        }

        .modal-body strong {
          color: white;
        }
      `}</style>
    </>
  );
}
