const Q_SORTING_17 = {
  id: "sorting-17",
  title: "Sort by Second Element of Pairs",
  topic: "Sorting",
  difficulty: "Medium",
  realWorldContext: "A sports leaderboard system sorts athletes first by points (descending), then by name (ascending) for tiebreaking.",
  description: 
    "Given N pairs of (name, points), sort them accordingly and print.",
  constraints: [
    "1 ≤ N ≤ 1000",
    "1 ≤ points ≤ 10⁶"
  ],
  inputFormat: "Line 1: N\nNext N lines: name and points (space-separated)",
  outputFormat: "Sorted pairs one per line, format: name points",
  examples: [
    {
      input: "4\nAlice 90\nBob 85\nCharlie 90\nDave 70",
      output: "Alice 90\nCharlie 90\nBob 85\nDave 70",
      explanation: "Alice and Charlie both have 90 points, Alice precedes Charlie."
    }
  ],
  testCases: [
    { id: 1, input: "4\nAlice 90\nBob 85\nCharlie 90\nDave 70", expected: "Alice 90\nCharlie 90\nBob 85\nDave 70", hidden: false },
    { id: 2, input: "3\nA 10\nZ 10\nM 10", expected: "A 10\nM 10\nZ 10", hidden: false },
    { id: 3, input: "2\nApple 5\nBanana 10", expected: "Banana 10\nApple 5", hidden: true },
    { id: 4, input: "4\nx 1\ny 2\nz 3\nw 4", expected: "w 4\nz 3\ny 2\nx 1", hidden: true }
  ],
  bruteForce: {
    approach: "Write a bubble sort to compare points and fallback to string comparisons.",
    timeComplexity: "O(N²)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = []
for _ in range(n):
    name, pts = input().split()
    arr.append((name, int(pts)))

for i in range(n):
    for j in range(0, n - i - 1):
        if arr[j][1] < arr[j+1][1]:
            arr[j], arr[j+1] = arr[j+1], arr[j]
        elif arr[j][1] == arr[j+1][1]:
            if arr[j][0] > arr[j+1][0]:
                arr[j], arr[j+1] = arr[j+1], arr[j]

for item in arr:
    print(f"{item[0]} {item[1]}")`
  },
  optimal: {
    approach: "Python sort functionality utilizing tuples. Key returns (-points, name) prioritizing tuple comparisons securely.",
    timeComplexity: "O(N log N)",
    spaceComplexity: "O(N)",
    code: `n = int(input())
arr = []
for _ in range(n):
    name, pts = input().split()
    arr.append((name, int(pts)))

arr.sort(key=lambda x: (-x[1], x[0]))

for item in arr:
    print(f"{item[0]} {item[1]}")`
  }
};
