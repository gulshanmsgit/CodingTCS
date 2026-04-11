const Q_SORTING_12 = {
  id: "sorting-12",
  title: "Sort Characters in a String",
  topic: "Sorting",
  difficulty: "Easy",
  realWorldContext: "A password-strength tester normalises a password by sorting its characters to detect anagram-based weak passwords.",
  description: 
    "Given string S, sort its characters and print the result. Sort strictly by ASCII value (uppercase comes before lowercase if mixed).",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S",
  outputFormat: "Characters of S in ASCII sorted order",
  examples: [
    {
      input: "programming",
      output: "aggimmnoprrr",
      explanation: "Letters sorted."
    },
    {
      input: "HeLLo",
      output: "HLLeo",
      explanation: "H, L, L come before e, o due to ASCII code."
    }
  ],
  testCases: [
    { id: 1, input: "programming", expected: "aggimmnoprrr", hidden: false },
    { id: 2, input: "HeLLo", expected: "HLLeo", hidden: false },
    { id: 3, input: "aA", expected: "Aa", hidden: true },
    { id: 4, input: "tcsNQT", expected: "NQTcst", hidden: true }
  ],
  bruteForce: {
    approach: "Convert to char array, sort using standard sorting, join back to string.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
chars = list(s)
chars.sort()
print("".join(chars))`
  },
  optimal: {
    approach: "Python's `sorted(s)` natively achieves exactly this in O(N log N).",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
print("".join(sorted(s)))`
  }
};
