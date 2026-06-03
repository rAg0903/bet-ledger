#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

echo "→ Bet Ledger setup"

if ! command -v node >/dev/null 2>&1; then
  echo "Node.js not found. Install Node 20+ first:"
  echo "  brew install node"
  echo "  # or https://nodejs.org/"
  exit 1
fi

echo "→ Node $(node -v)"
echo "→ Installing dependencies..."
npm install

if [[ ! -f .env ]]; then
  cp .env.example .env
  echo "→ Created .env from .env.example"
fi

echo "→ Running Prisma migrations..."
npx prisma migrate dev --name init

echo ""
echo "Done. Run: npm run dev"
echo ""
echo "To create a private GitHub repo:"
echo "  gh auth login"
echo "  gh repo create bet-ledger --private --source=. --remote=origin --push"
