const Q_STRINGS_2 = {
  id: "strings-02",
  title: "Count Vowels and Consonants",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A text scanner at a publishing company needs to categorise characters in a manuscript.",
  description: 
    "Given a string S of lowercase/uppercase English letters, print the count of vowels and consonants on separate lines.",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S (only alphabets, no spaces)",
  outputFormat: "Line 1: Number of vowels\nLine 2: Number of consonants",
  examples: [
    {
      input: "HelloWorld",
      output: "3\n7",
      explanation: "Vowels: e, o, o (3). Consonants: H, l, l, W, r, l, d (7)."
    }
  ],
  testCases: [
    { id: 1, input: "HelloWorld", expected: "3\n7", hidden: false },
    { id: 2, input: "AEIOU", expected: "5\n0", hidden: false },
    { id: 3, input: "bzzt", expected: "0\n4", hidden: true },
    { id: 4, input: "TcsNqtExam", expected: "3\n7", hidden: true }
  ],
  bruteForce: {
    approach: "Iterate through each character, check if it's a vowel. If yes, increment vowel count, else increment consonant count.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `s = input().strip()
vowels = "aeiouAEIOU"
v_count = 0
c_count = 0
for char in s:
    if char.isalpha():
        if char in vowels:
            v_count += 1
        else:
            c_count += 1
print(v_count)
print(c_count)`
  },
  optimal: {
    approach: "Same approach but optimized with a set for O(1) vowel lookups.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `s = input().strip()
vowels = set("aeiouAEIOU")
v_count = 0
c_count = 0
for char in s:
    if char.isalpha():
        if char in vowels:
            v_count += 1
        else:
            c_count += 1
print(v_count)
print(c_count)`
  }
};
