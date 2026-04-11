const Q_STRINGS_10 = {
  id: "strings-10",
  title: "Wildcard Pattern Matching",
  topic: "Strings",
  difficulty: "Medium",
  realWorldContext: "A file-search system matches filenames against patterns.",
  description: 
    "A pattern can contain '*' (matches any sequence of characters including empty) and '?' (matches exactly one character). Given a pattern P and a string S, print \"YES\" if S matches P, else \"NO\".",
  constraints: [
    "1 ≤ |S|, |P| ≤ 500"
  ],
  inputFormat: "Line 1: String S\nLine 2: Pattern P",
  outputFormat: "YES or NO",
  examples: [
    {
      input: "abcde\n*c*e",
      output: "YES",
      explanation: "'*' matches 'ab', 'c' matches 'c', '*' matches 'd', 'e' matches 'e'."
    }
  ],
  testCases: [
    { id: 1, input: "abcde\na*e", expected: "YES", hidden: false },
    { id: 2, input: "aab\nc*a*b", expected: "NO", hidden: false },
    { id: 3, input: "x\n?", expected: "YES", hidden: true },
    { id: 4, input: "programming\npro*i?g", expected: "YES", hidden: true }
  ],
  bruteForce: {
    approach: "Recursive matching algorithm iterating through S and P.",
    timeComplexity: "O(2^(|P|))",
    spaceComplexity: "O(|S|) recursion stack",
    code: `def match(s, p, i, j):
    if i == len(s) and j == len(p):
        return True
    if j == len(p):
        return False
    if i == len(s):
        return all(x == '*' for x in p[j:])
        
    if p[j] == '?' or s[i] == p[j]:
        return match(s, p, i+1, j+1)
    if p[j] == '*':
        return match(s, p, i, j+1) or match(s, p, i+1, j)
    return False

s = input().strip()
p = input().strip()
print("YES" if match(s, p, 0, 0) else "NO")`
  },
  optimal: {
    approach: "Dynamic programming: dp[i][j] stores boolean value if s[:i] matches p[:j]",
    timeComplexity: "O(|S| * |P|)",
    spaceComplexity: "O(|S| * |P|)",
    code: `s = input().strip()
p = input().strip()

n, m = len(s), len(p)
dp = [[False] * (m + 1) for _ in range(n + 1)]
dp[0][0] = True

for j in range(1, m + 1):
    if p[j-1] == '*':
        dp[0][j] = dp[0][j-1]

for i in range(1, n + 1):
    for j in range(1, m + 1):
        if p[j-1] == '?' or s[i-1] == p[j-1]:
            dp[i][j] = dp[i-1][j-1]
        elif p[j-1] == '*':
            dp[i][j] = dp[i][j-1] or dp[i-1][j]

print("YES" if dp[n][m] else "NO")`
  }
};
