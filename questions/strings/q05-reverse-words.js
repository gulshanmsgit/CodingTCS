const Q_STRINGS_5 = {
  id: "strings-05",
  title: "Reverse Words in a Sentence",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A word-puzzle game reverses all words in a sentence while keeping the word order intact.",
  description: 
    "Given a sentence, reverse each individual word in-place. Do not reverse the order of words — only each word's characters.",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S (words separated by single spaces)",
  outputFormat: "Single line — each word reversed, same word order",
  examples: [
    {
      input: "hello world",
      output: "olleh dlrow",
      explanation: "'hello' -> 'olleh', 'world' -> 'dlrow'"
    },
    {
      input: "TCS NQT exam",
      output: "SCT TQN maxe",
      explanation: "Words reversed in place."
    }
  ],
  testCases: [
    { id: 1, input: "hello world", expected: "olleh dlrow", hidden: false },
    { id: 2, input: "TCS NQT exam", expected: "SCT TQN maxe", hidden: false },
    { id: 3, input: "A quick brown fox", expected: "A kciuq nworb xof", hidden: true },
    { id: 4, input: "xyz", expected: "zyx", hidden: true }
  ],
  bruteForce: {
    approach: "Split the sentence into a list of words, reverse each word using slicing, and join them back.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
words = s.split(' ')
reversed_words = [w[::-1] for w in words]
print(' '.join(reversed_words))`
  },
  optimal: {
    approach: "Split by spaces, reverse string slices in-place and join. Python slicing is optimal and concise.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
print(' '.join(word[::-1] for word in s.split(' ')))`
  }
};
