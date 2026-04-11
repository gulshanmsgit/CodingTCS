const Q_STRINGS_4 = {
  id: "strings-04",
  title: "First Non-Repeating Character",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A messaging app highlights the first unique character in a typed word to help auto-correct.",
  description: 
    "Given a string S, find the index (0-based) of the first character that does not repeat. If every character repeats, print -1.",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S (lowercase letters only)",
  outputFormat: "Single integer — 0-based index, or -1",
  examples: [
    {
      input: "loveleetcode",
      output: "2",
      explanation: "The first non-repeating character is 'v' at index 2."
    },
    {
      input: "aabb",
      output: "-1",
      explanation: "Every character repeats."
    }
  ],
  testCases: [
    { id: 1, input: "loveleetcode", expected: "2", hidden: false },
    { id: 2, input: "aabb", expected: "-1", hidden: false },
    { id: 3, input: "x", expected: "0", hidden: true },
    { id: 4, input: "tcsnqt", expected: "1", hidden: true }
  ],
  bruteForce: {
    approach: "For each character, scan the entire string to see if it repeats. First one without repeats is returned.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `s = input().strip()
ans = -1
for i in range(len(s)):
    is_unique = True
    for j in range(len(s)):
        if i != j and s[i] == s[j]:
            is_unique = False
            break
    if is_unique:
        ans = i
        break
print(ans)`
  },
  optimal: {
    approach: "Use a frequency map to count occurrences in first pass. In second pass, return index of first char with frequency 1.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `from collections import Counter

s = input().strip()
counts = Counter(s)
ans = -1

for i, char in enumerate(s):
    if counts[char] == 1:
        ans = i
        break

print(ans)`
  }
};
