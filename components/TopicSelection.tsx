"use client";

interface TopicSelectionProps {
  availableTopics: string[];
  selectedTopics: string[];
  setSelectedTopics: React.Dispatch<React.SetStateAction<string[]>>;
  onStartGame: () => void;
}

export default function TopicSelection({ availableTopics, selectedTopics, setSelectedTopics, onStartGame }: TopicSelectionProps) {
  const toggleTopic = (topic: string) => {
    if (selectedTopics.includes(topic)) {
      setSelectedTopics(selectedTopics.filter((t: string) => t !== topic));
    } else {
      setSelectedTopics([...selectedTopics, topic]);
    }
  };

  const isStartDisabled = selectedTopics.length === 0;

  return (
    <div className="topic-selection glass-panel">
      <h2 className="section-title">Select Topics</h2>
      <p className="subtitle">Choose at least 1 topic ({selectedTopics.length} selected)</p>

      <div className="topics-grid">
        {availableTopics.map((topic, index) => {
          const isSelected = selectedTopics.includes(topic);
          return (
            <button
              key={topic}
              className={`topic-btn ${isSelected ? 'selected' : ''}`}
              onClick={() => toggleTopic(topic)}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {topic.replace(' ', '\n')}
            </button>
          );
        })}
      </div>

      <div className="action-container">
        <button 
          className="btn-primary start-btn"
          onClick={onStartGame}
          disabled={isStartDisabled}
        >
          {isStartDisabled ? 'Select more topics' : 'Start Game'}
        </button>
      </div>

      <style jsx>{`
        .topic-selection {
          padding: 1.5rem;
        }

        .section-title {
          font-size: 1.4rem;
          color: var(--accent-green);
          text-align: center;
          margin-bottom: 0.2rem;
        }

        .subtitle {
          text-align: center;
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 1.5rem;
        }

        .topics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 10px;
          margin-bottom: 2rem;
        }

        .topic-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 8px;
          border-radius: 12px;
          color: var(--text-color);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
          animation: fadeIn 0.4s ease-out forwards;
          opacity: 0;
          white-space: pre-line;
        }

        .topic-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .topic-btn.selected {
          background: rgba(19, 136, 8, 0.2);
          border-color: var(--accent-green);
          color: white;
          box-shadow: 0 0 10px rgba(19, 136, 8, 0.3);
        }

        .action-container {
          display: flex;
          justify-content: center;
        }

        .start-btn {
          width: 100%;
          max-width: 300px;
          padding: 16px 24px;
          font-size: 1.2rem;
        }
      `}</style>
    </div>
  );
}
