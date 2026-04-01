// ============================================================
//  QUESTION: Count Pairs with Given Sum
// ============================================================

const Q_ARRAYS_17 = {
  id: "arrays-17",
  title: "Count Pairs with Given Sum",
  topic: "Arrays",
  difficulty: "Easy",

  realWorldContext:
    "A system analyzes transactions and needs to count how many " +
    "pairs of values add up to a target amount.",

  description:
    "Given an array and a target sum, count the number of pairs " +
    "whose sum equals the target.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
  ],

  inputFormat:
    "First line: N\nNext N lines: arr[i]\nLast line: target",

  outputFormat:
    "Count of pairs",

  examples: [
    {
      input: "5\n1\n5\n7\n-1\n5\n6",
      output: "3",
    },
  ],

  testCases: [
    { id: 1, input: "5\n1\n5\n7\n-1\n5\n6", expected: "3", hidden: false },
    { id: 2, input: "4\n1\n1\n1\n1\n2", expected: "6", hidden: false },
    { id: 3, input: "3\n1\n2\n3\n7", expected: "0", hidden: true },
  ],

  bruteForce: {
    approach: "Check all pairs.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]
target = int(input())

count = 0

for i in range(n):
    for j in range(i+1, n):
        if arr[i] + arr[j] == target:
            count += 1

print(count)`,
  },

  optimal: {
    approach: "Use hashmap to count frequencies.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]
target = int(input())

freq = {}
count = 0

for num in arr:
    diff = target - num
    if diff in freq:
        count += freq[diff]

    freq[num] = freq.get(num, 0) + 1

print(count)`,
  },
};
