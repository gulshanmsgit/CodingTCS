const Q_SORTING_15 = {
  id: "sorting-15",
  title: "Sort Strings Alphabetically (Case-Insensitive)",
  topic: "Sorting",
  difficulty: "Easy",
  realWorldContext: "A contact list application sorts names alphabetically regardless of how the user typed them.",
  description: 
    "Given N names, sort them case-insensitively and print in sorted order (maintain original casing in output).",
  constraints: [
    "1 ≤ N ≤ 1000"
  ],
  inputFormat: "Line 1: N\nNext N lines: One name per line",
  outputFormat: "N names sorted, one per line",
  examples: [
    {
      input: "4\nBanana\napple\nCherry\navocado",
      output: "apple\navocado\nBanana\nCherry",
      explanation: "a, a, b, c ordering preserved in output."
    }
  ],
  testCases: [
    { id: 1, input: "4\nBanana\napple\nCherry\navocado", expected: "apple\navocado\nBanana\nCherry", hidden: false },
    { id: 2, input: "3\nZX\nxzy\nXYz", expected: "XYz\nxzy\nZX", hidden: false },
    { id: 3, input: "2\na\nA", expected: "a\nA", hidden: true },
    { id: 4, input: "3\nNQT\nprep\nTcs", expected: "NQT\nprep\nTcs", hidden: true }
  ],
  bruteForce: {
    approach: "Create list of tuples (lowercase, original), sort against lowercase key, and print original.",
    timeComplexity: "O(N log N * L)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = [input().strip() for _ in range(n)]

tup = [(s.lower(), s) for s in arr]
tup.sort(key=lambda x: x[0])

for t in tup:
    print(t[1])`
  },
  optimal: {
    approach: "Utilize python's key parameter in .sort() to pass str.lower mapping natively without overhead tuples.",
    timeComplexity: "O(N log N * L)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = [input().strip() for _ in range(n)]

arr.sort(key=str.lower)
for s in arr:
    print(s)`
  }
};
