const Q_STRINGS_7 = {
  id: "strings-07",
  title: "Longest Common Prefix",
  topic: "Strings",
  difficulty: "Medium",
  realWorldContext: "A search engine needs to find the longest common prefix among all search queries to group them.",
  description: 
    "Given N strings, find the longest common prefix. If no common prefix exists, print \"NONE\".",
  constraints: [
    "1 ≤ N ≤ 200",
    "1 ≤ |each string| ≤ 200"
  ],
  inputFormat: "Line 1: N\nNext N lines: One string per line",
  outputFormat: "Longest common prefix string, or \"NONE\"",
  examples: [
    {
      input: "3\nflower\nflow\nflight",
      output: "fl",
      explanation: "All three start with 'fl'."
    },
    {
      input: "3\ndog\nracecar\ncar",
      output: "NONE",
      explanation: "No common prefix among all three."
    }
  ],
  testCases: [
    { id: 1, input: "3\nflower\nflow\nflight", expected: "fl", hidden: false },
    { id: 2, input: "3\ndog\nracecar\ncar", expected: "NONE", hidden: false },
    { id: 3, input: "2\nab\na", expected: "a", hidden: true },
    { id: 4, input: "4\napple\napp\napplication\nappetite", expected: "app", hidden: true }
  ],
  bruteForce: {
    approach: "Compare character by character across all strings until a mismatch happens.",
    timeComplexity: "O(M * N) where M is length of smallest string",
    spaceComplexity: "O(1)",
    code: `n = int(input())
arr = [input().strip() for _ in range(n)]

if not arr:
    print("NONE")
else:
    prefix = ""
    min_len = min(len(s) for s in arr)
    for i in range(min_len):
        char = arr[0][i]
        if all(s[i] == char for s in arr):
            prefix += char
        else:
            break
            
    print(prefix if prefix else "NONE")`
  },
  optimal: {
    approach: "Sort the array. The longest common prefix of all strings must be the common prefix of the first and last strings after sorting.",
    timeComplexity: "O(N log N * M)",
    spaceComplexity: "O(M) for sorting",
    code: `n = int(input())
arr = [input().strip() for _ in range(n)]

if not arr:
    print("NONE")
else:
    arr.sort()
    s1 = arr[0]
    s2 = arr[-1]
    i = 0
    while i < len(s1) and i < len(s2) and s1[i] == s2[i]:
        i += 1
        
    print(s1[:i] if i > 0 else "NONE")`
  }
};
