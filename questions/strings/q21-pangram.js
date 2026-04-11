const Q_STRINGS_21 = {
  id: "strings-21",
  title: "Pangram Check",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A typing-speed test platform verifies whether a given sentence uses every letter of the alphabet at least once.",
  description: 
    "Given a string S, print \"PANGRAM\" if it is one, else \"NOT PANGRAM\".",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S",
  outputFormat: "PANGRAM or NOT PANGRAM",
  examples: [
    {
      input: "The quick brown fox jumps over the lazy dog",
      output: "PANGRAM",
      explanation: "Uses all a-z characters."
    }
  ],
  testCases: [
    { id: 1, input: "The quick brown fox jumps over the lazy dog", expected: "PANGRAM", hidden: false },
    { id: 2, input: "Waltz bad nymph for quick jigs vex", expected: "PANGRAM", hidden: false },
    { id: 3, input: "Hello world", expected: "NOT PANGRAM", hidden: true },
    { id: 4, input: "Pack my box with five dozen liquor jugs", expected: "PANGRAM", hidden: true }
  ],
  bruteForce: {
    approach: "Use an array of size 26 initialized with False. Mark True if character present.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `s = input().lower()
alphabet = [False] * 26

for char in s:
    if 'a' <= char <= 'z':
        alphabet[ord(char) - ord('a')] = True

if all(alphabet):
    print("PANGRAM")
else:
    print("NOT PANGRAM")`
  },
  optimal: {
    approach: "Filter string to alphabets only, convert to set, check if length is 26.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `s = input().lower()
letters = set(c for c in s if 'a' <= c <= 'z')
if len(letters) == 26:
    print("PANGRAM")
else:
    print("NOT PANGRAM")`
  }
};
