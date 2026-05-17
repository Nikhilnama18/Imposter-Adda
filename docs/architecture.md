# Imposter Adda - Architecture

## Core Flow
- **Party Game Style**: Designed for mobile pass-and-play.
- **State Management**: React state in `app/page.js` since it's a SPA.
  - `gameState`: Enum string ('setup', 'playing', 'result')
  - `players`: Array of strings
  - `topics`: Array of topic strings selected.
  - `currentPlayerIndex`: Integer, tracks who is viewing the card right now.
  - `imposterIndex`: Integer, randomly selected player index.
  - `selectedWord`: String, the word selected for the round.
  - `currentHints`: Array of hints for the selected word, one will be randomly shown to the Imposter.

## Data Structure
Each topic contains multiple words. Each word has an array of hints.
```javascript
const topicsData = {
  "Bollywood Movies": [
    { word: "Sholay", hints: ["Classic action film", "Famous villain named Gabbar", "Coin toss friendship"] },
    // ...
  ]
}
```

## Component Tree
- `Layout`: Main container handling viewport and basic global UI frame.
- `GameHeader`: Shows title and the "How to Play" modal trigger.
- `PlayerSetup`: Component to add/remove players.
- `TopicSelection`: Component to toggle topics. Starts the game.
- `GamePlay`: 
    - Shows current player turn.
    - 3D Flippable Card component.
    - Click to flip (shows word or imposter hint), auto flips back after 5s.
    - Next Player button.
- `GameResult`: Shows "Start game with [Random Player]" and "Reveal Imposter" button.

## Styling (Decisions)
- **CSS**: Vanilla CSS with CSS Modules.
- **Theme**: Dark theme (Background `#0f172a`, Text `#f8fafc`).
- **Accents**: Saffron (`#FF9933`), Green (`#138808`), Cyan glowing buttons.
- **Animations**: CSS transitions/animations (e.g., `transform: rotateY(180deg)`).
