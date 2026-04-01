// ============================================================
//  QUESTION: Majority Element
// ============================================================

const Q_ARRAYS_9 = {
  id: "arrays-9",
  title: "Majority Element",
  topic: "Arrays",
  difficulty: "Medium",

  realWorldContext:
    "In an election system, votes are recorded as candidate IDs.",

  description:
    "Find the element appearing more than N/2 times.",

  inputFormat:
    "First line: N\nNext N lines: arr[i]",

  outputFormat:
    "Majority element",

  examples: [
    {
      input: "5\n2\n2\n1\n1\n2",
      output: "2",
    },
  ],

  testCases: [
    { id: 1, input: "5\n2\n2\n1\n1\n2", expected: "2", hidden: false },
    { id: 2, input: "3\n1\n2\n3", expected: "-1", hidden: true },
  ],

  bruteForce: {
    approach: "Count frequency of each element.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `# brute`,
  },

  optimal: {
    approach: "Boyer-Moore Voting Algorithm.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

count = 0
candidate = None

for num in arr:
    if count == 0:
        candidate = num
    count += (1 if num == candidate else -1)

# verify
if arr.count(candidate) > n//2:
    print(candidate)
else:
    print(-1)`,
  },
};
