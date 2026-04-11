const Q_NUMBER_8 = {
  id: "number-theory-08",
  title: "Count Prime Numbers up to N",
  topic: "Number Theory",
  difficulty: "Medium",
  realWorldContext: "A research lab needs a count of prime numbers within a range to model statistical distributions.",
  description: 
    "Given N, print the count of all prime numbers less than or equal to N.",
  constraints: [
    "1 ≤ N ≤ 10⁶"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "Single integer — count of primes ≤ N",
  examples: [
    {
      input: "10",
      output: "4",
      explanation: "Primes: 2, 3, 5, 7. Count is 4."
    }
  ],
  testCases: [
    { id: 1, input: "10", expected: "4", hidden: false },
    { id: 2, input: "20", expected: "8", hidden: false },
    { id: 3, input: "1", expected: "0", hidden: true },
    { id: 4, input: "100", expected: "25", hidden: true },
    { id: 5, input: "100000", expected: "9592", hidden: true }
  ],
  bruteForce: {
    approach: "Iterate over every number from 2 to N, and check if it's prime. Very slow for large N.",
    timeComplexity: "O(N * sqrt(N))",
    spaceComplexity: "O(1)",
    code: `import math

def is_prime(num):
    if num < 2: return False
    for i in range(2, int(math.isqrt(num)) + 1):
        if num % i == 0:
            return False
    return True

n = int(input())
count = 0
for i in range(2, n + 1):
    if is_prime(i):
        count += 1
print(count)`
  },
  optimal: {
    approach: "Use Sieve of Eratosthenes to precompute primes up to N efficiently.",
    timeComplexity: "O(N log(log N))",
    spaceComplexity: "O(N) for array",
    code: `n = int(input())

if n < 2:
    print(0)
else:
    sieve = [True] * (n + 1)
    sieve[0] = sieve[1] = False
    
    p = 2
    while p * p <= n:
        if sieve[p]:
            for i in range(p * p, n + 1, p):
                sieve[i] = False
        p += 1
        
    print(sum(sieve))`
  }
};
