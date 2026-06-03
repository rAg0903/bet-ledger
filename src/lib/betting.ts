export type OddsFormat = "DECIMAL" | "FRACTIONAL" | "AMERICAN";

/** Convert any supported odds format to decimal odds. */
export function toDecimalOdds(value: number, format: OddsFormat): number {
  switch (format) {
    case "DECIMAL":
      return value;
    case "FRACTIONAL":
      // value is numerator/denominator passed as decimal ratio + 1, e.g. 6/4 → pass as 2.5
      return value;
    case "AMERICAN":
      if (value > 0) return value / 100 + 1;
      return 100 / Math.abs(value) + 1;
    default:
      return value;
  }
}

/** Combined odds for a multiple: product of leg decimal odds (void → 1.0). */
export function combinedDecimalOdds(
  legOdds: number[],
  voidLegIndices: number[] = [],
): number {
  const voidSet = new Set(voidLegIndices);
  return legOdds.reduce((acc, odd, index) => {
    if (voidSet.has(index)) return acc;
    return acc * odd;
  }, 1);
}

export function potentialReturn(stake: number, decimalOdds: number): number {
  return stake * decimalOdds;
}

export function netProfitIfWon(stake: number, decimalOdds: number): number {
  return stake * (decimalOdds - 1);
}

export function profitLoss(
  stake: number,
  decimalOdds: number,
  status: "WON" | "LOST" | "VOID" | "CASHOUT",
  actualReturn?: number,
): number {
  switch (status) {
    case "WON":
      return netProfitIfWon(stake, decimalOdds);
    case "LOST":
      return -stake;
    case "VOID":
      return 0;
    case "CASHOUT":
      return (actualReturn ?? 0) - stake;
    default:
      return 0;
  }
}

export function yieldPercent(totalProfit: number, totalStaked: number): number {
  if (totalStaked === 0) return 0;
  return (totalProfit / totalStaked) * 100;
}

export function roiPercent(totalProfit: number, totalStaked: number): number {
  return yieldPercent(totalProfit, totalStaked);
}
