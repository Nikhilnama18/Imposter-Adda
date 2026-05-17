"use client";
import { useState } from 'react';

export default function GameHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <h1 className="title">
            <span className="text-saffron">Imposter</span> Adda
          </h1>
          <p className="subtitle">Find the fake one in your gang.</p>
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
                <li><strong>Gather the Gang:</strong> Add your friends (3-10 players) and pick a topic to get started.</li>
                <li><strong>Pass the Phone:</strong> Hand the device around so each player can secretly view their card.</li>
                <li><strong>The Twist:</strong> Most of you will see the exact same secret word, but one player is the Imposter and only gets a hint!</li>
                <li><strong>Drop a Clue:</strong> Once everyone has seen their card, take turns saying just <i>one word / sentence</i> related to the secret to prove you aren't the fake.</li>
                <li><strong>Catch the Imposter:</strong> Discuss the clues and vote out the fake! Meanwhile, the Imposter must try to blend in and figure out the real word.</li>
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
          letter-spacing: 0.5px;
          font-style: italic;
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
          color: var(--accent-green);
        }
      `}</style>
    </>
  );
}
