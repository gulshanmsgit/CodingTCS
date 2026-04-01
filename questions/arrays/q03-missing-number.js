// ============================================================
//  QUESTION: Missing Number
// ============================================================

const Q_ARRAYS_3 = {
  id: "arrays-3",
  title: "Missing Number",
  topic: "Arrays",
  difficulty: "Easy",

  realWorldContext:
    "A system logs numbers from 1 to N, but due to a technical issue, " +
    "one number is missing from the records.",

  description:
    "Given N-1 distinct numbers from the range 1 to N, find the missing number.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
    "1 ≤ arr[i] ≤ N",
  ],

  inputFormat:
    "First line: N\nNext N-1 lines: arr[i]",

  outputFormat:
    "Single integer representing the missing number",

  examples: [
    {
      input: "5\n1\n2\n3\n5",
      output: "4",
      explanation: "4 is missing from 1 to 5",
    },
  ],

  testCases: [
    { id: 1, input: "5\n1\n2\n3\n5", expected: "4", hidden: false },
    { id: 2, input: "3\n1\n3", expected: "2", hidden: false },
    { id: 3, input: "2\n2", expected: "1", hidden: true },
    { id: 4, input: "6\n1\n2\n3\n4\n5", expected: "6", hidden: true },
  ],

  bruteForce: {
    approach:
      "Check each number from 1 to N and see which is missing.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n-1)]

for i in range(1, n+1):
    if i not in arr:
        print(i)
        break`,
  },

  optimal: {
    approach:
      "Use sum formula: total sum minus array sum.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n-1)]

total = n*(n+1)//2
print(total - sum(arr))`,
  },
};
