const Q_STRINGS_14 = {
  id: "strings-14",
  title: "Find Largest Word in a Sentence",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A word-processing tool highlights the most descriptive word in a line of text.",
  description: 
    "Given a sentence, find the longest word. If multiple words have the same maximum length, print the first one.",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S (words separated by single spaces, no punctuation)",
  outputFormat: "The longest word",
  examples: [
    {
      input: "I love programming in Python",
      output: "programming",
      explanation: "'programming' has 11 characters."
    }
  ],
  testCases: [
    { id: 1, input: "I love programming in Python", expected: "programming", hidden: false },
    { id: 2, input: "TCS array question", expected: "question", hidden: false },
    { id: 3, input: "a bb ccc dd", expected: "ccc", hidden: true },
    { id: 4, input: "same size words", expected: "words", hidden: true }
  ],
  bruteForce: {
    approach: "Split the sentence into words by space. Iterate through the words, keeping track of the longest one found so far.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N) to store words",
    code: `s = input().strip()
words = s.split()
longest = ""
for word in words:
    if len(word) > len(longest):
        longest = word
print(longest)`
  },
  optimal: {
    approach: "Using Python's built-in max function with key=len. Safe and optimal. The first encountered max length is returned.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
words = s.split()
print(max(words, key=len))`
  }
};
