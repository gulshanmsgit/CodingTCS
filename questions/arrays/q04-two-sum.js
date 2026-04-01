// ============================================================
//  QUESTION: Two Sum
// ============================================================

const Q_ARRAYS_4 = {
  id: "arrays-4",
  title: "Two Sum",
  topic: "Arrays",
  difficulty: "Easy",

  realWorldContext:
    "A financial system needs to identify two transactions " +
    "that together match a target value.",

  description:
    "Given an array and a target, return indices of two numbers " +
    "such that they add up to the target.",

  constraints: [
    "2 ≤ N ≤ 10⁵",
  ],

  inputFormat:
    "First line: N\nNext N lines: arr[i]\nLast line: target",

  outputFormat:
    "Two indices",

  examples: [
    {
      input: "4\n2\n7\n11\n15\n9",
      output: "0 1",
    },
  ],

  testCases: [
    { id: 1, input: "4\n2\n7\n11\n15\n9", expected: "0 1", hidden: false },
    { id: 2, input: "3\n3\n2\n4\n6", expected: "1 2", hidden: true },
  ],

  bruteForce: {
    approach: "Check all pairs.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `# brute`,
  },

  optimal: {
    approach: "Use hashmap.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `# optimal`,
  },
};
