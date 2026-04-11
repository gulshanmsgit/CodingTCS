const Q_NUMBER_20 = {
  id: "number-theory-20",
  title: "Factorial of a Large Number",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A scientific computing lab calculates exact factorials for combinatorics research.",
  description: 
    "Given N, print the exact value of N! (no truncation — Python handles big integers natively).",
  constraints: [
    "1 ≤ N ≤ 50"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "Exact integer value of N!",
  examples: [
    {
      input: "10",
      output: "3628800",
      explanation: "10! = 3628800."
    }
  ],
  testCases: [
    { id: 1, input: "10", expected: "3628800", hidden: false },
    { id: 2, input: "5", expected: "120", hidden: false },
    { id: 3, input: "0", expected: "1", hidden: true },
    { id: 4, input: "20", expected: "2432902008176640000", hidden: true }
  ],
  bruteForce: {
    approach: "For loop keeping cumulative product. Handled recursively or iteratively.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
res = 1
for i in range(2, n + 1):
    res *= i
print(res)`
  },
  optimal: {
    approach: "Same logic, perfectly adequate for constraints. In C++/Java, arrays of digits are required, but Python abstracts this natively.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `import math

n = int(input())
print(math.factorial(n))`
  }
};
