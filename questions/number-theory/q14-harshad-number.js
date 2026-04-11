const Q_NUMBER_14 = {
  id: "number-theory-14",
  title: "Harshad Number Check",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A bank's transaction validation system identifies Harshad numbers.",
  description: 
    "Given N, print \"HARSHAD\" or \"NOT HARSHAD\". A number is Harshad if it's divisible by sum of its digits.",
  constraints: [
    "1 ≤ N ≤ 10⁶"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "HARSHAD or NOT HARSHAD",
  examples: [
    {
      input: "18",
      output: "HARSHAD",
      explanation: "18 is divisible by 9."
    }
  ],
  testCases: [
    { id: 1, input: "18", expected: "HARSHAD", hidden: false },
    { id: 2, input: "19", expected: "NOT HARSHAD", hidden: false },
    { id: 3, input: "21", expected: "HARSHAD", hidden: true },
    { id: 4, input: "153", expected: "HARSHAD", hidden: true }
  ],
  bruteForce: {
    approach: "Convert to string, calculate digit sum, mod num vs sum.",
    timeComplexity: "O(D)",
    spaceComplexity: "O(D)",
    code: `n = int(input())
s = str(n)
total = sum(int(c) for c in s)

if total > 0 and n % total == 0:
    print("HARSHAD")
else:
    print("NOT HARSHAD")`
  },
  optimal: {
    approach: "Use standard integer operations to sum digits without string conversion.",
    timeComplexity: "O(D)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
temp = n
total = 0

while temp > 0:
    total += temp % 10
    temp //= 10

if total > 0 and n % total == 0:
    print("HARSHAD")
else:
    print("NOT HARSHAD")`
  }
};
