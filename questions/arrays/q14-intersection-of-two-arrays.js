// ============================================================
//  QUESTION: Intersection of Two Arrays
// ============================================================

const Q_ARRAYS_14 = {
  id: "arrays-14",
  title: "Intersection of Two Arrays",
  topic: "Arrays",
  difficulty: "Easy",

  realWorldContext:
    "Two departments maintain separate datasets of product IDs. " +
    "Management wants to find common products present in both datasets.",

  description:
    "Given two arrays, return all unique elements that are present in both arrays.",

  constraints: [
    "1 ≤ N, M ≤ 10⁵",
    "0 ≤ arr[i] ≤ 10⁹",
  ],

  inputFormat:
    "First line: N\nNext N lines: arr1[i]\n" +
    "Next line: M\nNext M lines: arr2[i]",

  outputFormat:
    "Common elements (unique)",

  examples: [
    {
      input: "3\n1\n2\n3\n3\n2\n3\n4",
      output: "2 3",
      explanation: "Only 2 and 3 are common",
    },
  ],

  testCases: [
    { id: 1, input: "3\n1\n2\n3\n3\n2\n3\n4", expected: "2 3", hidden: false },
    { id: 2, input: "4\n1\n2\n2\n3\n3\n2\n2\n4", expected: "2", hidden: false },
    { id: 3, input: "2\n1\n5\n2\n2\n3", expected: "", hidden: true },
  ],

  bruteForce: {
    approach:
      "Check each element of first array with second array and store common values.",
    timeComplexity: "O(N*M)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr1 = [int(input()) for _ in range(n)]

m = int(input())
arr2 = [int(input()) for _ in range(m)]

res = []

for i in range(n):
    for j in range(m):
        if arr1[i] == arr2[j] and arr1[i] not in res:
            res.append(arr1[i])

print(*sorted(res))`,
  },

  optimal: {
    approach:
      "Use set intersection to get unique common elements.",
    timeComplexity: "O(N+M)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr1 = [int(input()) for _ in range(n)]

m = int(input())
arr2 = [int(input()) for _ in range(m)]

set1 = set(arr1)
set2 = set(arr2)

res = list(set1 & set2)

print(*sorted(res))`,
  },
};
