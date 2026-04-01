// ============================================================
//  QUESTION: Longest Consecutive Sequence
// ============================================================

const Q_ARRAYS_15 = {
  id: "arrays-15",
  title: "Longest Consecutive Sequence",
  topic: "Arrays",
  difficulty: "Medium",

  realWorldContext:
    "A data analyst wants to identify the longest streak of " +
    "consecutive numbers in an unsorted dataset.",

  description:
    "Given an unsorted array, find the length of the longest sequence " +
    "of consecutive integers.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
    "-10⁹ ≤ arr[i] ≤ 10⁹",
  ],

  inputFormat:
    "First line: N\nNext N lines: arr[i]",

  outputFormat:
    "Length of longest consecutive sequence",

  examples: [
    {
      input: "6\n100\n4\n200\n1\n3\n2",
      output: "4",
      explanation: "Sequence is 1,2,3,4",
    },
  ],

  testCases: [
    { id: 1, input: "6\n100\n4\n200\n1\n3\n2", expected: "4", hidden: false },
    { id: 2, input: "5\n1\n2\n0\n1\n3", expected: "4", hidden: false },
    { id: 3, input: "3\n10\n30\n20", expected: "1", hidden: true },
  ],

  bruteForce: {
    approach:
      "Sort the array and count consecutive elements.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

arr = sorted(set(arr))

max_len = 1
curr = 1

for i in range(1, len(arr)):
    if arr[i] == arr[i-1] + 1:
        curr += 1
        max_len = max(max_len, curr)
    else:
        curr = 1

print(max_len)`,
  },

  optimal: {
    approach:
      "Use set and start counting only when element is start of sequence.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

s = set(arr)
max_len = 0

for num in s:
    if num - 1 not in s:
        curr = num
        length = 1

        while curr + 1 in s:
            curr += 1
            length += 1

        max_len = max(max_len, length)

print(max_len)`,
  },
};
