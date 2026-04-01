// ============================================================
//  QUESTION: Maximum Subarray Sum (Kadane’s Algorithm)
// ============================================================

const Q_ARRAYS_7 = {
  id: "arrays-7",
  title: "Maximum Subarray Sum",
  topic: "Arrays",
  difficulty: "Medium",

  realWorldContext:
    "A company tracks daily profit and loss. They want to find " +
    "the period with maximum total profit.",

  description:
    "Given an array of integers (positive and negative), find the " +
    "maximum sum of a contiguous subarray.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
    "-10⁹ ≤ arr[i] ≤ 10⁹",
  ],

  inputFormat:
    "First line: N\nNext N lines: arr[i]",

  outputFormat:
    "Maximum subarray sum",

  examples: [
    {
      input: "8\n-2\n-3\n4\n-1\n-2\n1\n5\n-3",
      output: "7",
      explanation: "Subarray [4, -1, -2, 1, 5] gives sum 7",
    },
  ],

  testCases: [
    { id: 1, input: "8\n-2\n-3\n4\n-1\n-2\n1\n5\n-3", expected: "7", hidden: false },
    { id: 2, input: "5\n1\n2\n3\n4\n5", expected: "15", hidden: false },
    { id: 3, input: "3\n-1\n-2\n-3", expected: "-1", hidden: true },
    { id: 4, input: "1\n5", expected: "5", hidden: true },
  ],

  bruteForce: {
    approach:
      "Check all subarrays and calculate sum.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

max_sum = float('-inf')

for i in range(n):
    curr = 0
    for j in range(i, n):
        curr += arr[j]
        max_sum = max(max_sum, curr)

print(max_sum)`,
  },

  optimal: {
    approach:
      "Kadane’s Algorithm: keep adding elements and reset when sum becomes negative.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

max_sum = arr[0]
curr = arr[0]

for i in range(1, n):
    curr = max(arr[i], curr + arr[i])
    max_sum = max(max_sum, curr)

print(max_sum)`,
  },
};
