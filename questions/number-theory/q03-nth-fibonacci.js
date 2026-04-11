const Q_NUMBER_3 = {
  id: "number-theory-03",
  title: "Nth Fibonacci Number",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A botanist studying the growth pattern of plants observes that leaf counts follow the Fibonacci sequence.",
  description: 
    "Given N, print the Nth Fibonacci number. Consider F(1) = 0, F(2) = 1.",
  constraints: [
    "1 ≤ N ≤ 50"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "Single integer — the Nth Fibonacci number",
  examples: [
    {
      input: "7",
      output: "8",
      explanation: "Sequence: 0 1 1 2 3 5 8 ..."
    }
  ],
  testCases: [
    { id: 1, input: "7", expected: "8", hidden: false },
    { id: 2, input: "1", expected: "0", hidden: false },
    { id: 3, input: "2", expected: "1", hidden: true },
    { id: 4, input: "50", expected: "7778742049", hidden: true }
  ],
  bruteForce: {
    approach: "Recursive approach calculating F(N) = F(N-1) + F(N-2). Extremely slow for large N due to recomputations.",
    timeComplexity: "O(2^N)",
    spaceComplexity: "O(N) recursion stack",
    code: `def fib(n):
    if n == 1:
        return 0
    if n == 2:
        return 1
    return fib(n-1) + fib(n-2)

n = int(input())
print(fib(n))`
  },
  optimal: {
    approach: "Iterative approach storing the last two values.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
if n == 1:
    print(0)
elif n == 2:
    print(1)
else:
    a, b = 0, 1
    for _ in range(3, n + 1):
        a, b = b, a + b
    print(b)`
  }
};
