const Q_NUMBER_19 = {
  id: "number-theory-19",
  title: "Sum of GP Series",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A compound-interest calculator at a bank computes the total of a geometric progression.",
  description: 
    "Given first term A, common ratio R, and number of terms N, print the sum of the GP. Print result rounded to 2 decimal places.",
  constraints: [
    "1 ≤ A, R ≤ 100",
    "1 ≤ N ≤ 20"
  ],
  inputFormat: "Line 1: A (first term)\nLine 2: R (common ratio)\nLine 3: N (number of terms)",
  outputFormat: "Sum rounded to 2 decimal places",
  examples: [
    {
      input: "2\n3\n4",
      output: "80.00",
      explanation: "2 + 6 + 18 + 54 = 80"
    }
  ],
  testCases: [
    { id: 1, input: "2\n3\n4", expected: "80.00", hidden: false },
    { id: 2, input: "10\n2\n5", expected: "310.00", hidden: false },
    { id: 3, input: "5\n1\n10", expected: "50.00", hidden: true },
    { id: 4, input: "1\n5\n7", expected: "19531.00", hidden: true }
  ],
  bruteForce: {
    approach: "Loop N times, calculating the next term and adding to total.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `a = int(input())
r = float(input())
n = int(input())

total = 0.0
curr = float(a)
for i in range(n):
    total += curr
    curr *= r
    
print(f"{total:.2f}")`
  },
  optimal: {
    approach: "Use mathematical formula for Sum of GP: a * (1 - r^n) / (1 - r) if r != 1.",
    timeComplexity: "O(log N) for power",
    spaceComplexity: "O(1)",
    code: `a = int(input())
r = float(input())
n = int(input())

if r == 1.0:
    total = a * n
else:
    total = a * (1 - r**n) / (1 - r)
    
print(f"{total:.2f}")`
  }
};
