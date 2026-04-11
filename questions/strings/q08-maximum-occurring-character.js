const Q_STRINGS_8 = {
  id: "strings-08",
  title: "Maximum Occurring Character",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A frequency analyser in a cryptography lab needs the most frequently occurring character in a message.",
  description: 
    "Given a string S, find the character that appears the most. If there is a tie, print the character that appears first alphabetically.",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S (lowercase letters only)",
  outputFormat: "Single character",
  examples: [
    {
      input: "mississippi",
      output: "i",
      explanation: "'i' and 's' both appear 4 times, but 'i' comes before 's'."
    }
  ],
  testCases: [
    { id: 1, input: "mississippi", expected: "i", hidden: false },
    { id: 2, input: "test", expected: "t", hidden: false },
    { id: 3, input: "abcba", expected: "a", hidden: true },
    { id: 4, input: "zzzzaaaa", expected: "a", hidden: true }
  ],
  bruteForce: {
    approach: "Use max() traversing carefully, or use dictionary to count frequencies, sort by keys alphabetically, and pick highest value.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
counts = {}
for char in s:
    counts[char] = counts.get(char, 0) + 1

ans_char = ''
max_count = 0

for char in sorted(counts.keys()):
    if counts[char] > max_count:
        max_count = counts[char]
        ans_char = char

print(ans_char)`
  },
  optimal: {
    approach: "Use collections.Counter and find max using a custom tuple key (-count, char).",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1) (max 26)",
    code: `from collections import Counter

s = input().strip()
counts = Counter(s)

# sort by max count, then alphabetically
ans = min(counts.keys(), key=lambda k: (-counts[k], k))
print(ans)`
  }
};
