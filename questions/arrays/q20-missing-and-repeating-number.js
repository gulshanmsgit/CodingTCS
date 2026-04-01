// ============================================================
//  QUESTION: Missing and Repeating Number
// ============================================================

const Q_ARRAYS_20 = {
  id: "arrays-20",
  title: "Missing and Repeating Number",
  topic: "Arrays",
  difficulty: "Medium",

  realWorldContext:
    "Due to a system error, one number is missing and another is duplicated.",

  description:
    "Find the missing and repeating number in an array of size N " +
    "containing numbers from 1 to N.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
  ],

  inputFormat:
    "First line: N\nNext N lines: arr[i]",

  outputFormat:
    "Repeating number and Missing number",

  examples: [
    {
      input: "5\n1\n2\n2\n4\n5",
      output: "2 3",
    },
  ],

  testCases: [
    { id: 1, input: "5\n1\n2\n2\n4\n5", expected: "2 3", hidden: false },
    { id: 2, input: "3\n1\n1\n2", expected: "1 3", hidden: true },
  ],

  bruteForce: {
    approach: "Count frequency of each number.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `# brute`,
  },

  optimal: {
    approach: "Use frequency array.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

freq = [0]*(n+1)

for num in arr:
    freq[num] += 1

missing = repeating = -1

for i in range(1, n+1):
    if freq[i] == 0:
        missing = i
    elif freq[i] > 1:
        repeating = i

print(repeating, missing)`,
  },
};
