// ============================================================
//  QUESTION: Rotate Array
// ============================================================

const Q_ARRAYS_5 = {
  id: "arrays-5",
  title: "Rotate Array",
  topic: "Arrays",
  difficulty: "Easy",

  realWorldContext:
    "Products on a conveyor belt rotate positions after each cycle.",

  description:
    "Rotate the array to the right by K steps.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
  ],

  inputFormat:
    "First line: N\nNext N lines: arr[i]\nLast line: K",

  outputFormat:
    "Rotated array",

  examples: [
    {
      input: "5\n1\n2\n3\n4\n5\n2",
      output: "4 5 1 2 3",
    },
  ],

  testCases: [
    { id: 1, input: "5\n1\n2\n3\n4\n5\n2", expected: "4 5 1 2 3", hidden: false },
    { id: 2, input: "3\n1\n2\n3\n1", expected: "3 1 2", hidden: true },
  ],

  bruteForce: {
    approach: "Rotate one by one.",
    timeComplexity: "O(N*K)",
    spaceComplexity: "O(1)",
    code: `# brute`,
  },

  optimal: {
    approach: "Reverse technique.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(1)",
    code: `# optimal`,
  },
};
