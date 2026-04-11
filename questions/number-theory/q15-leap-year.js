const Q_NUMBER_15 = {
  id: "number-theory-15",
  title: "Leap Year Check",
  topic: "Number Theory",
  difficulty: "Easy",
  realWorldContext: "A calendar system needs to determine if a given year is a leap year for scheduling events.",
  description: 
    "Given Y, print \"LEAP YEAR\" or \"NOT A LEAP YEAR\". A year is a leap year if divisible by 4, except century years must be divisible by 400.",
  constraints: [
    "1 ≤ Y ≤ 9999"
  ],
  inputFormat: "Line 1: Integer Y",
  outputFormat: "LEAP YEAR or NOT A LEAP YEAR",
  examples: [
    {
      input: "2000",
      output: "LEAP YEAR",
      explanation: "2000 is divisible by 400."
    },
    {
      input: "1900",
      output: "NOT A LEAP YEAR",
      explanation: "1900 is divisible by 100 but not 400."
    }
  ],
  testCases: [
    { id: 1, input: "2000", expected: "LEAP YEAR", hidden: false },
    { id: 2, input: "1900", expected: "NOT A LEAP YEAR", hidden: false },
    { id: 3, input: "2024", expected: "LEAP YEAR", hidden: true },
    { id: 4, input: "2023", expected: "NOT A LEAP YEAR", hidden: true },
    { id: 5, input: "2100", expected: "NOT A LEAP YEAR", hidden: true }
  ],
  bruteForce: {
    approach: "Apply the logical conditions natively using modulo arithmetic.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    code: `y = int(input())
if (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0):
    print("LEAP YEAR")
else:
    print("NOT A LEAP YEAR")`
  },
  optimal: {
    approach: "Logic is inherently O(1), cannot be optimized further. Same as brute force.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    code: `y = int(input())
if (y % 4 == 0 and y % 100 != 0) or (y % 400 == 0):
    print("LEAP YEAR")
else:
    print("NOT A LEAP YEAR")`
  }
};
