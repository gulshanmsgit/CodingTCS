// ============================================================
//  QUESTION: Leaders in Array
// ============================================================

const Q_ARRAYS_11 = {
  id: "arrays-11",
  title: "Leaders in Array",
  topic: "Arrays",
  difficulty: "Easy",

  realWorldContext:
    "A company analyzes daily performance metrics. A value is considered " +
    "a leader if no value to its right is greater than it.",

  description:
    "Given an array, find all elements that are greater than all elements to their right.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
  ],

  inputFormat:
    "First line: N\nNext N lines: arr[i]",

  outputFormat:
    "Leaders in order of appearance",

  examples: [
    {
      input: "6\n16\n17\n4\n3\n5\n2",
      output: "17 5 2",
    },
  ],

  testCases: [
    { id: 1, input: "6\n16\n17\n4\n3\n5\n2", expected: "17 5 2", hidden: false },
    { id: 2, input: "5\n5\n4\n3\n2\n1", expected: "5 4 3 2 1", hidden: false },
    { id: 3, input: "3\n1\n2\n3", expected: "3", hidden: true },
  ],

  bruteForce: {
    approach: "Check each element with all elements to its right.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

for i in range(n):
    is_leader = True
    for j in range(i+1, n):
        if arr[j] > arr[i]:
            is_leader = False
            break
    if is_leader:
        print(arr[i], end=" ")`,
  },

  optimal: {
    approach: "Traverse from right and track maximum.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

max_right = arr[-1]
leaders = [max_right]

for i in range(n-2, -1, -1):
    if arr[i] >= max_right:
        max_right = arr[i]
        leaders.append(arr[i])

print(*leaders[::-1])`,
  },
};
