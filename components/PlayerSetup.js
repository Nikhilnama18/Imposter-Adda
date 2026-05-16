"use client";

export default function PlayerSetup({ players, setPlayers }) {
  const addPlayer = () => {
    if (players.length < 10) {
      setPlayers([...players, `Player ${players.length + 1}`]);
    }
  };

  const removePlayer = (index) => {
    if (players.length > 2) {
      const newPlayers = [...players];
      newPlayers.splice(index, 1);
      setPlayers(newPlayers);
    }
  };

  const updatePlayerName = (index, newName) => {
    const newPlayers = [...players];
    newPlayers[index] = newName;
    setPlayers(newPlayers);
  };

  return (
    <div className="player-setup glass-panel">
      <h2 className="section-title">Who is playing?</h2>
      
      <div className="players-list">
        {players.map((player, index) => (
          <div key={index} className="player-input-group animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
            <span className="player-number">{index + 1}</span>
            <input
              type="text"
              value={player}
              onChange={(e) => updatePlayerName(index, e.target.value)}
              placeholder={`Player ${index + 1}`}
              className="player-input"
            />
            {players.length > 2 && (
              <button 
                onClick={() => removePlayer(index)}
                className="remove-btn"
                aria-label="Remove player"
              >
                &times;
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="setup-actions">
        <button 
          onClick={addPlayer} 
          disabled={players.length >= 10}
          className="btn-secondary add-player-btn"
        >
          + Add Player {players.length >= 10 ? '(Max 10)' : ''}
        </button>
      </div>

      <style jsx>{`
        .player-setup {
          padding: 1.5rem;
        }

        .section-title {
          margin-bottom: 1.5rem;
          font-size: 1.4rem;
          color: var(--accent-saffron);
          text-align: center;
        }

        .players-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          margin-bottom: 1.5rem;
        }

        .player-input-group {
          display: flex;
          align-items: center;
          gap: 10px;
          background: rgba(0, 0, 0, 0.2);
          padding: 8px 12px;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .player-number {
          background: var(--accent-blue);
          color: white;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: bold;
        }

        .player-input {
          flex: 1;
          background: transparent;
          border: none;
          color: white;
          font-size: 1rem;
          outline: none;
        }
        
        .player-input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .remove-btn {
          background: transparent;
          color: #ef4444;
          font-size: 1.5rem;
          line-height: 1;
          padding: 0 4px;
          opacity: 0.7;
        }

        .remove-btn:hover {
          opacity: 1;
          transform: scale(1.1);
        }

        .setup-actions {
          display: flex;
          justify-content: center;
        }

        .add-player-btn {
          width: 100%;
        }
      `}</style>
    </div>
  );
}
