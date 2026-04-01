// ============================================================
//  QUESTION: Product of Array Except Self
// ============================================================

const Q_ARRAYS_19 = {
  id: "arrays-19",
  title: "Product of Array Except Self",
  topic: "Arrays",
  difficulty: "Medium",

  realWorldContext:
    "A system needs to compute product metrics excluding the current element.",

  description:
    "For each element, return product of all other elements except itself.\n\n" +
    "Do not use division.",

  constraints: [
    "1 ≤ N ≤ 10⁵",
  ],

  inputFormat:
    "First line: N\nNext N lines: arr[i]",

  outputFormat:
    "Array of products",

  examples: [
    {
      input: "4\n1\n2\n3\n4",
      output: "24 12 8 6",
    },
  ],

  testCases: [
    { id: 1, input: "4\n1\n2\n3\n4", expected: "24 12 8 6", hidden: false },
    { id: 2, input: "3\n1\n0\n3", expected: "0 3 0", hidden: true },
  ],

  bruteForce: {
    approach: "Calculate product for each index.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(1)",
    code: `# brute`,
  },

  optimal: {
    approach: "Use prefix and suffix products.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = [int(input()) for _ in range(n)]

left = [1]*n
right = [1]*n

for i in range(1, n):
    left[i] = left[i-1]*arr[i-1]

for i in range(n-2, -1, -1):
    right[i] = right[i+1]*arr[i+1]

res = [left[i]*right[i] for i in range(n)]
print(*res)`,
  },
};
