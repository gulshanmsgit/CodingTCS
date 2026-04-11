const Q_NUMBER_28 = {
  id: "number-theory-28",
  title: "Add Two Fractions",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A recipe-scaling tool adds fractional ingredient quantities and reduces the result to its simplest form.",
  description: 
    "Given two fractions p1/q1 and p2/q2, print their sum in simplest form.",
  constraints: [
    "1 ≤ p1, p2, q1, q2 ≤ 1000"
  ],
  inputFormat: "Line 1: p1 q1 (space-separated)\nLine 2: p2 q2 (space-separated)",
  outputFormat: "Result in format p/q in lowest terms",
  examples: [
    {
      input: "1 2\n1 3",
      output: "5/6",
      explanation: "1/2 + 1/3 = 5/6"
    }
  ],
  testCases: [
    { id: 1, input: "1 2\n1 3", expected: "5/6", hidden: false },
    { id: 2, input: "1 4\n1 4", expected: "1/2", hidden: false },
    { id: 3, input: "2 5\n1 5", expected: "3/5", hidden: true },
    { id: 4, input: "5 2\n3 2", expected: "4/1", hidden: true }
  ],
  bruteForce: {
    approach: "Compute common denominator and sum numerator. Then loop to find GCD and divide.",
    timeComplexity: "O(min(Num, Den))",
    spaceComplexity: "O(1)",
    code: `p1, q1 = map(int, input().split())
p2, q2 = map(int, input().split())

den = q1 * q2
num = p1 * q2 + p2 * q1

gcd = 1
for i in range(1, min(num, den) + 1):
    if num % i == 0 and den % i == 0:
        gcd = i

print(f"{num//gcd}/{den//gcd}")`
  },
  optimal: {
    approach: "Use python math.gcd or standard Euclidean algorithm.",
    timeComplexity: "O(log(min(Num, Den)))",
    spaceComplexity: "O(1)",
    code: `import math

p1, q1 = map(int, input().split())
p2, q2 = map(int, input().split())

den = q1 * q2
num = p1 * q2 + p2 * q1

gcd_val = math.gcd(num, den)

print(f"{num//gcd_val}/{den//gcd_val}")`
  }
};
