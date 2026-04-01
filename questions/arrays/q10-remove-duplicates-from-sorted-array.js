// ============================================================
//  QUESTION: Remove Duplicates from Sorted Array
// ============================================================

const Q_ARRAYS_10 = {
  id: "arrays-10",
  title: "Remove Duplicates from Sorted Array",
  topic: "Arrays",
  difficulty: "Easy",

  realWorldContext:
    "A database stores sorted entries but may contain duplicates.",

  description:
    "Remove duplicates in-place and return new length.",

  inputFormat:
    "First line: N\nNext N lines: arr[i]",

  outputFormat:
    "Unique elements",

  examples: [
    {
      input: "5\n1\n1\n2\n2\n3",
      output: "1 2 3",
    },
  ],

  testCases: [
    { id: 1, input: "5\n1\n1\n2\n2\n3", expected: "1 2 3", hidden: false },
    { id: 2, input: "3\n1\n1\n1", expected: "1", hidden: true },
  ],

  optimal: {
    approach: "Two pointer technique.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

if n == 0:
    print()
else:
    j = 0
    for i in range(1, n):
        if arr[i] != arr[j]:
            j += 1
            arr[j] = arr[i]

    print(*arr[:j+1])`,
  },
};
