"use client";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import GameHeader from '@/components/GameHeader';
import PlayerSetup from '@/components/PlayerSetup';
import TopicSelection from '@/components/TopicSelection';
import GamePlay from '@/components/GamePlay';
import GameResult from '@/components/GameResult';
import { topicsData, TopicWord } from '@/data/topics';

interface GameData {
  currentPlayerIndex: number;
  imposterIndex: number;
  secretWord: string;
  imposterHint: string;
  randomStartPlayer: string;
}

export default function Home() {
  const [gameState, setGameState] = useState<'setup' | 'playing' | 'result'>('setup');
  const [players, setPlayers] = useState<string[]>(['Player 1', 'Player 2']);
  
  const availableTopics = Object.keys(topicsData);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([availableTopics[0], availableTopics[1]]);
  
  const [gameData, setGameData] = useState<GameData>({
    currentPlayerIndex: 0,
    imposterIndex: 0,
    secretWord: '',
    imposterHint: '',
    randomStartPlayer: ''
  });

  const startGame = () => {
    // 1. Gather all words from selected topics
    let allWords: TopicWord[] = [];
    selectedTopics.forEach(topic => {
      allWords = [...allWords, ...topicsData[topic]];
    });

    // 2. Pick a random word
    const randomWordObj = allWords[Math.floor(Math.random() * allWords.length)];
    
    // 3. Pick a random hint for that word
    const randomHint = randomWordObj.hints[Math.floor(Math.random() * randomWordObj.hints.length)];

    // 4. Pick random imposter
    const randomImposterIndex = Math.floor(Math.random() * players.length);

    // 5. Pick random start player
    const randomStartIndex = Math.floor(Math.random() * players.length);

    setGameData({
      currentPlayerIndex: 0,
      imposterIndex: randomImposterIndex,
      secretWord: randomWordObj.word,
      imposterHint: randomHint,
      randomStartPlayer: players[randomStartIndex]
    });

    setGameState('playing');
  };

  const handleNextPlayer = () => {
    if (gameData.currentPlayerIndex < players.length - 1) {
      setGameData(prev => ({
        ...prev,
        currentPlayerIndex: prev.currentPlayerIndex + 1
      }));
    } else {
      setGameState('result');
    }
  };

  const playAgain = () => {
    setGameState('setup');
    setGameData({
      currentPlayerIndex: 0,
      imposterIndex: 0,
      secretWord: '',
      imposterHint: '',
      randomStartPlayer: ''
    });
  };

  return (
    <Layout>
      <GameHeader />
      
      {gameState === 'setup' && (
        <div className="setup-container animate-fade-in">
          <PlayerSetup players={players} setPlayers={setPlayers} />
          <TopicSelection 
            availableTopics={availableTopics}
            selectedTopics={selectedTopics}
            setSelectedTopics={setSelectedTopics}
            onStartGame={startGame}
          />
        </div>
      )}

      {gameState === 'playing' && (
        <div className="playing-container animate-fade-in">
          <GamePlay 
            currentPlayerName={players[gameData.currentPlayerIndex]}
            isImposter={gameData.currentPlayerIndex === gameData.imposterIndex}
            secretWord={gameData.secretWord}
            imposterHint={gameData.imposterHint}
            onNextPlayer={handleNextPlayer}
            isLastPlayer={gameData.currentPlayerIndex === players.length - 1}
          />
        </div>
      )}

      {gameState === 'result' && (
        <div className="result-container animate-fade-in">
          <GameResult 
            randomStartPlayer={gameData.randomStartPlayer}
            imposterName={players[gameData.imposterIndex]}
            onPlayAgain={playAgain}
          />
        </div>
      )}

      <style jsx>{`
        .setup-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .playing-container, .result-container {
          display: flex;
          flex-direction: column;
          flex: 1;
          justify-content: center;
        }
      `}</style>
    </Layout>
  );
}
