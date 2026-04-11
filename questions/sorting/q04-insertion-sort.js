const Q_SORTING_4 = {
  id: "sorting-04",
  title: "Implement Insertion Sort",
  topic: "Sorting",
  difficulty: "Easy",
  realWorldContext: "A card-sorting robot inserts each new card into its correct position among already-sorted cards.",
  description: 
    "Given N integers, implement insertion sort and print the sorted result.",
  constraints: [
    "1 ≤ N ≤ 10³"
  ],
  inputFormat: "Line 1: N\nLine 2: N space-separated integers",
  outputFormat: "Sorted array space-separated",
  examples: [
    {
      input: "5\n12 11 13 5 6",
      output: "5 6 11 12 13",
      explanation: "Array sorted by shifting."
    }
  ],
  testCases: [
    { id: 1, input: "5\n12 11 13 5 6", expected: "5 6 11 12 13", hidden: false },
    { id: 2, input: "5\n1 2 3 4 5", expected: "1 2 3 4 5", hidden: false },
    { id: 3, input: "3\n3 2 1", expected: "1 2 3", hidden: true },
    { id: 4, input: "5\n2 2 3 1 1", expected: "1 1 2 2 3", hidden: true }
  ],
  bruteForce: {
    approach: "Standard insertion sort algorithm.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = list(map(int, input().split()))

for i in range(1, n):
    key = arr[i]
    j = i - 1
    while j >= 0 and key < arr[j]:
        arr[j + 1] = arr[j]
        j -= 1
    arr[j + 1] = key
    
print(*arr)`
  },
  optimal: {
    approach: "Same as brute force, insertion sort inherently stops shifting early on sorted data yielding O(N) best case.",
    timeComplexity: "O(N) best, O(N²) average/worst",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = list(map(int, input().split()))

for i in range(1, n):
    key = arr[i]
    j = i - 1
    while j >= 0 and key < arr[j]:
        arr[j + 1] = arr[j]
        j -= 1
    arr[j + 1] = key
    
print(*arr)`
  }
};
