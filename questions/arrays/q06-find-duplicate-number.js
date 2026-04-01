// ============================================================
//  QUESTION: Find Duplicate Number
// ============================================================

const Q_ARRAYS_6 = {
  id: "arrays-6",
  title: "Find Duplicate Number",
  topic: "Arrays",
  difficulty: "Medium",

  realWorldContext:
    "Due to a system error, one number is recorded twice.",

  description:
    "Find the duplicate number in an array of size N+1 " +
    "containing numbers from 1 to N.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
  ],

  inputFormat:
    "First line: N\nNext N+1 lines: arr[i]",

  outputFormat:
    "Duplicate number",

  examples: [
    {
      input: "5\n1\n3\n4\n2\n2",
      output: "2",
    },
  ],

  testCases: [
    { id: 1, input: "5\n1\n3\n4\n2\n2", expected: "2", hidden: false },
    { id: 2, input: "5\n3\n1\n3\n4\n2", expected: "3", hidden: true },
  ],

  bruteForce: {
    approach: "Check all pairs.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `# brute`,
  },

  optimal: {
    approach: "Floyd cycle detection.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `# optimal`,
  },
};
