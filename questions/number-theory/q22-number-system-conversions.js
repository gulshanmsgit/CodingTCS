const Q_NUMBER_22 = {
  id: "number-theory-22",
  title: "Number System Conversions",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A processor design lab converts numbers between different bases.",
  description: 
    "Given a decimal integer N and a target base B, print the representation of N in base B. Use uppercase letters for base 16.",
  constraints: [
    "1 ≤ N ≤ 10⁶",
    "B ∈ {2, 8, 16}"
  ],
  inputFormat: "Line 1: Integer N (decimal)\nLine 2: Integer B (target base — 2, 8, or 16)",
  outputFormat: "N in base B",
  examples: [
    {
      input: "255\n16",
      output: "FF",
      explanation: "255 in hex is FF."
    },
    {
      input: "10\n2",
      output: "1010",
      explanation: "10 in binary is 1010."
    }
  ],
  testCases: [
    { id: 1, input: "255\n16", expected: "FF", hidden: false },
    { id: 2, input: "10\n2", expected: "1010", hidden: false },
    { id: 3, input: "100\n8", expected: "144", hidden: true },
    { id: 4, input: "48879\n16", expected: "BEEF", hidden: true },
    { id: 5, input: "0\n2", expected: "0", hidden: true }
  ],
  bruteForce: {
    approach: "Convert manually using division and mapping string logic.",
    timeComplexity: "O(log_B(N))",
    spaceComplexity: "O(1)",
    code: `n = int(input())
b = int(input())

if n == 0:
    print("0")
else:
    chars = "0123456789ABCDEF"
    ans = ""
    while n > 0:
        ans += chars[n % b]
        n //= b
    print(ans[::-1])`
  },
  optimal: {
    approach: "Use python's built in bin/oct/hex based on the B.",
    timeComplexity: "O(log_B(N))",
    spaceComplexity: "O(1)",
    code: `n = int(input())
b = int(input())

if b == 2:
    print(bin(n)[2:])
elif b == 8:
    print(oct(n)[2:])
elif b == 16:
    print(hex(n)[2:].upper())
else:
    print("INVALID B")`
  }
};
