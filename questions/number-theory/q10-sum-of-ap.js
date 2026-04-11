const Q_NUMBER_10 = {
  id: "number-theory-10",
  title: "Sum of AP Series",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A financial advisor calculates the total savings across months if savings increase by a fixed amount each month.",
  description: 
    "Given first term A, common difference D, and number of terms N, print the sum of the arithmetic progression.",
  constraints: [
    "-10⁴ ≤ A, D ≤ 10⁴",
    "1 ≤ N ≤ 10⁴"
  ],
  inputFormat: "Line 1: A (first term)\nLine 2: D (common difference)\nLine 3: N (number of terms)",
  outputFormat: "Single integer — sum of the AP",
  examples: [
    {
      input: "1\n2\n5",
      output: "25",
      explanation: "1 + 3 + 5 + 7 + 9 = 25"
    }
  ],
  testCases: [
    { id: 1, input: "1\n2\n5", expected: "25", hidden: false },
    { id: 2, input: "5\n0\n10", expected: "50", hidden: false },
    { id: 3, input: "10\n-2\n5", expected: "30", hidden: true },
    { id: 4, input: "-10\n5\n10", expected: "125", hidden: true }
  ],
  bruteForce: {
    approach: "Run a loop N times, adding the current term to the sum, and updating term by D.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `a = int(input())
d = int(input())
n = int(input())

total = 0
curr = a
for i in range(n):
    total += curr
    curr += d
    
print(total)`
  },
  optimal: {
    approach: "Use the mathematical formula for the sum of an AP: S = N/2 * (2A + (N-1)D).",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    code: `a = int(input())
d = int(input())
n = int(input())

total = (n * (2 * a + (n - 1) * d)) // 2
print(total)`
  }
};
