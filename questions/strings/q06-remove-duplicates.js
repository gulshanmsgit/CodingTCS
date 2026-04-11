const Q_STRINGS_6 = {
  id: "strings-06",
  title: "Remove Duplicate Characters",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A data-cleaning tool removes duplicate characters from a string to normalize IDs.",
  description: 
    "Given a string S, print it after removing all duplicate characters. Maintain original order.",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S (lowercase letters only)",
  outputFormat: "Single string with duplicates removed",
  examples: [
    {
      input: "programming",
      output: "progamin",
      explanation: "Duplicates like r, g, m are removed keeping their first occurrences."
    }
  ],
  testCases: [
    { id: 1, input: "programming", expected: "progamin", hidden: false },
    { id: 2, input: "aabbcc", expected: "abc", hidden: false },
    { id: 3, input: "tcsnqttcsnqt", expected: "tcsnq", hidden: true },
    { id: 4, input: "abcdef", expected: "abcdef", hidden: true }
  ],
  bruteForce: {
    approach: "Loop through string and append to new string if character not already present. Checking presence in string is O(N).",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
ans = ""
for char in s:
    if char not in ans:
        ans += char
print(ans)`
  },
  optimal: {
    approach: "Use a set to track seen characters. Lookup in set is O(1) average.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N) (up to 26 characters)",
    code: `s = input().strip()
seen = set()
ans = []
for char in s:
    if char not in seen:
        seen.add(char)
        ans.append(char)
print("".join(ans))`
  }
};
