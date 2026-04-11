const Q_SORTING_8 = {
  id: "sorting-08",
  title: "Sort Array by Absolute Difference from K",
  topic: "Sorting",
  difficulty: "Medium",
  realWorldContext: "A lab calibration system ranks sensor readings by how close they are to the target calibration value K.",
  description: 
    "Given N integers and a target K, sort the array such that the element closest to K comes first. For equal absolute differences, the smaller element comes first.",
  constraints: [
    "1 ≤ N ≤ 10⁵",
    "-10⁹ ≤ arr[i], K ≤ 10⁹"
  ],
  inputFormat: "Line 1: N and K\nLine 2: N space-separated integers",
  outputFormat: "N space-separated integers sorted",
  examples: [
    {
      input: "7 6\n10 2 14 4 7 6 3",
      output: "6 7 4 3 10 2 14",
      explanation: "Diffs: 6->0, 7->1, 4->2. Tiebreaker: 4 is smaller than 8 (if 8 existed)"
    }
  ],
  testCases: [
    { id: 1, input: "7 6\n10 2 14 4 7 6 3", expected: "6 7 4 3 10 2 14", hidden: false },
    { id: 2, input: "5 5\n1 9 5 2 8", expected: "5 8 2 9 1", hidden: false },
    { id: 3, input: "3 0\n-2 2 0", expected: "0 -2 2", hidden: true },
    { id: 4, input: "4 10\n10 10 10 10", expected: "10 10 10 10", hidden: true }
  ],
  bruteForce: {
    approach: "Create tuples of (difference, value), sort the array of tuples, and print.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    code: `n, k = map(int, input().split())
arr = list(map(int, input().split()))

pairs = [(abs(x - k), x) for x in arr]
pairs.sort()
print(*(x[1] for x in pairs))`
  },
  optimal: {
    approach: "Direct sort in place mapping against lambda without instantiating explicit auxiliary pairs list.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(1) extra space",
    code: `n, k = map(int, input().split())
arr = list(map(int, input().split()))

arr.sort(key=lambda x: (abs(x - k), x))
print(*arr)`
  }
};
