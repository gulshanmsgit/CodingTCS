const Q_NUMBER_12 = {
  id: "number-theory-12",
  title: "Strong Number Check",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A number-classification lab tags numbers whose digit factorials sum back to the number itself.",
  description: 
    "Given N, print \"STRONG\" if it is a strong number, else \"NOT STRONG\".",
  constraints: [
    "1 ≤ N ≤ 10⁶"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "STRONG or NOT STRONG",
  examples: [
    {
      input: "145",
      output: "STRONG",
      explanation: "1! + 4! + 5! = 1 + 24 + 120 = 145"
    }
  ],
  testCases: [
    { id: 1, input: "145", expected: "STRONG", hidden: false },
    { id: 2, input: "123", expected: "NOT STRONG", hidden: false },
    { id: 3, input: "2", expected: "STRONG", hidden: true },
    { id: 4, input: "40585", expected: "STRONG", hidden: true }
  ],
  bruteForce: {
    approach: "Calculate factorial dynamically for each digit.",
    timeComplexity: "O(D * M) where D is number of digits and M is digit value",
    spaceComplexity: "O(1)",
    code: `def fact(n):
    res = 1
    for i in range(2, n + 1):
        res *= i
    return res

n_str = input().strip()
total = 0
for digit in n_str:
    total += fact(int(digit))

if total == int(n_str):
    print("STRONG")
else:
    print("NOT STRONG")`
  },
  optimal: {
    approach: "Precompute factorials 0 to 9 in an array to avoid redundant calculations.",
    timeComplexity: "O(D)",
    spaceComplexity: "O(1)",
    code: `n_str = input().strip()
facts = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880]

total = sum(facts[int(d)] for d in n_str)

if total == int(n_str):
    print("STRONG")
else:
    print("NOT STRONG")`
  }
};
