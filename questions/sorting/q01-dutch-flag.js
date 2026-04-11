const Q_SORTING_1 = {
  id: "sorting-01",
  title: "Sort Array of 0s, 1s and 2s (Dutch National Flag)",
  topic: "Sorting",
  difficulty: "Medium",
  realWorldContext: "A colour-coding machine at a gem factory sorts gems into three bins — Red (0), White (1), Blue (2).",
  description: 
    "The machine must sort them in a single pass without using extra space and without a counting trick. Given an array of N integers containing only 0s, 1s, and 2s, sort it in-place.",
  constraints: [
    "1 ≤ N ≤ 10⁶"
  ],
  inputFormat: "Line 1: Integer N\nLine 2: N space-separated integers",
  outputFormat: "N space-separated integers in sorted order",
  examples: [
    {
      input: "6\n0 1 2 0 1 2",
      output: "0 0 1 1 2 2",
      explanation: "Array sorted correctly."
    }
  ],
  testCases: [
    { id: 1, input: "6\n0 1 2 0 1 2", expected: "0 0 1 1 2 2", hidden: false },
    { id: 2, input: "5\n2 0 2 1 1", expected: "0 1 1 2 2", hidden: false },
    { id: 3, input: "3\n2 1 0", expected: "0 1 2", hidden: true },
    { id: 4, input: "4\n1 1 1 1", expected: "1 1 1 1", hidden: true },
    { id: 5, input: "7\n0 0 0 2 2 1 1", expected: "0 0 0 1 1 2 2", hidden: true }
  ],
  bruteForce: {
    approach: "Count the number of 0s, 1s, and 2s. Then overwrite the array. (This violates the single pass rule but works functionally).",
    timeComplexity: "O(N) - two passes",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = list(map(int, input().split()))

c0 = c1 = c2 = 0
for x in arr:
    if x == 0: c0 += 1
    elif x == 1: c1 += 1
    else: c2 += 1
    
arr[:c0] = [0] * c0
arr[c0:c0+c1] = [1] * c1
arr[c0+c1:] = [2] * c2

print(*arr)`
  },
  optimal: {
    approach: "Dutch National Flag Algorithm using three pointers: low, mid, high. Mid traverses the array and performs swaps.",
    timeComplexity: "O(N) - single pass",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = list(map(int, input().split()))

low = 0
mid = 0
high = n - 1

while mid <= high:
    if arr[mid] == 0:
        arr[low], arr[mid] = arr[mid], arr[low]
        low += 1
        mid += 1
    elif arr[mid] == 1:
        mid += 1
    else:
        arr[high], arr[mid] = arr[mid], arr[high]
        high -= 1
        
print(*arr)`
  }
};
