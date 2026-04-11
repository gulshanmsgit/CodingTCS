const Q_STRINGS_20 = {
  id: "strings-20",
  title: "Minimum Number of Brackets to Balance a String",
  topic: "Strings",
  difficulty: "Medium",
  realWorldContext: "A code editor's auto-fix tool calculates the minimum number of bracket additions needed to make a string of brackets valid.",
  description: 
    "Given a string containing only '(' and ')', find the minimum number of brackets to add to make it balanced.",
  constraints: [
    "1 ≤ |S| ≤ 10⁵"
  ],
  inputFormat: "Line 1: String S",
  outputFormat: "Single integer — minimum additions needed",
  examples: [
    {
      input: "(()",
      output: "1",
      explanation: "Add one ')' at the end to make it '(())'."
    },
    {
      input: ")))",
      output: "3",
      explanation: "Add three '(' at the start to make it '((()))'."
    }
  ],
  testCases: [
    { id: 1, input: "(()", expected: "1", hidden: false },
    { id: 2, input: ")))", expected: "3", hidden: false },
    { id: 3, input: ")(", expected: "2", hidden: true },
    { id: 4, input: "()()()", expected: "0", hidden: true },
    { id: 5, input: "((()))(", expected: "1", hidden: true }
  ],
  bruteForce: {
    approach: "Use a stack to match brackets. Left brackets are pushed, right brackets pop perfectly mapped left equivalents. Total additions equals items remaining in stack plus unmatched right brackets.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `s = input().strip()
stack = []
unmatched_right = 0
for char in s:
    if char == '(':
        stack.append(char)
    else:
        if len(stack) > 0:
            stack.pop()
        else:
            unmatched_right += 1

unmatched_left = len(stack)
print(unmatched_right + unmatched_left)`
  },
  optimal: {
    approach: "Space optimized: Keep variables for current imbalance (left_needed and right_needed) instead of stack.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `s = input().strip()
open_brackets = 0
additions = 0

for char in s:
    if char == '(':
        open_brackets += 1
    else:
        if open_brackets > 0:
            open_brackets -= 1
        else:
            additions += 1

additions += open_brackets
print(additions)`
  }
};
