const Q_SORTING_11 = {
  id: "sorting-11",
  title: "Quick Sort Implementation",
  topic: "Sorting",
  difficulty: "Medium",
  realWorldContext: "A real-time financial trading system sorts market orders by price in milliseconds.",
  description: 
    "Given N integers, implement quick sort (using the last element as pivot) and print the sorted array.",
  constraints: [
    "1 ≤ N ≤ 10⁵"
  ],
  inputFormat: "Line 1: N\nLine 2: N space-separated integers",
  outputFormat: "N space-separated integers sorted ascending",
  examples: [
    {
      input: "5\n10 7 8 9 1",
      output: "1 7 8 9 10",
      explanation: "Standard quick sort output."
    }
  ],
  testCases: [
    { id: 1, input: "5\n10 7 8 9 1", expected: "1 7 8 9 10", hidden: false },
    { id: 2, input: "4\n4 3 2 1", expected: "1 2 3 4", hidden: false },
    { id: 3, input: "2\n10 10", expected: "10 10", hidden: true },
    { id: 4, input: "5\n1 2 3 4 5", expected: "1 2 3 4 5", hidden: true }
  ],
  bruteForce: {
    approach: "Recursive partitioning around pivot.",
    timeComplexity: "O(N log N) avg, O(N²) worst",
    spaceComplexity: "O(log N) stack",
    code: `def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

n = int(input())
arr = list(map(int, input().split()))
quick_sort(arr, 0, n - 1)
print(*arr)`
  },
  optimal: {
    approach: "Same as brute force as it dictates the specific algorithm to implement constraint natively.",
    timeComplexity: "O(N log N) avg",
    spaceComplexity: "O(log N)",
    code: `import sys
# Increase recursion depth for worst-case inputs
sys.setrecursionlimit(200000)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    for j in range(low, high):
        if arr[j] <= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1

def quick_sort(arr, low, high):
    if low < high:
        pi = partition(arr, low, high)
        quick_sort(arr, low, pi - 1)
        quick_sort(arr, pi + 1, high)

n = int(input())
arr = list(map(int, input().split()))
quick_sort(arr, 0, n - 1)
print(*arr)`
  }
};
