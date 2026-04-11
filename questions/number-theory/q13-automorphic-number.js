const Q_NUMBER_13 = {
  id: "number-theory-13",
  title: "Automorphic Number Check",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "An encryption algorithm flags automorphic numbers — numbers whose square ends with the number itself.",
  description: 
    "Given N, print \"AUTOMORPHIC\" or \"NOT AUTOMORPHIC\".",
  constraints: [
    "1 ≤ N ≤ 10⁶"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "AUTOMORPHIC or NOT AUTOMORPHIC",
  examples: [
    {
      input: "25",
      output: "AUTOMORPHIC",
      explanation: "25^2 = 625, ends in 25."
    }
  ],
  testCases: [
    { id: 1, input: "25", expected: "AUTOMORPHIC", hidden: false },
    { id: 2, input: "7", expected: "NOT AUTOMORPHIC", hidden: false },
    { id: 3, input: "76", expected: "AUTOMORPHIC", hidden: true },
    { id: 4, input: "376", expected: "AUTOMORPHIC", hidden: true }
  ],
  bruteForce: {
    approach: "Convert to string and use string match. If square ending slice == string.",
    timeComplexity: "O(D)",
    spaceComplexity: "O(D)",
    code: `n = int(input())
sq = n * n
n_str = str(n)
sq_str = str(sq)

if sq_str.endswith(n_str):
    print("AUTOMORPHIC")
else:
    print("NOT AUTOMORPHIC")`
  },
  optimal: {
    approach: "Mathematical checking via modulo 10^length.",
    timeComplexity: "O(D)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
sq = n * n

length = len(str(n))
if sq % (10 ** length) == n:
    print("AUTOMORPHIC")
else:
    print("NOT AUTOMORPHIC")`
  }
};
