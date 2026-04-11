const Q_NUMBER_1 = {
  id: "number-theory-01",
  title: "Check Armstrong Number",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A quality-control system flags 'Armstrong numbers' based on unique digit powers.",
  description: 
    "Given N, print \"YES\" if it is an Armstrong number, else \"NO\".\n\n" +
    "An Armstrong number equals the sum of its own digits each raised to the power of the number of digits.",
  constraints: [
    "1 ≤ N ≤ 10⁹"
  ],
  inputFormat: "Line 1: Integer N",
  outputFormat: "YES or NO",
  examples: [
    {
      input: "153",
      output: "YES",
      explanation: "1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153"
    },
    {
      input: "123",
      output: "NO",
      explanation: "1^3 + 2^3 + 3^3 != 123"
    }
  ],
  testCases: [
    { id: 1, input: "153", expected: "YES", hidden: false },
    { id: 2, input: "123", expected: "NO", hidden: false },
    { id: 3, input: "1634", expected: "YES", hidden: true },
    { id: 4, input: "8208", expected: "YES", hidden: true },
    { id: 5, input: "9", expected: "YES", hidden: true }
  ],
  bruteForce: {
    approach: "Convert number to string to find length and digits. Loop to sum each digit power.",
    timeComplexity: "O(num_digits)",
    spaceComplexity: "O(1)",
    code: `n_str = input().strip()
num = int(n_str)
p = len(n_str)

total = 0
for digit in n_str:
    total += int(digit) ** p

if total == num:
    print("YES")
else:
    print("NO")`
  },
  optimal: {
    approach: "Using list comprehension, but it's mathematically equivalent.",
    timeComplexity: "O(num_digits)",
    spaceComplexity: "O(num_digits)",
    code: `n_str = input().strip()
num = int(n_str)
p = len(n_str)

total = sum(int(digit) ** p for digit in n_str)

print("YES" if total == num else "NO")`
  }
};
