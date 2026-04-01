// ============================================================
//  QUESTION: Equilibrium Index
// ============================================================

const Q_ARRAYS_18 = {
  id: "arrays-18",
  title: "Equilibrium Index",
  topic: "Arrays",
  difficulty: "Easy",

  realWorldContext:
    "A system analyzes balance points in data where left and right " +
    "values are equal.",

  description:
    "Find an index where the sum of elements to the left is equal " +
    "to the sum of elements to the right.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
  ],

  inputFormat:
    "First line: N\nNext N lines: arr[i]",

  outputFormat:
    "Index or -1",

  examples: [
    {
      input: "5\n1\n3\n5\n2\n2",
      output: "2",
    },
  ],

  testCases: [
    { id: 1, input: "5\n1\n3\n5\n2\n2", expected: "2", hidden: false },
    { id: 2, input: "3\n1\n2\n3", expected: "-1", hidden: false },
  ],

  bruteForce: {
    approach: "Check each index by summing left and right.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

for i in range(n):
    if sum(arr[:i]) == sum(arr[i+1:]):
        print(i)
        exit()

print(-1)`,
  },

  optimal: {
    approach: "Use total sum and prefix sum.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

total = sum(arr)
left = 0

for i in range(n):
    right = total - left - arr[i]
    if left == right:
        print(i)
        break
    left += arr[i]
else:
    print(-1)`,
  },
};
