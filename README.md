# Bet Ledger

Personal betting tracker focused on **control, transparency, and performance analysis** — not tips, promotions, or operator integrations.

> Track simple and multiple bets, understand profit/loss over time, and build healthier betting habits.

## Vision

Most betting apps are tied to bookmakers or reduce tracking to a spreadsheet. Bet Ledger is built to help people **see the real picture**: what they wager, what they win or lose, and where patterns emerge — without nudging them to bet more.

## Status

Early development — private repository, MVP in progress.

## Stack

- **Next.js** (App Router) + TypeScript
- **Tailwind CSS**
- **Prisma** + **SQLite** (local-first; easy to migrate to Postgres later)
- **PWA-ready** (installable web app)

## Getting started

### Prerequisites

- Node.js 20+
- npm
- [GitHub CLI](https://cli.github.com/) (`gh`) for remote setup

### Install

```bash
cd ~/Projects/bet-ledger
npm install
cp .env.example .env
npx prisma migrate dev --name init
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Connect to GitHub (private repo)

If you haven't authenticated:

```bash
gh auth login
```

Create and push the remote:

```bash
gh repo create bet-ledger --private --source=. --remote=origin --push
```

## Project structure

```
src/
  app/           # Next.js routes & UI
  lib/           # Domain logic (odds, P&L calculations)
  components/    # Reusable UI
prisma/
  schema.prisma  # Data model
docs/
  PRODUCT.md     # Feature spec
  ROADMAP.md     # Phased delivery plan
```

## Core calculations

- **Simple bet:** potential return = `stake × decimalOdds`; net profit if won = `stake × (decimalOdds - 1)`
- **Multiple bet:** combined odds = product of leg decimal odds (void legs → 1.0)
- **P&L:** settled bets only; lost = `-stake`

## License

Private — all rights reserved until a public license is chosen before launch.
