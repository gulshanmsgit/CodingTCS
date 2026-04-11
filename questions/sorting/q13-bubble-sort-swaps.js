const Q_SORTING_13 = {
  id: "sorting-13",
  title: "Count Swaps in Bubble Sort",
  topic: "Sorting",
  difficulty: "Medium",
  realWorldContext: "A robot arm counts the minimum number of adjacent swaps needed to sort a sequence of packages.",
  description: 
    "Given N integers, find the total number of swaps bubble sort would perform.",
  constraints: [
    "1 ≤ N ≤ 10³"
  ],
  inputFormat: "Line 1: N\nLine 2: N space-separated integers",
  outputFormat: "Single integer — total number of swaps",
  examples: [
    {
      input: "4\n4 3 1 2",
      output: "5",
      explanation: "4 adjacent swaps are needed to sort the array completely."
    }
  ],
  testCases: [
    { id: 1, input: "4\n4 3 1 2", expected: "5", hidden: false },
    { id: 2, input: "3\n1 2 3", expected: "0", hidden: false },
    { id: 3, input: "4\n4 3 2 1", expected: "6", hidden: true },
    { id: 4, input: "5\n2 1 5 3 4", expected: "3", hidden: true }
  ],
  bruteForce: {
    approach: "Instrument bubble sort to increment a count variable on swap.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = list(map(int, input().split()))

swaps = 0
for i in range(n):
    for j in range(0, n - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
            swaps += 1
            
print(swaps)`
  },
  optimal: {
    approach: "For small N, O(N^2) simulating bubble sort is exactly what is requested.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = list(map(int, input().split()))

swaps = 0
for i in range(n):
    for j in range(0, n - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
            swaps += 1
            
print(swaps)`
  }
};
