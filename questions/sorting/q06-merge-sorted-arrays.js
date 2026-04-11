const Q_SORTING_6 = {
  id: "sorting-06",
  title: "Merge Two Sorted Arrays",
  topic: "Sorting",
  difficulty: "Medium",
  realWorldContext: "Two different library branches have their book catalogues already sorted by catalog number.",
  description: 
    "The central library wants a single merged sorted catalogue without using extra space beyond the output list. Given two sorted arrays A (size M) and B (size N), produce a single merged sorted array.",
  constraints: [
    "1 ≤ M, N ≤ 10⁵",
    "-10⁹ ≤ elements ≤ 10⁹"
  ],
  inputFormat: "Line 1: M\nLine 2: Space-separated integers of A\nLine 3: N\nLine 4: Space-separated integers of B",
  outputFormat: "M+N space-separated integers in sorted order",
  examples: [
    {
      input: "4\n1 3 5 7\n3\n2 4 6",
      output: "1 2 3 4 5 6 7",
      explanation: "Merged directly."
    }
  ],
  testCases: [
    { id: 1, input: "4\n1 3 5 7\n3\n2 4 6", expected: "1 2 3 4 5 6 7", hidden: false },
    { id: 2, input: "3\n1 1 1\n3\n1 1 1", expected: "1 1 1 1 1 1", hidden: false },
    { id: 3, input: "2\n10 20\n1\n5", expected: "5 10 20", hidden: true },
    { id: 4, input: "1\n-5\n2\n-10 0", expected: "-10 -5 0", hidden: true }
  ],
  bruteForce: {
    approach: "Combine both arrays into one and run an O(N log N) sorting algorithm.",
    timeComplexity: "O((M+N) log (M+N))",
    spaceComplexity: "O(M+N)",
    code: `m = int(input())
a = list(map(int, input().split()))
n = int(input())
b = list(map(int, input().split()))

merged = a + b
merged.sort()
print(*merged)`
  },
  optimal: {
    approach: "Use two pointers, one for each sorted array. Pick the smaller element to ensure sorted linear progression.",
    timeComplexity: "O(M+N)",
    spaceComplexity: "O(M+N) for output",
    code: `m = int(input())
a = list(map(int, input().split()))
n = int(input())
b = list(map(int, input().split()))

ans = []
i, j = 0, 0

while i < m and j < n:
    if a[i] <= b[j]:
        ans.append(a[i])
        i += 1
    else:
        ans.append(b[j])
        j += 1

while i < m:
    ans.append(a[i])
    i += 1
while j < n:
    ans.append(b[j])
    j += 1
    
print(*ans)`
  }
};
