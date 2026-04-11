const Q_NUMBER_6 = {
  id: "number-theory-06",
  title: "Sum of Digits Until Single Digit",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A numerology app repeatedly sums the digits of a number until it becomes a single digit.",
  description: 
    "Given N, print the final single-digit result. This is also called a digital root.",
  constraints: [
    "1 ≤ N ≤ 10¹⁸"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "Single digit integer",
  examples: [
    {
      input: "9875",
      output: "2",
      explanation: "9+8+7+5 = 29 -> 2+9 = 11 -> 1+1 = 2"
    }
  ],
  testCases: [
    { id: 1, input: "9875", expected: "2", hidden: false },
    { id: 2, input: "9", expected: "9", hidden: false },
    { id: 3, input: "123456789", expected: "9", hidden: true },
    { id: 4, input: "38", expected: "2", hidden: true }
  ],
  bruteForce: {
    approach: "Use a while loop. As long as number is > 9, sum its digits and update.",
    timeComplexity: "O(log N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())

while n > 9:
    total = 0
    while n > 0:
        total += n % 10
        n //= 10
    n = total
    
print(n)`
  },
  optimal: {
    approach: "Mathematical formula for Digital Root: 1 + (N - 1) % 9.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    code: `n = int(input())

if n == 0:
    print(0)
else:
    print(1 + (n - 1) % 9)`
  }
};
