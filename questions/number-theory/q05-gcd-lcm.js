const Q_NUMBER_5 = {
  id: "number-theory-05",
  title: "GCD and LCM",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A factory computes synchronisation times for two cyclic machines.",
  description: 
    "Given A and B, find the next time they will synchronise (LCM) and their common divisor (GCD). Print GCD on line 1, LCM on line 2.",
  constraints: [
    "1 ≤ A, B ≤ 10⁶"
  ],
  inputFormat: "Line 1: Integer A\nLine 2: Integer B",
  outputFormat: "Line 1: GCD(A, B)\nLine 2: LCM(A, B)",
  examples: [
    {
      input: "12\n18",
      output: "6\n36",
      explanation: "GCD of 12 and 18 is 6. LCM is (12*18)/6 = 36."
    }
  ],
  testCases: [
    { id: 1, input: "12\n18", expected: "6\n36", hidden: false },
    { id: 2, input: "7\n13", expected: "1\n91", hidden: false },
    { id: 3, input: "100\n10", expected: "10\n100", hidden: true },
    { id: 4, input: "123456\n789012", expected: "12\n8117734416", hidden: true }
  ],
  bruteForce: {
    approach: "Find GCD by looping from min(A,B) downwards to 1. Find LCM using the formula (A*B)//GCD.",
    timeComplexity: "O(min(A, B))",
    spaceComplexity: "O(1)",
    code: `a = int(input())
b = int(input())

gcd = 1
for i in range(min(a, b), 0, -1):
    if a % i == 0 and b % i == 0:
        gcd = i
        break

lcm = (a * b) // gcd
print(gcd)
print(lcm)`
  },
  optimal: {
    approach: "Use Euclidean algorithm for GCD which is O(log(min(A,B))). Alternatively use math.gcd().",
    timeComplexity: "O(log(min(A, B)))",
    spaceComplexity: "O(1)",
    code: `import math

a = int(input())
b = int(input())

gcd_val = math.gcd(a, b)
lcm_val = (a * b) // gcd_val

print(gcd_val)
print(lcm_val)`
  }
};
