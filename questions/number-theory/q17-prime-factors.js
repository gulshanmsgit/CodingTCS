const Q_NUMBER_17 = {
  id: "number-theory-17",
  title: "Print Prime Factors of a Number",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A cryptographic key generator decomposes a number into its prime factors for RSA key validation.",
  description: 
    "Given N, print all prime factors in ascending order. Repeated factors should appear multiple times.",
  constraints: [
    "2 ≤ N ≤ 10⁶"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "Prime factors in ascending order, space-separated",
  examples: [
    {
      input: "36",
      output: "2 2 3 3",
      explanation: "36 = 2 * 2 * 3 * 3."
    }
  ],
  testCases: [
    { id: 1, input: "36", expected: "2 2 3 3", hidden: false },
    { id: 2, input: "13", expected: "13", hidden: false },
    { id: 3, input: "315", expected: "3 3 5 7", hidden: true },
    { id: 4, input: "2", expected: "2", hidden: true }
  ],
  bruteForce: {
    approach: "Loop from 2 to N, inside check if divisibility is possible, if so append and divide N until not divisible.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(log N)",
    code: `n = int(input())
factors = []

for i in range(2, n + 1):
    while n % i == 0:
        factors.append(i)
        n //= i

print(*factors)`
  },
  optimal: {
    approach: "Loop up to sqrt(N) to extract factors, then check if N is still > 1 (prime itself).",
    timeComplexity: "O(sqrt(N))",
    spaceComplexity: "O(log N)",
    code: `import math

n = int(input())
factors = []

while n % 2 == 0:
    factors.append(2)
    n //= 2
    
for i in range(3, int(math.isqrt(n)) + 1, 2):
    while n % i == 0:
        factors.append(i)
        n //= i
        
if n > 2:
    factors.append(n)
    
print(*factors)`
  }
};
