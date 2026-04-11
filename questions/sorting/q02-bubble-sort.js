const Q_SORTING_2 = {
  id: "sorting-02",
  title: "Implement Bubble Sort",
  topic: "Sorting",
  difficulty: "Easy",
  realWorldContext: "A warehouse inventory system uses bubble sort to order stock items by weight.",
  description: 
    "Given an array of N integers, implement bubble sort and print the sorted array. Stop early if a pass results in zero swaps.",
  constraints: [
    "1 ≤ N ≤ 10³"
  ],
  inputFormat: "Line 1: N\nLine 2: N space-separated integers",
  outputFormat: "Sorted array space-separated",
  examples: [
    {
      input: "5\n64 34 25 12 22",
      output: "12 22 25 34 64",
      explanation: "Standard sorted array."
    }
  ],
  testCases: [
    { id: 1, input: "5\n64 34 25 12 22", expected: "12 22 25 34 64", hidden: false },
    { id: 2, input: "4\n4 3 1 2", expected: "1 2 3 4", hidden: false },
    { id: 3, input: "5\n1 2 3 4 5", expected: "1 2 3 4 5", hidden: true },
    { id: 4, input: "3\n10 10 10", expected: "10 10 10", hidden: true }
  ],
  bruteForce: {
    approach: "Standard bubble sort with no optimization. Runs N^2 times regardless.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = list(map(int, input().split()))

for i in range(n):
    for j in range(0, n - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
            
print(*arr)`
  },
  optimal: {
    approach: "Optimized bubble sort tracking a 'swapped' flag early-exit.",
    timeComplexity: "O(N) best case, O(N²) worst case",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = list(map(int, input().split()))

for i in range(n):
    swapped = False
    for j in range(0, n - i - 1):
        if arr[j] > arr[j + 1]:
            arr[j], arr[j + 1] = arr[j + 1], arr[j]
            swapped = True
            
    if not swapped:
        break

print(*arr)`
  }
};
