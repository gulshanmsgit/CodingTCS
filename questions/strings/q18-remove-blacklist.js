const Q_STRINGS_18 = {
  id: "strings-18",
  title: "Remove Characters matching Blacklist",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A data-masking system sanitises a message by removing all characters that appear in a blacklist string.",
  description: 
    "Given S1 (message) and S2 (blacklist), print S1 after removing every character that occurs in S2. If empty, print \"EMPTY\".",
  constraints: [
    "1 ≤ |S1|, |S2| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S1\nLine 2: String S2",
  outputFormat: "Filtered string. If result is empty, print \"EMPTY\"",
  examples: [
    {
      input: "hello world\nlo",
      output: "he wrd",
      explanation: "'l' and 'o' removed from S1."
    }
  ],
  testCases: [
    { id: 1, input: "hello world\nlo", expected: "he wrd", hidden: false },
    { id: 2, input: "abcd\ncd", expected: "ab", hidden: false },
    { id: 3, input: "tcs nqt\n ", expected: "tcsnqt", hidden: true },
    { id: 4, input: "aaa \na ", expected: "EMPTY", hidden: true }
  ],
  bruteForce: {
    approach: "Loop character by character, linearly searching S2 to see if it should be removed.",
    timeComplexity: "O(|S1| * |S2|)",
    spaceComplexity: "O(|S1|)",
    code: `s1 = input().strip('\\n')
s2 = input().strip('\\n')

ans = ""
for char in s1:
    if char not in s2:
        ans += char
        
print(ans if ans else "EMPTY")`
  },
  optimal: {
    approach: "Convert string S2 to a set to do O(1) lookups.",
    timeComplexity: "O(|S1| + |S2|)",
    spaceComplexity: "O(|S2|)",
    code: `s1 = input().strip('\\n')
s2 = set(input().strip('\\n'))

ans = "".join(c for c in s1 if c not in s2)
print(ans if ans else "EMPTY")`
  }
};
