# Grid Game

An interactive 3x3 grid game built with Next.js and Tailwind CSS.

🎮 **[Play Live Demo](https://ripple-grid-game.vercel.app/)**

## Features

- 3x3 grid with dynamic number increments
- Ripple effects based on divisibility rules
- Locked state when boxes reach 15+
- Responsive design with smooth animations

## Game Rules

1. **Click Interaction**: Clicking a box increments its number by 1
2. **Ripple Rule A**: When divisible by 3, decrement the right neighbor by 1
3. **Ripple Rule B**: When divisible by 5, increment the below neighbor by 2
4. **Locked State**: Boxes at 15+ turn red and become unclickable

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to play.

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/grid-game)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com).
