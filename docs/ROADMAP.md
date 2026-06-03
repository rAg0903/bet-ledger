# Roadmap

## Phase 0 — Foundation ✅ (current)

- [x] Repository bootstrap
- [x] Next.js + TypeScript + Tailwind scaffold
- [x] Prisma schema (Bet, BetLeg, UserSettings)
- [x] Core betting math (`src/lib/betting.ts`)
- [x] Product documentation

## Phase 1 — MVP (4–6 weeks)

- [ ] Bet creation form (single + multiple, live odds preview)
- [ ] Bet list with status filters
- [ ] Settle bet flow
- [ ] Dashboard with real aggregated stats
- [ ] Line chart: cumulative P&L
- [ ] Bar chart: monthly volume vs P&L
- [ ] Team ranking tables (min. 3 bets threshold)
- [ ] CSV export
- [ ] PWA manifest + offline shell

## Phase 2 — Insights (v1.1)

- [ ] Bankroll tracking (deposits / withdrawals)
- [ ] Stake as % of bankroll
- [ ] Drawdown metric
- [ ] Discipline alerts (losing streak, oversize stake)
- [ ] Filters by sport, market, odd range

## Phase 3 — Launch prep

- [ ] Auth (optional multi-device sync)
- [ ] Postgres migration path
- [ ] Privacy policy + responsible gambling disclaimer
- [ ] Public repo / license decision
- [ ] Beta with 5–10 users

## Phase 4 — Differentiation (v2)

- [ ] Behavior tags
- [ ] Counterfactual simulator (multiples vs singles)
- [ ] Manual closing-line field (CLV)
- [ ] Natural-language weekly summary

## Success metrics (personal → product)

| Stage      | Signal                                      |
|------------|---------------------------------------------|
| Personal   | You use it for every bet for 30 days        |
| Friends    | 3 people ask to try it                      |
| Beta       | Weekly retention > 40%                      |
| Launch     | Users report clearer P&L understanding      |

## GitHub workflow

- `main` — stable
- Feature branches → PR (even solo — keeps history clean)
- Issues for each Phase 1 item before coding

## Before going public

- Choose license (MIT vs proprietary)
- Add disclaimer: tool for tracking, not financial advice
- Review GDPR if storing user data in cloud
