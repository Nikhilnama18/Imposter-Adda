# Imposter Adda - Indian Edition

Imposter Adda is a mobile-first party game built for pass-and-play sessions on a single device. All players except one receive the same secret word, while one player, the Imposter, only gets a hint and has to blend in during the discussion.

Live site: [imposter-adda.vercel.app](https://imposter-adda.vercel.app/)

## Built By

Built by **Nikhil Nama**.

- X (Twitter): [@Nick_1807](https://x.com/Nick_1807)
- LinkedIn: [nikhilnama18](https://www.linkedin.com/in/nikhilnama18/)

## About the Game

Imposter Adda is inspired by social deduction party games, but shaped around Indian pop culture and shared references. Players add their names, choose one or more topics, and pass the phone so each person can privately reveal their role.

After everyone has seen their card:

1. Each player talks about the secret word without actually giving away the word
2. The Imposter tries to act natural and guess the real word from everyone else's clues.
3. The group discusses, votes, and tries to identify the fake one.

The game is designed to be quick to start, easy to explain, and fun in small group settings.

## Features

- Mobile-first single-page experience designed for one-device party play
- Support for 3 to 10 players
- Multiple topic selection before each round
- Random secret word selection from Indian-themed categories
- Random Imposter assignment for every game
- Hint-based Imposter role instead of showing the actual word
- Flip-card reveal flow with a timed auto-hide interaction
- Randomized starting player for the discussion round
- Clean replay loop for back-to-back games
- Built-in "How to Play" guide for first-time players

## Topics Included

The game currently includes Indian pop-culture and familiar group-play categories such as:

- Cricket
- Bollywood Movies
- Tollywood Movies
- Sandalwood Movies
- Kollywood Movies
- Mollywood Movies
- Brands
- Festivals

Each topic contains a pool of words and short hints tailored for the Imposter.

## Tech Stack

- [Next.js 16](https://nextjs.org/) with the App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- Pure vanilla CSS with a custom glassmorphism-inspired UI
- [Vercel Analytics](https://vercel.com/analytics)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)

## Project Structure

```text
app/
  layout.tsx        # Root layout, metadata, analytics, speed insights
  page.tsx          # Main SPA game flow and state management
  globals.css       # Global styles, theme variables, utility classes

components/
  GameHeader.tsx    # Title and how-to-play modal
  PlayerSetup.tsx   # Player add/remove/edit flow
  TopicSelection.tsx# Topic picker and game start
  GamePlay.tsx      # Secret reveal card and player turn flow
  GameResult.tsx    # Start player reveal, imposter reveal, replay
  Layout.tsx        # Shared page shell

data/
  topics.ts         # Game categories, words, and imposter hints

docs/
  architecture.md   # Internal architecture notes
```

## How It Works

The app runs as a client-side single-page experience with three main states:

- `setup` for player names and topic selection
- `playing` for private role reveals
- `result` for discussion kickoff and final Imposter reveal

When a round starts, the app:

1. Combines all words from the selected topics.
2. Randomly picks one secret word.
3. Randomly picks one hint from that word's hint pool.
4. Randomly assigns the Imposter.
5. Randomly chooses who begins the discussion.

## Local Development

### Prerequisites

- Node.js
- npm

### Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Other Scripts

```bash
npm run build
npm run start
npm run lint
```

## Deployment

The project is deployed on [Vercel](https://vercel.com/).

- Production URL: [https://imposter-adda.vercel.app/](https://imposter-adda.vercel.app/)
- Hosting platform: [Vercel](https://vercel.com/)

## Why This Project Stands Out

Imposter Adda focuses on a culturally familiar experience for Indian friend groups, pairing recognizable topics with a polished mobile UI and a simple pass-the-phone flow. It keeps the rules approachable while still creating the tension and humor that make social deduction games fun.
