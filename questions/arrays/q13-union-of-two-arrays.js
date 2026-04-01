// ============================================================
//  QUESTION: Union of Two Arrays
//  Topic   : Arrays
//  File    : questions/arrays/q13-union-of-two-arrays.js
// ============================================================

const Q_ARRAYS_13 = {
  id: "arrays-13",
  title: "Union of Two Arrays",
  topic: "Arrays",
  difficulty: "Easy",

  realWorldContext:
    "A retail chain merges two store inventory lists into one consolidated catalogue, keeping only unique items.",

  description:
    "Given two arrays of integers, return all unique elements present in either array, " +
    "sorted in ascending order.\n\n" +
    "The union contains every distinct value that appears in arr1 OR arr2.",

  constraints: [
    "1 ≤ N, M ≤ 10⁵",
    "0 ≤ arr[i] ≤ 10⁹",
  ],

  inputFormat:
    "First line : N (size of first array)\n" +
    "Next N lines: elements of first array\n" +
    "Next line  : M (size of second array)\n" +
    "Next M lines: elements of second array",

  outputFormat:
    "Space-separated sorted unique integers on a single line",

  examples: [
    {
      input: "3\n1\n2\n3\n3\n2\n3\n4",
      output: "1 2 3 4",
      explanation: "Unique elements from both arrays, sorted: 1, 2, 3, 4",
    },
    {
      input: "4\n5\n1\n3\n7\n3\n1\n2\n5",
      output: "1 2 3 5 7",
    },
  ],

  testCases: [
    { id: 1, input: "3\n1\n2\n3\n3\n2\n3\n4",   expected: "1 2 3 4",   hidden: false },
    { id: 2, input: "4\n5\n1\n3\n7\n3\n1\n2\n5", expected: "1 2 3 5 7", hidden: false },
    { id: 3, input: "2\n1\n1\n2\n1\n1",            expected: "1",         hidden: true  },
    { id: 4, input: "3\n4\n5\n6\n3\n1\n2\n3",      expected: "1 2 3 4 5 6", hidden: true },
  ],

  bruteForce: {
    approach:
      "Combine both arrays into one list, convert to a set to remove duplicates, sort, and print.",
    timeComplexity: "O((N+M) log(N+M))",
    spaceComplexity: "O(N+M)",
    code:
`n = int(input())
arr1 = [int(input()) for _ in range(n)]
m = int(input())
arr2 = [int(input()) for _ in range(m)]

result = sorted(set(arr1 + arr2))
print(*result)`,
  },

  optimal: {
    approach:
      "Use a Python set for O(1) average lookups. Convert both arrays to a set union — same approach but semantically explicit.",
    timeComplexity: "O((N+M) log(N+M))",
    spaceComplexity: "O(N+M)",
    code:
`n = int(input())
arr1 = [int(input()) for _ in range(n)]
m = int(input())
arr2 = [int(input()) for _ in range(m)]

print(*sorted(set(arr1) | set(arr2)))`,
  },
};
