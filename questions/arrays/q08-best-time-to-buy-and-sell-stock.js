// ============================================================
//  QUESTION: Best Time to Buy and Sell Stock
// ============================================================

const Q_ARRAYS_8 = {
  id: "arrays-8",
  title: "Best Time to Buy and Sell Stock",
  topic: "Arrays",
  difficulty: "Easy",

  realWorldContext:
    "An investor wants to maximize profit from stock prices recorded daily.",

  description:
    "Find the maximum profit by buying once and selling once.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
  ],

  inputFormat:
    "First line: N\nNext N lines: prices[i]",

  outputFormat:
    "Maximum profit",

  examples: [
    {
      input: "6\n7\n1\n5\n3\n6\n4",
      output: "5",
      explanation: "Buy at 1, sell at 6",
    },
  ],

  testCases: [
    { id: 1, input: "6\n7\n1\n5\n3\n6\n4", expected: "5", hidden: false },
    { id: 2, input: "5\n7\n6\n4\n3\n1", expected: "0", hidden: false },
    { id: 3, input: "1\n5", expected: "0", hidden: true },
  ],

  bruteForce: {
    approach:
      "Check all pairs (buy before sell).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

max_profit = 0

for i in range(n):
    for j in range(i+1, n):
        max_profit = max(max_profit, arr[j] - arr[i])

print(max_profit)`,
  },

  optimal: {
    approach:
      "Track minimum price and calculate profit.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

min_price = arr[0]
max_profit = 0

for i in range(1, n):
    profit = arr[i] - min_price
    max_profit = max(max_profit, profit)
    min_price = min(min_price, arr[i])

print(max_profit)`,
  },
};
