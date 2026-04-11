const Q_NUMBER_27 = {
  id: "number-theory-27",
  title: "Quadratic Equation Roots",
  topic: "Number Theory",
  difficulty: "Medium",
  realWorldContext: "A physics simulation engine solves equations of motion which reduce to quadratic form.",
  description: 
    "Given coefficients A, B, C of ax²+bx+c=0, find the roots. Formats:\n" +
    "If discriminant > 0: Root1=<val> Root2=<val> (2 decimal places)\n" +
    "If discriminant = 0: Root=<val> (2 decimal places)\n" +
    "If discriminant < 0: No Real Roots",
  constraints: [
    "-100 ≤ A, B, C ≤ 100",
    "A ≠ 0"
  ],
  inputFormat: "Line 1: A\nLine 2: B\nLine 3: C",
  outputFormat: "See formats above. In case of two roots, print the larger root first.",
  examples: [
    {
      input: "1\n-5\n6",
      output: "Root1=3.00 Root2=2.00",
      explanation: "Roots are 3 and 2."
    },
    {
      input: "1\n2\n1",
      output: "Root=-1.00",
      explanation: "Single root."
    }
  ],
  testCases: [
    { id: 1, input: "1\n-5\n6", expected: "Root1=3.00 Root2=2.00", hidden: false },
    { id: 2, input: "1\n2\n1", expected: "Root=-1.00", hidden: false },
    { id: 3, input: "1\n1\n1", expected: "No Real Roots", hidden: true },
    { id: 4, input: "-1\n2\n3", expected: "Root1=3.00 Root2=-1.00", hidden: true }
  ],
  bruteForce: {
    approach: "Apply quadratic formula using basic variables.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    code: `import math

a = float(input())
b = float(input())
c = float(input())

d = b**2 - 4*a*c

if d > 0:
    r1 = (-b + math.sqrt(d)) / (2*a)
    r2 = (-b - math.sqrt(d)) / (2*a)
    if r2 > r1:
        r1, r2 = r2, r1
    print(f"Root1={r1:.2f} Root2={r2:.2f}")
elif d == 0:
    r = -b / (2*a)
    if r == -0.0: r = 0.0
    print(f"Root={r:.2f}")
else:
    print("No Real Roots")`
  },
  optimal: {
    approach: "Formula evaluation. Mathematical definition cannot really be optimized.",
    timeComplexity: "O(1)",
    spaceComplexity: "O(1)",
    code: `import math

a = float(input())
b = float(input())
c = float(input())

d = b**2 - 4*a*c

if d > 0:
    r1 = (-b + math.sqrt(d)) / (2*a)
    r2 = (-b - math.sqrt(d)) / (2*a)
    if r2 > r1:
        r1, r2 = r2, r1
    print(f"Root1={r1:.2f} Root2={r2:.2f}")
elif d == 0:
    r = -b / (2*a)
    # Correct for -0.0 floating edge
    if abs(r) < 1e-9: r = 0.0
    print(f"Root={r:.2f}")
else:
    print("No Real Roots")`
  }
};
