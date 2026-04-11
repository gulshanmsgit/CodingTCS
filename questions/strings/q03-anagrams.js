const Q_STRINGS_3 = {
  id: "strings-03",
  title: "Check if Two Strings are Anagrams",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A teacher wants to check if two students' answers are rearrangements of the same set of letters.",
  description: 
    "Given strings S1 and S2, print \"YES\" if they are anagrams, else \"NO\". Ignore case.",
  constraints: [
    "1 ≤ |S1|, |S2| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S1\nLine 2: String S2",
  outputFormat: "YES or NO",
  examples: [
    {
      input: "listen\nsilent",
      output: "YES",
      explanation: "Both words contain the exact same letters."
    },
    {
      input: "hello\nworld",
      output: "NO",
      explanation: "Different character compositions."
    }
  ],
  testCases: [
    { id: 1, input: "listen\nsilent", expected: "YES", hidden: false },
    { id: 2, input: "hello\nworld", expected: "NO", hidden: false },
    { id: 3, input: "Dormitory\nDirtyRoom", expected: "YES", hidden: true },
    { id: 4, input: "apple\npaple", expected: "YES", hidden: true },
    { id: 5, input: "aab\nabb", expected: "NO", hidden: true }
  ],
  bruteForce: {
    approach: "Convert to lowercase and sort both strings. If they match, they are anagrams.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    code: `s1 = input().strip().lower()
s2 = input().strip().lower()

if sorted(s1) == sorted(s2):
    print("YES")
else:
    print("NO")`
  },
  optimal: {
    approach: "Use a frequency array or hash map (Counter) to count characters. Compares counts in O(N) time.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `from collections import Counter

s1 = input().strip().lower()
s2 = input().strip().lower()

if Counter(s1) == Counter(s2):
    print("YES")
else:
    print("NO")`
  }
};
