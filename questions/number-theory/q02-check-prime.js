const Q_NUMBER_2 = {
  id: "number-theory-02",
  title: "Check Prime Number",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A cryptographic key generator at a security firm only accepts prime numbers as seeds.",
  description: 
    "Given N, print \"PRIME\" if it is prime, else \"NOT PRIME\".",
  constraints: [
    "1 ≤ N ≤ 10⁶"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "PRIME or NOT PRIME",
  examples: [
    {
      input: "17",
      output: "PRIME",
      explanation: "17 is only divisible by 1 and 17."
    },
    {
      input: "15",
      output: "NOT PRIME",
      explanation: "15 is divisible by 3 and 5."
    }
  ],
  testCases: [
    { id: 1, input: "17", expected: "PRIME", hidden: false },
    { id: 2, input: "15", expected: "NOT PRIME", hidden: false },
    { id: 3, input: "2", expected: "PRIME", hidden: true },
    { id: 4, input: "1", expected: "NOT PRIME", hidden: true },
    { id: 5, input: "999983", expected: "PRIME", hidden: true }
  ],
  bruteForce: {
    approach: "Loop from 2 to N-1 and check if N is divisible by any of them.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
if n <= 1:
    print("NOT PRIME")
else:
    is_prime = True
    for i in range(2, n):
        if n % i == 0:
            is_prime = False
            break
    
    if is_prime:
        print("PRIME")
    else:
        print("NOT PRIME")`
  },
  optimal: {
    approach: "Loop up to sqrt(N). If no divisors are found up to that, it's prime.",
    timeComplexity: "O(sqrt(N))",
    spaceComplexity: "O(1)",
    code: `import math

n = int(input())
if n <= 1:
    print("NOT PRIME")
else:
    is_prime = True
    for i in range(2, int(math.isqrt(n)) + 1):
        if n % i == 0:
            is_prime = False
            break
            
    print("PRIME" if is_prime else "NOT PRIME")`
  }
};
