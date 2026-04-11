const Q_STRINGS_13 = {
  id: "strings-13",
  title: "Remove All Vowels from a String",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A cipher machine strips all vowels from a message before transmission.",
  description: 
    "Given a string S, print it after removing all vowels (a, e, i, o, u — both upper and lower case). If result is empty, print \"EMPTY\"",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S",
  outputFormat: "String with all vowels removed.",
  examples: [
    {
      input: "Hello World",
      output: "Hll Wrld",
      explanation: "e, o, o are removed."
    }
  ],
  testCases: [
    { id: 1, input: "Hello World", expected: "Hll Wrld", hidden: false },
    { id: 2, input: "aeiou", expected: "EMPTY", hidden: false },
    { id: 3, input: "TCS", expected: "TCS", hidden: true },
    { id: 4, input: "AEI b O U", expected: " b ", hidden: true }
  ],
  bruteForce: {
    approach: "Iterate and construct new string only with non-vocal characters.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input() # keep spaces if any
vowels = "aeiouAEIOU"
ans = ""
for c in s:
    if c not in vowels:
        ans += c
if not ans:
    print("EMPTY")
else:
    print(ans)`
  },
  optimal: {
    approach: "Same logic utilizing python list comprehension for performance.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input()
vowels = set("aeiouAEIOU")
ans = "".join(c for c in s if c not in vowels)
print(ans if ans else "EMPTY")`
  }
};
