// ============================================================
//  QUESTION: Move Zeroes to End
//  Topic   : Arrays
//  File    : questions/arrays/q1-move-zeroes.js
// ============================================================

const Q_ARRAYS_1 = {
  id: "arrays-1",
  title: "Move Zeroes to End",
  topic: "Arrays",
  difficulty: "Easy",

  // ----------------------------------------------------------
  //  PROBLEM STATEMENT
  // ----------------------------------------------------------
  realWorldContext:
    "A chocolate factory packs chocolates on a conveyor belt. " +
    "Empty slots (0) must be pushed to the end while keeping " +
    "the order of filled slots intact.",

  description:
    "Given an array of N integers, move all the zeros to the end " +
    "of the array while maintaining the relative order of the " +
    "non-zero elements.\n\n" +
    "Modify the array in-place. Do not use a new array.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
    "0 ≤ arr[i] ≤ 10⁹",
  ],

  inputFormat:
    "First line : Integer N (size of array)\n" +
    "Next N lines: Each element arr[i] on its own line",

  outputFormat:
    "N space-separated integers on a single line",

  // ----------------------------------------------------------
  //  EXAMPLES  (shown to user, never hidden)
  // ----------------------------------------------------------
  examples: [
    {
      input: "8\n4\n5\n0\n1\n9\n0\n5\n0",
      output: "4 5 1 9 5 0 0 0",
      explanation:
        "Three zeros (empty slots) are pushed to the end; " +
        "4 5 1 9 5 keep their original order.",
    },
    {
      input: "5\n0\n0\n1\n2\n3",
      output: "1 2 3 0 0",
      explanation:
        "Both leading zeros moved to end; non-zero order preserved.",
    },
  ],

  // ----------------------------------------------------------
  //  TEST CASES
  //  hidden: false → shown in the Test Cases panel
  //  hidden: true  → only used during Submit (like TCS)
  // ----------------------------------------------------------
  testCases: [
    { id: 1, input: "8\n4\n5\n0\n1\n9\n0\n5\n0", expected: "4 5 1 9 5 0 0 0", hidden: false },
    { id: 2, input: "5\n0\n0\n1\n2\n3",           expected: "1 2 3 0 0",       hidden: false },
    { id: 3, input: "1\n0",                        expected: "0",               hidden: true  },
    { id: 4, input: "4\n1\n2\n3\n4",              expected: "1 2 3 4",         hidden: true  },
    { id: 5, input: "3\n0\n0\n0",                 expected: "0 0 0",           hidden: true  },
    { id: 6, input: "6\n0\n1\n0\n3\n0\n12",       expected: "1 3 12 0 0 0",   hidden: true  },
  ],

  // ----------------------------------------------------------
  //  BRUTE FORCE SOLUTION
  // ----------------------------------------------------------
  bruteForce: {
    approach:
      "Collect all non-zero elements into a new list, " +
      "then append the required number of zeros at the end.",
    timeComplexity:  "O(N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

# Brute Force — extra list
result = [x for x in arr if x != 0]
result += [0] * (n - len(result))

print(*result)`,
  },

  // ----------------------------------------------------------
  //  OPTIMAL SOLUTION
  // ----------------------------------------------------------
  optimal: {
    approach:
      "Two-pointer technique: keep a 'write' pointer that advances " +
      "only when a non-zero is placed. After the loop fill the rest with zeros.",
    timeComplexity:  "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

# Optimal — two-pointer in-place
write = 0
for i in range(n):
    if arr[i] != 0:
        arr[write] = arr[i]
        write += 1

while write < n:
    arr[write] = 0
    write += 1

print(*arr)`,
  },
};
