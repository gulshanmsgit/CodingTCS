const Q_STRINGS_9 = {
  id: "strings-09",
  title: "Check if String Contains Only Digits",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "An input validation system in a banking portal checks whether a user-entered PIN is purely numeric.",
  description: 
    "Given a string S, print \"VALID\" if it contains only digit characters (0–9), else print \"INVALID\".",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S",
  outputFormat: "VALID or INVALID",
  examples: [
    {
      input: "12345",
      output: "VALID",
      explanation: "Only digits."
    },
    {
      input: "12a45",
      output: "INVALID",
      explanation: "Contains letter 'a'."
    }
  ],
  testCases: [
    { id: 1, input: "12345", expected: "VALID", hidden: false },
    { id: 2, input: "12a45", expected: "INVALID", hidden: false },
    { id: 3, input: "0000", expected: "VALID", hidden: true },
    { id: 4, input: " 123", expected: "INVALID", hidden: true }
  ],
  bruteForce: {
    approach: "Iterate over characters and check if each character is between '0' and '9'.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `s = input().strip('\n') # keep spaces if any
valid = True
for c in s:
    if c < '0' or c > '9':
        valid = False
        break

print("VALID" if valid else "INVALID")`
  },
  optimal: {
    approach: "Use python's built-in string method isdigit().",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `s = input().strip('\n') # don't strip spaces as they are invalid
if s.isdigit():
    print("VALID")
else:
    print("INVALID")`
  }
};
