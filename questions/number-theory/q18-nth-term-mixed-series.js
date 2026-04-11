const Q_NUMBER_18 = {
  id: "number-theory-18",
  title: "Nth Term of Mixed Series",
  topic: "Number Theory",
  difficulty: "Medium",
  realWorldContext: "A sensor network generates a signal series that alternates between Fibonacci and natural-number squares.",
  description: 
    "The merged series is: 0, 1, 1, 4, 2, 9, 3, 16, 5, 25 ... (alternating Fibonacci and perfect squares). Given N (1-indexed), print the Nth term.",
  constraints: [
    "1 ≤ N ≤ 50"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "Single integer — Nth term",
  examples: [
    {
      input: "5",
      output: "2",
      explanation: "Odd terms are fibonacci: 1st=0, 3rd=1, 5th=2."
    },
    {
      input: "6",
      output: "9",
      explanation: "Even terms are squares: 2nd=1^2, 4th=2^2, 6th=3^2."
    }
  ],
  testCases: [
    { id: 1, input: "5", expected: "2", hidden: false },
    { id: 2, input: "6", expected: "9", hidden: false },
    { id: 3, input: "1", expected: "0", hidden: true },
    { id: 4, input: "10", expected: "25", hidden: true },
    { id: 5, input: "19", expected: "34", hidden: true }
  ],
  bruteForce: {
    approach: "Generate the full sequence up to N and print the N-1 index.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())

seq = []
fib_a, fib_b = 0, 1
sq_base = 1

for i in range(1, n + 1):
    if i % 2 != 0:
        seq.append(fib_a)
        fib_a, fib_b = fib_b, fib_a + fib_b
    else:
        seq.append(sq_base * sq_base)
        sq_base += 1
        
print(seq[-1])`
  },
  optimal: {
    approach: "Figure out if N is odd or even. Calculate just the specific Fibonacci or Square efficiently.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())

if n % 2 == 0:
    idx = n // 2
    print(idx * idx)
else:
    idx = (n // 2) + 1
    if idx == 1:
        print(0)
    elif idx == 2:
        print(1)
    else:
        a, b = 0, 1
        for _ in range(3, idx + 1):
            a, b = b, a + b
        print(b)`
  }
};
