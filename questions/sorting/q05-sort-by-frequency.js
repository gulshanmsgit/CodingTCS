const Q_SORTING_5 = {
  id: "sorting-05",
  title: "Sort Array by Frequency of Elements",
  topic: "Sorting",
  difficulty: "Medium",
  realWorldContext: "A voting machine tallies votes and displays candidates in decreasing order of votes received.",
  description: 
    "Given an array of N integers, sort them by frequency — most frequent first. If two elements have the same frequency, the smaller element comes first.",
  constraints: [
    "1 ≤ N ≤ 10⁵",
    "1 ≤ arr[i] ≤ 10⁶"
  ],
  inputFormat: "Line 1: N\nLine 2: N space-separated integers",
  outputFormat: "N space-separated integers sorted by rules",
  examples: [
    {
      input: "8\n4 5 6 5 4 3 4 6",
      output: "4 4 4 5 5 6 6 3",
      explanation: "4 appears 3 times. 5 and 6 appear twice, 5 represents smaller value so it precedes 6."
    }
  ],
  testCases: [
    { id: 1, input: "8\n4 5 6 5 4 3 4 6", expected: "4 4 4 5 5 6 6 3", hidden: false },
    { id: 2, input: "5\n1 1 2 2 3", expected: "1 1 2 2 3", hidden: false },
    { id: 3, input: "6\n9 9 8 8 7 7", expected: "7 7 8 8 9 9", hidden: true },
    { id: 4, input: "4\n1 2 3 4", expected: "1 2 3 4", hidden: true }
  ],
  bruteForce: {
    approach: "Count elements using list methods dynamically (slow), then build a custom comparison list.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = list(map(int, input().split()))

# Inefficient manual counting
count_dict = {}
for x in arr:
    if x in count_dict:
        count_dict[x] += 1
    else:
        count_dict[x] = 1
        
arr.sort(key=lambda x: (-count_dict[x], x))
print(*arr)`
  },
  optimal: {
    approach: "Use collections.Counter for O(N) frequency mapping. Then sort.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    code: `from collections import Counter

n = int(input())
arr = list(map(int, input().split()))

freq = Counter(arr)

# Sort with custom key tuple
arr.sort(key=lambda x: (-freq[x], x))

print(*arr)`
  }
};
