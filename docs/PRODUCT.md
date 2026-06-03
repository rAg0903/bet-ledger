# Product specification — Bet Ledger

## Problem

Bettors lack a neutral tool to track performance without bookmaker bias, ads, or social noise.

## Target user

Recreational and semi-serious bettors who want clarity on P&L, patterns, and bankroll discipline.

## In scope

- Register **single** and **multiple** bets
- Auto-calculate combined odds and potential returns
- Settle bets (won / lost / void / cash-out)
- Dashboard: P&L, ROI, volume, open exposure
- Charts: P&L over time, monthly gains vs losses
- Rankings: teams with best / worst P&L
- Tables: top wins and losses (single vs multiple)
- Export CSV
- User settings: currency, odds format, void policy

## Out of scope (v1)

- Live odds feeds
- Bookmaker integrations
- Tips / community / tipsters
- Placing bets through the app
- Gamification that increases betting volume

## Differentiators

1. **Privacy-first** — local SQLite by default; no third-party analytics
2. **Discipline mode** — surface patterns after losing streaks (v1.1)
3. **Behavior tags** — correlate P&L with emotional / live / tipster bets (v2)
4. **Neutral positioning** — financial control tool, not a betting product

## Bet types

### Single

One selection, one odd, one stake.

### Multiple (accumulator)

All legs must win unless void policy adjusts odds. Combined decimal odds = product of leg odds.

## Settlement rules

| Status   | P&L                          |
|----------|------------------------------|
| WON      | `stake × (combinedOdds - 1)` |
| LOST     | `-stake`                     |
| VOID     | `0`                          |
| CASHOUT  | `actualReturn - stake`       |
| PENDING  | not counted in P&L           |

## Odds formats

Internal storage: **decimal**. UI supports decimal, fractional, American with conversion on input.

## Data model

See `prisma/schema.prisma` — `Bet`, `BetLeg`, `UserSettings`.

## UI routes (planned)

| Route        | Purpose              |
|--------------|----------------------|
| `/`          | Dashboard            |
| `/bets`      | Bet list + filters   |
| `/bets/new`  | Create bet           |
| `/bets/[id]` | Detail + settle      |
| `/analytics` | Charts & rankings    |
| `/settings`  | Preferences          |
