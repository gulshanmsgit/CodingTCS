const Q_SORTING_16 = {
  id: "sorting-16",
  title: "Rearrange Array: Alternating Positive and Negative",
  topic: "Sorting",
  difficulty: "Medium",
  realWorldContext: "A signal processing system interleaves positive and negative signal values for noise cancellation.",
  description: 
    "Given an array with equal numbers of positive and negative integers, rearrange it so they alternate starting with a positive. Maintain relative order of positives and negatives.",
  constraints: [
    "1 ≤ N ≤ 10⁵",
    "N is even, count of positive == count of negative"
  ],
  inputFormat: "Line 1: N (even number)\nLine 2: N space-separated integers",
  outputFormat: "N space-separated integers alternating positive then negative",
  examples: [
    {
      input: "8\n1 2 3 4 -1 -2 -3 -4",
      output: "1 -1 2 -2 3 -3 4 -4",
      explanation: "Picks sequentially one positive and one negative."
    }
  ],
  testCases: [
    { id: 1, input: "8\n1 2 3 4 -1 -2 -3 -4", expected: "1 -1 2 -2 3 -3 4 -4", hidden: false },
    { id: 2, input: "4\n-1 -2 1 2", expected: "1 -1 2 -2", hidden: false },
    { id: 3, input: "2\n10 -10", expected: "10 -10", hidden: true },
    { id: 4, input: "6\n-5 5 -10 10 -15 15", expected: "5 -5 10 -10 15 -15", hidden: true }
  ],
  bruteForce: {
    approach: "Store positive and negative arrays separately by traversing input once. Then interleave them.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = list(map(int, input().split()))

pos = []
neg = []
for x in arr:
    if x > 0: pos.append(x)
    else: neg.append(x)
    
ans = []
for i in range(n // 2):
    ans.append(pos[i])
    ans.append(neg[i])
    
print(*ans)`
  },
  optimal: {
    approach: "Same logic. It's essentially an O(N) partitioning procedure. Directly placing in output array index is slightly faster.",
    timeComplexity: "O(N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = list(map(int, input().split()))

ans = [0] * n
pi, ni = 0, 1

for x in arr:
    if x > 0:
        ans[pi] = x
        pi += 2
    else:
        ans[ni] = x
        ni += 2
        
print(*ans)`
  }
};
