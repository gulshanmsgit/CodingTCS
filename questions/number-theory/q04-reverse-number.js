const Q_NUMBER_4 = {
  id: "number-theory-04",
  title: "Reverse a Number",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A postal sorting system reverses package ID numbers for a secondary verification step.",
  description: 
    "Given an integer N, print its reverse. If the reversed number has leading zeros, ignore them. Retain the sign if negative.",
  constraints: [
    "-10⁹ ≤ N ≤ 10⁹"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "Reversed integer",
  examples: [
    {
      input: "12345",
      output: "54321",
      explanation: "Reverse of 12345 is 54321."
    },
    {
      input: "-120",
      output: "-21",
      explanation: "Reverse of 120 is 021, ignoring leading zero is 21. Note the minus sign."
    }
  ],
  testCases: [
    { id: 1, input: "12345", expected: "54321", hidden: false },
    { id: 2, input: "-120", expected: "-21", hidden: false },
    { id: 3, input: "0", expected: "0", hidden: true },
    { id: 4, input: "1000", expected: "1", hidden: true }
  ],
  bruteForce: {
    approach: "Convert number to string, reverse the string with slicing, and handle the negative sign.",
    timeComplexity: "O(num_digits)",
    spaceComplexity: "O(num_digits)",
    code: `n_str = input().strip()
if n_str.startswith('-'):
    reversed_str = n_str[:0:-1]
    print(int('-' + reversed_str))
else:
    print(int(n_str[::-1]))`
  },
  optimal: {
    approach: "Mathematical approach using modulo 10 extraction.",
    timeComplexity: "O(num_digits)",
    spaceComplexity: "O(1)",
    code: `n = int(input())
sign = -1 if n < 0 else 1
n = abs(n)

rev = 0
while n > 0:
    rev = rev * 10 + n % 10
    n //= 10

print(rev * sign)`
  }
};
