const Q_NUMBER_21 = {
  id: "number-theory-21",
  title: "Check Power of Two",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A memory allocation system validates that buffer sizes are always powers of 2.",
  description: 
    "Given N, print \"YES\" if it is a power of 2, else \"NO\".",
  constraints: [
    "1 ≤ N ≤ 10⁹"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "YES or NO",
  examples: [
    {
      input: "64",
      output: "YES",
      explanation: "2^6 = 64."
    }
  ],
  testCases: [
    { id: 1, input: "64", expected: "YES", hidden: false },
    { id: 2, input: "18", expected: "NO", hidden: false },
    { id: 3, input: "1", expected: "YES", hidden: true },
    { id: 4, input: "0", expected: "NO", hidden: true },
    { id: 5, input: "1073741824", expected: "YES", hidden: true }
  ],
  bruteForce: {
    approach: "Divide by 2 continuously. If remainder becomes non-zero before reaching 1, false.",
    timeComplexity: "O(log N)",
    spaceComplexity: "O(1)",
    code: `n = int(input())

if n < 1:
    print("NO")
else:
    while n > 1:
        if n % 2 != 0:
            break
        n //= 2
    if n == 1:
        print("YES")
    else:
        print("NO")`
  },
  optimal: {
    approach: "Bitwise logic: power of 2 numbers only have a single 1 bit. N & (N-1) == 0 clears the lowest set bit. If it's 0 after clearing one bit, it was a power of 2.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    code: `n = int(input())

if n > 0 and (n & (n - 1)) == 0:
    print("YES")
else:
    print("NO")`
  }
};
