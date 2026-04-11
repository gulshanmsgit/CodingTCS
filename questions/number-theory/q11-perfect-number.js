const Q_NUMBER_11 = {
  id: "number-theory-11",
  title: "Perfect Number Check",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A mathematician at a research lab studies numbers that equal the sum of all their proper divisors.",
  description: 
    "Given N, print \"PERFECT\" if it is a perfect number, else \"NOT PERFECT\". Perfect number: sum of (divisors excluding itself) == number.",
  constraints: [
    "1 ≤ N ≤ 10⁶"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "PERFECT or NOT PERFECT",
  examples: [
    {
      input: "28",
      output: "PERFECT",
      explanation: "Divisors of 28: 1+2+4+7+14 = 28."
    }
  ],
  testCases: [
    { id: 1, input: "28", expected: "PERFECT", hidden: false },
    { id: 2, input: "12", expected: "NOT PERFECT", hidden: false },
    { id: 3, input: "6", expected: "PERFECT", hidden: true },
    { id: 4, input: "496", expected: "PERFECT", hidden: true },
    { id: 5, input: "1", expected: "NOT PERFECT", hidden: true }
  ],
  bruteForce: {
    approach: "Loop from 1 to N-1, adding up divisors.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
total = 0
for i in range(1, n):
    if n % i == 0:
        total += i
        
if total == n and n != 1:
    print("PERFECT")
else:
    print("NOT PERFECT")`
  },
  optimal: {
    approach: "Loop up to sqrt(N) to find divisors in pairs.",
    timeComplexity: "O(sqrt(N))",
    spaceComplexity: "O(1)",
    code: `import math

n = int(input())
if n <= 1:
    print("NOT PERFECT")
else:
    total = 1
    for i in range(2, int(math.isqrt(n)) + 1):
        if n % i == 0:
            total += i
            if i != n // i:
                total += n // i
                
    if total == n:
        print("PERFECT")
    else:
        print("NOT PERFECT")`
  }
};
