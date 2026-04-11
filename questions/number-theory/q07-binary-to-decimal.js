const Q_NUMBER_7 = {
  id: "number-theory-07",
  title: "Binary to Decimal Conversion",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A computer science lab converts binary-coded messages from a sensor network into decimal for processing.",
  description: 
    "Given a binary string B, convert it to its decimal equivalent.",
  constraints: [
    "1 ≤ |B| ≤ 32"
  ],
  inputFormat: "Line 1: Binary string B (contains only 0s and 1s)",
  outputFormat: "Single integer — decimal equivalent",
  examples: [
    {
      input: "1010",
      output: "10",
      explanation: "1*(2^3) + 0*(2^2) + 1*(2^1) + 0*(2^0) = 8 + 0 + 2 + 0 = 10"
    },
    {
      input: "11111111",
      output: "255",
      explanation: "Sum of 2^0 to 2^7 is 255."
    }
  ],
  testCases: [
    { id: 1, input: "1010", expected: "10", hidden: false },
    { id: 2, input: "11111111", expected: "255", hidden: false },
    { id: 3, input: "0", expected: "0", hidden: true },
    { id: 4, input: "1", expected: "1", hidden: true },
    { id: 5, input: "1000000000", expected: "512", hidden: true }
  ],
  bruteForce: {
    approach: "Loop from right to left, multiplying each bit by 2^power and summing up.",
    timeComplexity: "O(L) where L is length of binary string",
    spaceComplexity: "O(1)",
    code: `b = input().strip()
dec = 0
power = 0

for i in range(len(b) - 1, -1, -1):
    if b[i] == '1':
        dec += 2 ** power
    power += 1
    
print(dec)`
  },
  optimal: {
    approach: "Use python's built-in int(_, 2). Under the hood, it accumulates values left-to-right via val = val*2 + bit.",
    timeComplexity: "O(L)",
    spaceComplexity: "O(1)",
    code: `b = input().strip()
print(int(b, 2))`
  }
};
