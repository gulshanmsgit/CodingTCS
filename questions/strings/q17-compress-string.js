const Q_STRINGS_17 = {
  id: "strings-17",
  title: "Compress a String (Run-Length Encoding)",
  topic: "Strings",
  difficulty: "Medium",
  realWorldContext: "A data transmission system compresses repetitive strings to reduce bandwidth.",
  description: 
    "Given a string S, compress it using run-length encoding — replace consecutive repeated characters with the character followed by its count. If the compressed string is longer than original, print original.",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S (lowercase letters only)",
  outputFormat: "Compressed string or original if compression doesn't help",
  examples: [
    {
      input: "aaabbbccddddee",
      output: "a3b3c2d4e2",
      explanation: "3 a's, 3 b's, 2 c's, 4 d's, 2 e's."
    },
    {
      input: "abcd",
      output: "abcd",
      explanation: "Compression would yield a1b1c1d1 which is longer."
    }
  ],
  testCases: [
    { id: 1, input: "aaabbbccddddee", expected: "a3b3c2d4e2", hidden: false },
    { id: 2, input: "abcd", expected: "abcd", hidden: false },
    { id: 3, input: "a", expected: "a", hidden: true },
    { id: 4, input: "zzzz", expected: "z4", hidden: true },
    { id: 5, input: "abb", expected: "abb", hidden: true }
  ],
  bruteForce: {
    approach: "Iterate through the string, count consecutive identical characters, append char and count to result. Finally verify length.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
if not s:
    print("")
else:
    ans = ""
    count = 1
    for i in range(1, len(s)):
        if s[i] == s[i-1]:
            count += 1
        else:
            ans += s[i-1] + str(count)
            count = 1
    ans += s[-1] + str(count)
    
    if len(ans) >= len(s):
        print(s)
    else:
        print(ans)`
  },
  optimal: {
    approach: "Using a list to collect characters and counts, joining them at the end. Lists are faster for string concatenation in Python.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
if not s:
    print("")
else:
    res = []
    count = 1
    for i in range(1, len(s)):
        if s[i] == s[i-1]:
            count += 1
        else:
            res.append(s[i-1] + str(count))
            count = 1
    res.append(s[-1] + str(count))
    ans = "".join(res)
    print(s if len(ans) >= len(s) else ans)`
  }
};
