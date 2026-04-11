const Q_SORTING_14 = {
  id: "sorting-14",
  title: "Find K-th Smallest Element",
  topic: "Sorting",
  difficulty: "Medium",
  realWorldContext: "A school exam result system finds the student who scored the K-th lowest mark for scholarship cutoff purposes.",
  description: 
    "Given N integers and K, find the K-th smallest element (1-indexed).",
  constraints: [
    "1 ≤ K ≤ N ≤ 10⁵",
    "-10⁹ ≤ arr[i] ≤ 10⁹"
  ],
  inputFormat: "Line 1: N and K (space-separated)\nLine 2: N space-separated integers",
  outputFormat: "Single integer — the K-th smallest element",
  examples: [
    {
      input: "6 3\n7 2 5 1 8 3",
      output: "3",
      explanation: "Sorted: 1 2 3 5 7 8 -> 3rd element is 3."
    }
  ],
  testCases: [
    { id: 1, input: "6 3\n7 2 5 1 8 3", expected: "3", hidden: false },
    { id: 2, input: "4 4\n10 20 5 15", expected: "20", hidden: false },
    { id: 3, input: "3 1\n3 2 1", expected: "1", hidden: true },
    { id: 4, input: "5 3\n10 10 10 10 10", expected: "10", hidden: true }
  ],
  bruteForce: {
    approach: "Sort the array and select index k - 1.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    code: `n, k = map(int, input().split())
arr = list(map(int, input().split()))
arr.sort()
print(arr[k - 1])`
  },
  optimal: {
    approach: "Sort the array. While QuickSelect gives O(N) average, python's .sort is highly optimized TimSort written in C making it extremely fast for these constraints.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(1) in-place algorithm",
    code: `n, k = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort()
print(arr[k - 1])`
  }
};
