const Q_STRINGS_11 = {
  id: "strings-11",
  title: "Toggle Case of Each Character",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A text formatting tool in a word processor toggles the case of every character.",
  description: 
    "Given a string S, print the toggled version. Uppercase becomes lowercase and vice versa.",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S (alphabets only)",
  outputFormat: "Toggled string",
  examples: [
    {
      input: "HeLLo WoRLd",
      output: "hEllO wOrlD",
      explanation: "Case toggled correctly."
    }
  ],
  testCases: [
    { id: 1, input: "HeLLo WoRLd", expected: "hEllO wOrlD", hidden: false },
    { id: 2, input: "TCS", expected: "tcs", hidden: false },
    { id: 3, input: "nqt", expected: "NQT", hidden: true },
    { id: 4, input: "aBcD", expected: "AbCd", hidden: true }
  ],
  bruteForce: {
    approach: "Loop through characters and toggle using isupper/islower or swapcase.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input()
ans = ""
for c in s:
    if c.isupper():
        ans += c.lower()
    elif c.islower():
        ans += c.upper()
    else:
        ans += c
print(ans)`
  },
  optimal: {
    approach: "Use python built-in string modifier.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input()
print(s.swapcase())`
  }
};
