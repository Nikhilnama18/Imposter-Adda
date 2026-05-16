# Imposter Who - Agent Guidelines

Welcome, AI Agent! If you are working on this project, please follow these guidelines and consult the architecture documentation before making changes.

## Project Overview
"Imposter Who - Indian Edition" is a mobile-first, Next.js Single Page Application (SPA). It is a party game where players pass a single device to view a secret word, with one player acting as the Imposter who only receives a vague hint. 

## Key Directories & Files
- **`app/page.js`**: Central state management for the entire application (`gameState`: setup -> playing -> result).
- **`app/globals.css`**: Contains all styling. **We use pure Vanilla CSS** with variables (`--accent-saffron`, `--accent-green`) and a glassmorphic aesthetic (`.glass-panel`). Do NOT add Tailwind classes unless explicitly requested by the user.
- **`components/`**: Modular UI components.
- **`data/topics.js`**: Contains all the game categories, words, and hints.
- **`docs/architecture.md`**: Contains detailed state structures and component documentation. **Always read this file before adding new features.**

## Styling Gotchas
- **Flickering Animations**: When adding delayed fade-in animations, ensure you use the `.animate-fade-in` class which utilizes `animation-fill-mode: both`. This prevents elements from flickering before their delay finishes.
- **Button Hiding**: Avoid using `opacity: 0` inline styles to hide buttons if they have CSS animations attached (they will conflict). Instead, use React conditional rendering (e.g., `{condition && <button>}`).

---

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
