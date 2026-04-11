const Q_STRINGS_19 = {
  id: "strings-19",
  title: "Count Words in a String",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A document analytics tool counts total words in a text block.",
  description: 
    "Given a string S that may have multiple spaces between words, count the total number of words.",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S",
  outputFormat: "Single integer — word count",
  examples: [
    {
      input: "  hello   world  how  are  you  ",
      output: "5",
      explanation: "Multiple spaces correctly ignored."
    }
  ],
  testCases: [
    { id: 1, input: "  hello   world  how  are  you  ", expected: "5", hidden: false },
    { id: 2, input: "JustOneWord", expected: "1", hidden: false },
    { id: 3, input: "       ", expected: "0", hidden: true },
    { id: 4, input: "a b c d  e", expected: "5", hidden: true }
  ],
  bruteForce: {
    approach: "Iterate across the string counting transitions from space to a character.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `s = input()
count = 0
in_word = False
for char in s:
    if char != ' ':
        if not in_word:
            count += 1
            in_word = True
    else:
        in_word = False
        
print(count)`
  },
  optimal: {
    approach: "Use python's string split function. Without arguments it splits on contiguous whitespace sequences.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input()
print(len(s.split()))`
  }
};
