const Q_SORTING_7 = {
  id: "sorting-07",
  title: "Sort Strings by Length",
  topic: "Sorting",
  difficulty: "Easy",
  realWorldContext: "A book title display orders titles by character count, shortest first.",
  description: 
    "If two titles have the same length, sort them alphabetically. Given N strings, sort and print them.",
  constraints: [
    "1 ≤ N ≤ 1000",
    "1 ≤ length of string ≤ 100"
  ],
  inputFormat: "Line 1: N\nNext N lines: One string per line",
  outputFormat: "N strings sorted by rules, one per line",
  examples: [
    {
      input: "4\nbanana\nfig\napple\nkiwi",
      output: "fig\nkiwi\napple\nbanana",
      explanation: "fig size 3, kiwi size 4, apple size 5, banana size 6."
    }
  ],
  testCases: [
    { id: 1, input: "4\nbanana\nfig\napple\nkiwi", expected: "fig\nkiwi\napple\nbanana", hidden: false },
    { id: 2, input: "5\na\nbb\nccc\nba\nca", expected: "a\nba\nbb\nca\nccc", hidden: false },
    { id: 3, input: "3\nzzz\naaa\nmmm", expected: "aaa\nmmm\nzzz", hidden: true },
    { id: 4, input: "2\nshorter\nlongstring", expected: "shorter\nlongstring", hidden: true }
  ],
  bruteForce: {
    approach: "Write a custom bubble sort comparing lengths first, then contents.",
    timeComplexity: "O(N² * L) where L is string length limit",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [input().strip() for _ in range(n)]

for i in range(n):
    for j in range(0, n - i - 1):
        if len(arr[j]) > len(arr[j+1]):
            arr[j], arr[j+1] = arr[j+1], arr[j]
        elif len(arr[j]) == len(arr[j+1]):
            if arr[j] > arr[j+1]:
                arr[j], arr[j+1] = arr[j+1], arr[j]
                
for s in arr:
    print(s)`
  },
  optimal: {
    approach: "Use python's built in sort with tuple keys (len, string).",
    timeComplexity: "O(N log N * L)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = [input().strip() for _ in range(n)]

arr.sort(key=lambda x: (len(x), x))
for s in arr:
    print(s)`
  }
};
