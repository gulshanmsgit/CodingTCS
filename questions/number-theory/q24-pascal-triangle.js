const Q_NUMBER_24 = {
  id: "number-theory-24",
  title: "Print Pascals Triangle",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A probability simulation tool generates Pascal's Triangle to compute binomial coefficients.",
  description: 
    "Given N, print the first N rows of Pascal's Triangle. Each row should be space-separated.",
  constraints: [
    "1 ≤ N ≤ 15"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "N rows of Pascal's Triangle, one row per line, space-separated",
  examples: [
    {
      input: "5",
      output: "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1",
      explanation: "5 rows of Pascal output."
    }
  ],
  testCases: [
    { id: 1, input: "5", expected: "1\n1 1\n1 2 1\n1 3 3 1\n1 4 6 4 1", hidden: false },
    { id: 2, input: "1", expected: "1", hidden: false },
    { id: 3, input: "3", expected: "1\n1 1\n1 2 1", hidden: true }
  ],
  bruteForce: {
    approach: "Use nCr mathematically for every position i, j.",
    timeComplexity: "O(N^3)",
    spaceComplexity: "O(1)",
    code: `import math

n = int(input())
for i in range(n):
    row = []
    for j in range(i + 1):
        val = math.factorial(i) // (math.factorial(j) * math.factorial(i - j))
        row.append(str(val))
    print(" ".join(row))`
  },
  optimal: {
    approach: "Iteratively build lines based on previously computed lists. Memory efficient dynamically.",
    timeComplexity: "O(N^2)",
    spaceComplexity: "O(N)",
    code: `n = int(input())

prev = []
for i in range(n):
    curr = [1] * (i + 1)
    for j in range(1, i):
        curr[j] = prev[j - 1] + prev[j]
    print(*(curr))
    prev = curr`
  }
};
