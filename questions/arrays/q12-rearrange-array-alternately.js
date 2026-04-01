// ============================================================
//  QUESTION: Rearrange Array Alternately
// ============================================================

const Q_ARRAYS_12 = {
  id: "arrays-12",
  title: "Rearrange Array Alternately",
  topic: "Arrays",
  difficulty: "Medium",

  realWorldContext:
    "A system needs to display data in alternating high-low order " +
    "for better visualization.",

  description:
    "Given a sorted array, rearrange it in max-min form.",

  examples: [
    {
      input: "6\n1\n2\n3\n4\n5\n6",
      output: "6 1 5 2 4 3",
    },
  ],

  testCases: [
    { id: 1, input: "6\n1\n2\n3\n4\n5\n6", expected: "6 1 5 2 4 3", hidden: false },
    { id: 2, input: "5\n1\n2\n3\n4\n5", expected: "5 1 4 2 3", hidden: true },
  ],

  bruteForce: {
    approach: "Use extra array.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `# brute`,
  },

  optimal: {
    approach: "Use two pointers.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

res = []
l, r = 0, n-1

while l <= r:
    if l != r:
        res.append(arr[r])
        res.append(arr[l])
    else:
        res.append(arr[l])
    l += 1
    r -= 1

print(*res)`,
  },
};
