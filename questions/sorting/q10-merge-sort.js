const Q_SORTING_10 = {
  id: "sorting-10",
  title: "Merge Sort Implementation",
  topic: "Sorting",
  difficulty: "Medium",
  realWorldContext: "A government election commission uses merge sort because it is stable — equal vote counts preserve candidate ID order.",
  description: 
    "Given N integers, implement merge sort and print the sorted array.",
  constraints: [
    "1 ≤ N ≤ 10⁵"
  ],
  inputFormat: "Line 1: N\nLine 2: N space-separated integers",
  outputFormat: "N space-separated integers sorted ascending",
  examples: [
    {
      input: "6\n38 27 43 3 9 82",
      output: "3 9 27 38 43 82",
      explanation: "Standard stable sort output."
    }
  ],
  testCases: [
    { id: 1, input: "6\n38 27 43 3 9 82", expected: "3 9 27 38 43 82", hidden: false },
    { id: 2, input: "4\n4 3 2 1", expected: "1 2 3 4", hidden: false },
    { id: 3, input: "1\n100", expected: "100", hidden: true },
    { id: 4, input: "6\n5 5 5 5 5 5", expected: "5 5 5 5 5 5", hidden: true }
  ],
  bruteForce: {
    approach: "Recursive splitting using slicing, then merging.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N log N)",
    code: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        L = arr[:mid]
        R = arr[mid:]
        merge_sort(L)
        merge_sort(R)
        
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
            
        while i < len(L):
            arr[k] = L[i]
            i += 1; k += 1
        while j < len(R):
            arr[k] = R[j]
            j += 1; k += 1

n = int(input())
arr = list(map(int, input().split()))
merge_sort(arr)
print(*arr)`
  },
  optimal: {
    approach: "Identical recursion logic but avoiding sub-list creation per call recursively to limit Memory to O(N)",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    code: `def merge_sort(arr):
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        merge_sort(left_half)
        merge_sort(right_half)

        i, j, k = 0, 0, 0

        while i < len(left_half) and j < len(right_half):
            if left_half[i] <= right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1

n = int(input())
arr = list(map(int, input().split()))
merge_sort(arr)
print(*arr)`
  }
};
