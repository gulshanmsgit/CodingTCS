const Q_NUMBER_16 = {
  id: "number-theory-16",
  title: "Express as Sum of Two Primes",
  topic: "Number Theory",
  difficulty: "Medium",
  realWorldContext: "A research lab is studying Goldbach's conjecture — every even integer > 2 can be expressed as the sum of two primes.",
  description: 
    "Given an even number N, print all pairs of primes that add up to N, sorted by first element. If not possible, print \"NOT POSSIBLE\".",
  constraints: [
    "4 ≤ N ≤ 10⁴"
  ],
  inputFormat: "Line 1: Integer N (even, > 2)",
  outputFormat: "Each pair on a separate line, format: a b",
  examples: [
    {
      input: "10",
      output: "3 7\n5 5",
      explanation: "3 and 7 are prime, 5 and 5 are prime."
    }
  ],
  testCases: [
    { id: 1, input: "10", expected: "3 7\n5 5", hidden: false },
    { id: 2, input: "4", expected: "2 2", hidden: false },
    { id: 3, input: "7", expected: "NOT POSSIBLE", hidden: true },
    { id: 4, input: "36", expected: "5 31\n7 29\n13 23\n17 19", hidden: true },
    { id: 5, input: "8", expected: "3 5", hidden: true }
  ],
  bruteForce: {
    approach: "Loop from 2 to N//2, check if i is prime and N-i is prime. Extremely slow for many values due to repeating passes.",
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

if n % 2 != 0 or n <= 2:
    print("NOT POSSIBLE")
else:
    found = False
    for i in range(2, n // 2 + 1):
        if is_prime(i) and is_prime(n - i):
            print(f"{i} {n - i}")
            found = True
    if not found:
        print("NOT POSSIBLE")`
  },
  optimal: {
    approach: "Precompute primes using a Sieve, then lookup in O(1).",
    timeComplexity: "O(N log(log N))",
    spaceComplexity: "O(N)",
    code: `n = int(input())

if n % 2 != 0 or n <= 2:
    print("NOT POSSIBLE")
else:
    sieve = [True] * (n + 1)
    sieve[0] = sieve[1] = False
    
    p = 2
    while p * p <= n:
        if sieve[p]:
            for i in range(p * p, n + 1, p):
                sieve[i] = False
        p += 1
        
    found = False
    for i in range(2, n // 2 + 1):
        if sieve[i] and sieve[n - i]:
            print(f"{i} {n - i}")
            found = True
            
    if not found:
        print("NOT POSSIBLE")`
  }
};
