const Q_SORTING_3 = {
  id: "sorting-03",
  title: "Implement Selection Sort",
  topic: "Sorting",
  difficulty: "Easy",
  realWorldContext: "A packaging line sorts items by size for optimal stacking.",
  description: 
    "Given N integers, implement selection sort and print the sorted array.",
  constraints: [
    "1 ≤ N ≤ 10³"
  ],
  inputFormat: "Line 1: N\nLine 2: N space-separated integers",
  outputFormat: "Sorted array space-separated",
  examples: [
    {
      input: "5\n29 10 14 37 13",
      output: "10 13 14 29 37",
      explanation: "Selection sort sequentially selects minimums and places them."
    }
  ],
  testCases: [
    { id: 1, input: "5\n29 10 14 37 13", expected: "10 13 14 29 37", hidden: false },
    { id: 2, input: "5\n5 4 3 2 1", expected: "1 2 3 4 5", hidden: false },
    { id: 3, input: "1\n99", expected: "99", hidden: true },
    { id: 4, input: "6\n1 1 1 2 2 2", expected: "1 1 1 2 2 2", hidden: true }
  ],
  bruteForce: {
    approach: "Selection Sort standard implementation.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = list(map(int, input().split()))

for i in range(n):
    min_idx = i
    for j in range(i + 1, n):
        if arr[j] < arr[min_idx]:
            min_idx = j
    arr[i], arr[min_idx] = arr[min_idx], arr[i]
    
print(*arr)`
  },
  optimal: {
    approach: "Selection sort cannot be optimized further without transforming into Heap Sort. It is rigidly O(N^2).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = list(map(int, input().split()))

for i in range(n):
    min_idx = i
    for j in range(i + 1, n):
        if arr[j] < arr[min_idx]:
            min_idx = j
            
    if min_idx != i:
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
        
print(*arr)`
  }
};
