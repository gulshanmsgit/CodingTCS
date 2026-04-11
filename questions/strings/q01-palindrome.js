const Q_STRINGS_1 = {
  id: "strings-01",
  title: "Check if a String is a Palindrome",
  topic: "Strings",
  difficulty: "Easy",
  realWorldContext: "A library system validates palindrome-based security codes.",
  description: 
    "Given a string S, determine if it reads the same forwards and backwards.\n\n" +
    "Ignore case and consider only alphanumeric characters. Print \"YES\" if palindrome, else \"NO\".",
  constraints: [
    "1 ≤ |S| ≤ 10⁵",
  ],
  inputFormat: "Line 1: String S",
  outputFormat: "YES or NO",
  examples: [
    {
      input: "racecar",
      output: "YES",
      explanation: "Reads the same forwards and backwards."
    },
    {
      input: "hello",
      output: "NO",
      explanation: "Reversed is 'olleh', which is different."
    }
  ],
  testCases: [
    { id: 1, input: "racecar", expected: "YES", hidden: false },
    { id: 2, input: "hello", expected: "NO", hidden: false },
    { id: 3, input: "AmanaplanacanalPanama", expected: "YES", hidden: true },
    { id: 4, input: "12321", expected: "YES", hidden: true },
    { id: 5, input: "TCSNQT", expected: "NO", hidden: true }
  ],
  bruteForce: {
    approach: "Create a new string containing only alphanumeric lowercase characters, reverse it, and compare.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
clean_s = ''.join(c.lower() for c in s if c.isalnum())
if clean_s == clean_s[::-1]:
    print("YES")
else:
    print("NO")`
  },
  optimal: {
    approach: "Use two pointers, one at start and one at end, moving inwards and ignoring non-alphanumeric chars.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `s = input().strip()
left, right = 0, len(s) - 1
is_pal = True
while left < right:
    if not s[left].isalnum():
        left += 1
    elif not s[right].isalnum():
        right -= 1
    elif s[left].lower() != s[right].lower():
        is_pal = False
        break
    else:
        left += 1
        right -= 1
        
print("YES" if is_pal else "NO")`
  }
};
