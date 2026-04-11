const Q_SORTING_9 = {
  id: "sorting-09",
  title: "Rearrange Array in Increasing-Decreasing Order",
  topic: "Sorting",
  difficulty: "Medium",
  realWorldContext: "A zipper manufacturing machine alternates between ascending and descending quality grades.",
  description: 
    "Given N integers, rearrange the array so that the first half is in ascending order and the second half is in descending order.",
  constraints: [
    "1 ≤ N ≤ 10⁵"
  ],
  inputFormat: "Line 1: N\nLine 2: N space-separated integers",
  outputFormat: "N space-separated integers arranged correctly",
  examples: [
    {
      input: "6\n1 5 8 9 6 7",
      output: "1 5 6 9 8 7",
      explanation: "Sorted: 1 5 6 7 8 9. First 3: 1 5 6. Second 3 reversed: 9 8 7."
    }
  ],
  testCases: [
    { id: 1, input: "6\n1 5 8 9 6 7", expected: "1 5 6 9 8 7", hidden: false },
    { id: 2, input: "5\n3 1 4 1 5", expected: "1 1 3 5 4", hidden: false },
    { id: 3, input: "4\n4 3 2 1", expected: "1 2 4 3", hidden: true },
    { id: 4, input: "7\n1 1 1 1 1 1 1", expected: "1 1 1 1 1 1 1", hidden: true }
  ],
  bruteForce: {
    approach: "Sort the first half taking N//2 slice, sort the second half descending separately.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = list(map(int, input().split()))
arr.sort()

mid = n // 2
if n % 2 != 0:
    mid += 1

first = arr[:mid]
second = arr[mid:]
second.sort(reverse=True)

print(*(first + second))`
  },
  optimal: {
    approach: "Sort the entire array once. Then reverse the slice from N//2 to the end.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(1) extra space",
    code: `n = int(input())
arr = list(map(int, input().split()))

arr.sort()

mid = n // 2
if n % 2 != 0:
    mid += 1
    
# output first half
ans = arr[:mid]

# output second half reversed
ans.extend(arr[mid:][::-1])

print(*ans)`
  }
};
