const Q_STRINGS_22 = {
  id: "strings-22",
  title: "Find All Substrings of a String",
  topic: "Strings",
  difficulty: "Medium",
  realWorldContext: "A pattern-analysis engine generates all possible substrings of a keyword for indexing.",
  description: 
    "Given a string S, print all distinct substrings sorted lexicographically, one per line.",
  constraints: [
    "1 ≤ |S| ≤ 10"
  ],
  inputFormat: "Line 1: String S (lowercase letters only)",
  outputFormat: "All distinct substrings, sorted, one per line",
  examples: [
    {
      input: "abc",
      output: "a\nab\nabc\nb\nbc\nc",
      explanation: "Every substring explicitly output."
    }
  ],
  testCases: [
    { id: 1, input: "abc", expected: "a\nab\nabc\nb\nbc\nc", hidden: false },
    { id: 2, input: "aba", expected: "a\nab\naba\nb\nba", hidden: false },
    { id: 3, input: "a", expected: "a", hidden: true },
    { id: 4, input: "aab", expected: "a\naa\naab\nab\nb", hidden: true }
  ],
  bruteForce: {
    approach: "Generate all substrings with O(N^2) space using nested loops, add to set for distinctness, sort, print.",
    timeComplexity: "O(N² log N)",
    spaceComplexity: "O(N²)",
    code: `s = input().strip()
subs = set()

for i in range(len(s)):
    for j in range(i + 1, len(s) + 1):
        subs.add(s[i:j])

for sub in sorted(list(subs)):
    print(sub)`
  },
  optimal: {
    approach: "Generate all substrings and set unique. Same as brute-force optimally for small N.",
    timeComplexity: "O(N² log N)",
    spaceComplexity: "O(N²)",
    code: `s = input().strip()
subs = set()

for i in range(len(s)):
    for j in range(i + 1, len(s) + 1):
        subs.add(s[i:j])

for sub in sorted(subs):
    print(sub)`
  }
};
