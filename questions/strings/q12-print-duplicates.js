const Q_STRINGS_12 = {
  id: "strings-12",
  title: "Count and Print Duplicate Characters",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A plagiarism detector flags characters that appear more than once in a document keyword.",
  description: 
    "Given string S, print each duplicate character and its frequency in alphabetical order.",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S (lowercase letters only)",
  outputFormat: "Each duplicate character and count on separate lines in alphabetical order.",
  examples: [
    {
      input: "programming",
      output: "g 2\nm 2\nr 2",
      explanation: "Duplicates counted and printed alphabetically."
    }
  ],
  testCases: [
    { id: 1, input: "programming", expected: "g 2\nm 2\nr 2", hidden: false },
    { id: 2, input: "apple", expected: "p 2", hidden: false },
    { id: 3, input: "abcd", expected: "", hidden: true },
    { id: 4, input: "aabbccdd", expected: "a 2\nb 2\nc 2\nd 2", hidden: true }
  ],
  bruteForce: {
    approach: "Double loop counting occurrences. Put in set to avoid duplicate printing.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
printed = set()
for char in sorted(set(s)):
    count = 0
    for c2 in s:
        if c2 == char: count += 1
    if count > 1:
        print(f"{char} {count}")`
  },
  optimal: {
    approach: "Use Counter, extract keys with count > 1, sort and print.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1) alphabet size",
    code: `from collections import Counter

s = input().strip()
counts = Counter(s)

for char in sorted(counts.keys()):
    if counts[char] > 1:
        print(f"{char} {counts[char]}")`
  }
};
