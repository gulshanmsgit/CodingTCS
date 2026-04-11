const Q_STRINGS_16 = {
  id: "strings-16",
  title: "Print All Permutations of a String",
  topic: "Strings",
  difficulty: "Medium",
  realWorldContext: "A lock manufacturer generates all possible combinations of letters in a security key code.",
  description: 
    "Given a string S of distinct characters, print all permutations in lexicographic order, one per line.",
  constraints: [
    "1 ≤ |S| ≤ 8"
  ],
  inputFormat: "Line 1: String S (distinct lowercase letters only)",
  outputFormat: "All permutations, one per line, in sorted order",
  examples: [
    {
      input: "abc",
      output: "abc\nacb\nbac\nbca\ncab\ncba",
      explanation: "Permutations printed in dictionary order."
    }
  ],
  testCases: [
    { id: 1, input: "abc", expected: "abc\nacb\nbac\nbca\ncab\ncba", hidden: false },
    { id: 2, input: "ab", expected: "ab\nba", hidden: false },
    { id: 3, input: "a", expected: "a", hidden: true },
    { id: 4, input: "cba", expected: "abc\nacb\nbac\nbca\ncab\ncba", hidden: true }
  ],
  bruteForce: {
    approach: "Recursive generation keeping track of used characters.",
    timeComplexity: "O(N * N!)",
    spaceComplexity: "O(N)",
    code: `def permute(s, path, used, res):
    if len(path) == len(s):
        res.append("".join(path))
        return
    for i in range(len(s)):
        if not used[i]:
            used[i] = True
            path.append(s[i])
            permute(s, path, used, res)
            path.pop()
            used[i] = False

s = sorted(input().strip())
res = []
used = [False] * len(s)
permute(s, [], used, res)
for p in res:
    print(p)`
  },
  optimal: {
    approach: "Using Python's itertools.permutations logic on sorted string.",
    timeComplexity: "O(N * N!)",
    spaceComplexity: "O(N!)",
    code: `from itertools import permutations

s = sorted(input().strip())
for p in permutations(s):
    print("".join(p))`
  }
};
