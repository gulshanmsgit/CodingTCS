// ============================================================
//  QUESTION: Subarray with Given Sum
// ============================================================

const Q_ARRAYS_16 = {
  id: "arrays-16",
  title: "Subarray with Given Sum",
  topic: "Arrays",
  difficulty: "Medium",

  realWorldContext:
    "A financial analyst wants to find a continuous period where " +
    "the total transaction amount equals a target value.",

  description:
    "Given an array of integers and a target sum, find the start and end " +
    "indices of a continuous subarray whose sum equals the target.\n\n" +
    "If no such subarray exists, return -1.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
    "-10⁹ ≤ arr[i] ≤ 10⁹",
  ],

  inputFormat:
    "First line: N\nNext N lines: arr[i]\nLast line: target",

  outputFormat:
    "Start and end indices (0-based) or -1",

  examples: [
    {
      input: "5\n1\n2\n3\n7\n5\n12",
      output: "1 3",
      explanation: "2 + 3 + 7 = 12",
    },
  ],

  testCases: [
    { id: 1, input: "5\n1\n2\n3\n7\n5\n12", expected: "1 3", hidden: false },
    { id: 2, input: "5\n1\n2\n3\n4\n5\n9", expected: "1 3", hidden: false },
    { id: 3, input: "3\n1\n2\n3\n10", expected: "-1", hidden: true },
  ],

  bruteForce: {
    approach:
      "Check all subarrays and calculate sum.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]
target = int(input())

for i in range(n):
    curr = 0
    for j in range(i, n):
        curr += arr[j]
        if curr == target:
            print(i, j)
            exit()

print(-1)`,
  },

  optimal: {
    approach:
      "Use prefix sum with hashmap to find target efficiently.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]
target = int(input())

prefix = 0
mp = {0: -1}

for i in range(n):
    prefix += arr[i]
    if (prefix - target) in mp:
        print(mp[prefix - target] + 1, i)
        break
    mp[prefix] = i
else:
    print(-1)`,
  },
};
