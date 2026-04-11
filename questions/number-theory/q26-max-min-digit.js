const Q_NUMBER_26 = {
  id: "number-theory-26",
  title: "Maximum and Minimum Digit in a Number",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A quality control system identifies the largest and smallest digit in a product serial number.",
  description: 
    "Given integer N, print the maximum digit on line 1 and minimum digit on line 2.",
  constraints: [
    "1 ≤ N ≤ 10¹⁸"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "Line 1: Maximum digit\nLine 2: Minimum digit",
  examples: [
    {
      input: "38542",
      output: "8\n2",
      explanation: "Max is 8, Min is 2."
    }
  ],
  testCases: [
    { id: 1, input: "38542", expected: "8\n2", hidden: false },
    { id: 2, input: "999", expected: "9\n9", hidden: false },
    { id: 3, input: "10", expected: "1\n0", hidden: true },
    { id: 4, input: "5", expected: "5\n5", hidden: true }
  ],
  bruteForce: {
    approach: "Convert to string and use ascii comparisons.",
    timeComplexity: "O(D)",
    spaceComplexity: "O(D)",
    code: `n_str = input().strip()
max_d = max(n_str)
min_d = min(n_str)
print(max_d)
print(min_d)`
  },
  optimal: {
    approach: "Extract numerically, preventing string creation.",
    timeComplexity: "O(D)",
    spaceComplexity: "O(1)",
    code: `n = abs(int(input()))

if n == 0:
    print(0)
    print(0)
else:
    max_d, min_d = -1, 10
    
    while n > 0:
        d = n % 10
        if d > max_d: max_d = d
        if d < min_d: min_d = d
        n //= 10
        
    print(max_d)
    print(min_d)`
  }
};
