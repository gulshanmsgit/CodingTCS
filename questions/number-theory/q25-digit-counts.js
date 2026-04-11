const Q_NUMBER_25 = {
  id: "number-theory-25",
  title: "Count Digits, Even Digits, Odd Digits in a Number",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A digit-scanner at a data entry firm audits numbers for compliance.",
  description: 
    "Given an integer N, print three values on separate lines: total digit count, count of even digits, count of odd digits.",
  constraints: [
    "1 ≤ N ≤ 10¹⁸"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "Line 1: Total digits\nLine 2: Even digit count\nLine 3: Odd digit count",
  examples: [
    {
      input: "1234567",
      output: "7\n3\n4",
      explanation: "even: 2,4,6 -> 3; odd: 1,3,5,7 -> 4"
    }
  ],
  testCases: [
    { id: 1, input: "1234567", expected: "7\n3\n4", hidden: false },
    { id: 2, input: "2468", expected: "4\n4\n0", hidden: false },
    { id: 3, input: "0", expected: "1\n1\n0", hidden: true },
    { id: 4, input: "1357", expected: "4\n0\n4", hidden: true }
  ],
  bruteForce: {
    approach: "Convert to string and check parity of each character individually.",
    timeComplexity: "O(D)",
    spaceComplexity: "O(D)",
    code: `n_str = input().strip()
even = 0
odd = 0
for char in n_str:
    if int(char) % 2 == 0:
        even += 1
    else:
        odd += 1
print(len(n_str))
print(even)
print(odd)`
  },
  optimal: {
    approach: "Module by 10 to extract digits numerically. No string conversion costs.",
    timeComplexity: "O(D)",
    spaceComplexity: "O(1)",
    code: `n = abs(int(input()))

if n == 0:
    print("1\\n1\\n0")
else:
    t_count = 0
    even = 0
    odd = 0
    
    while n > 0:
        d = n % 10
        if d % 2 == 0:
            even += 1
        else:
            odd += 1
        t_count += 1
        n //= 10
        
    print(t_count)
    print(even)
    print(odd)`
  }
};
